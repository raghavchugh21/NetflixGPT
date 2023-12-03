import React from "react";
import { useForm } from "react-hook-form";
import { z, ZodTypeAny } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthUtils from "../utils/AuthUtils";
import { FORM_TYPE } from "../constants";

type FormProps = {
  formType: FORM_TYPE;
  setFormType: Function;
};

function InputArea(props: React.PropsWithChildren<any>) {
  const { formType, formHookMethods } = props;
  const {
    register,
    formState: { errors },
  } = formHookMethods;
  console.log(errors);
  const fields = AuthUtils.GetInputFields(formType);

  return (
    <>
      {fields.map((id, i) => (
        <label key={id} className="mb-5">
          <input
            className="h-[50px] w-full rounded-md bg-gray-300 pl-2"
            placeholder={id
              .split("_")
              .map((word) => word[0].toUpperCase() + word.substring(1))
              .join(" ")}
            {...(id.includes("password") ? { type: "password" } : {})}
            {...register(id)}
          />
          {
            <p className="text-white text-sm font-thin mt-3">
              {errors[id]?.message}
            </p>
          }
        </label>
      ))}
    </>
  );
}

function AdditionalOptions(props: React.PropsWithChildren<any>) {
  const { formType, setFormType, formHookMethods } = props;
  const { register } = formHookMethods;

  switch (formType) {
    case FORM_TYPE.SIGN_IN:
      return (
        <>
          <div className="flex w-full">
            <input
              className="mr-2"
              type="checkbox"
              id="remember"
              {...register("remember")}
            />
            <label className="text-gray-400 text-sm" htmlFor="remember">
              Remember me
            </label>
            <a href="/login-help" className="text-gray-400 text-sm ml-auto">
              Need help?
            </a>
          </div>
          <div className="mt-auto w-full">
            <span className="text-gray-400 text-sm mr-3">New to Netflix?</span>
            <a
              onClick={() => {
                setFormType(FORM_TYPE.SIGN_UP);
              }}
              className="text-white text-sm hover:cursor-pointer"
            >
              Sign Up now.
            </a>
          </div>
        </>
      );

    case FORM_TYPE.SIGN_UP:
      return (
        <div className="mt-auto w-full">
          <span className="text-gray-400 text-sm mr-3">Already a user?</span>
          <a
            onClick={() => {
              setFormType(FORM_TYPE.SIGN_IN);
            }}
            className="text-white text-sm hover:cursor-pointer"
          >
            Log In here.
          </a>
        </div>
      );
  }

  return <></>;
}

function Form<T extends ZodTypeAny>(props: React.PropsWithChildren<FormProps>) {
  const { formType, setFormType } = props;

  const schema: T = AuthUtils.GetSchema(formType) as T;
  type S = z.infer<typeof schema>;

  const formHookMethods = useForm<S>({ resolver: zodResolver<T>(schema) });

  return (
    <form
      onSubmit={formHookMethods.handleSubmit((data) => {
        console.log(data);
      })}
      className="h-full w-full flex flex-col"
    >
      <InputArea formType={formType} formHookMethods={formHookMethods} />
      <button
        className="h-[50px] rounded-md bg-nflix-red text-white mb-3"
        type="submit"
      >
        {AuthUtils.GetButtonText(formType)}
      </button>
      <AdditionalOptions
        formType={formType}
        setFormType={setFormType}
        formHookMethods={formHookMethods}
      />
    </form>
  );
}

function Auth() {
  const [formType, setFormType] = React.useState<FORM_TYPE>(FORM_TYPE.SIGN_IN);

  const title: string = AuthUtils.GetTitle(formType);

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="auth-banner h-screen w-screen brightness-50 absolute top-0 -z-10"></div>
      <div className="header w-screen absolute top-0">
        <a
          className="logo block h-[55px] w-[220px] relative top-5 left-8"
          href="/"
        ></a>
      </div>

      <div className="flex flex-col h-[650px] w-[450px] px-[68px] py-[70px] bg-black bg-opacity-60 rounded-2xl">
        <span className="h-[50px] text-4xl text-white mb-5">{title}</span>
        <Form formType={formType} setFormType={setFormType} />
      </div>
    </div>
  );
}

export default Auth;
