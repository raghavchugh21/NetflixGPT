import React from "react";

type InputFieldsProps = { isLogin: boolean };
type AdditionalOptionsProps = { isLogin: boolean; setIsLogin: Function };

function InputFields(props: React.PropsWithChildren<InputFieldsProps>) {
  const { isLogin } = props;

  const inputFields: string[] = isLogin
    ? ["email", "password"]
    : ["name", "email", "password", "confirm-password"];

  return (
    <>
      {inputFields.map((id) => (
        <input
          className="h-[50px] rounded-md mb-5 bg-gray-300 pl-2"
          type={id.includes("password") ? "password" : id}
          id={id}
          placeholder={id
            .split("-")
            .map((word) => word[0].toUpperCase() + word.substring(1))
            .join(" ")}
          required
        />
      ))}
    </>
  );
}

function AdditionalOptions(
  props: React.PropsWithChildren<AdditionalOptionsProps>
) {
  const { isLogin, setIsLogin } = props;

  if (isLogin) {
    return (
      <>
        <div className="flex w-full">
          <input
            className="mr-2"
            type="checkbox"
            id="remember"
            name="remember"
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
              setIsLogin(false);
            }}
            className="text-white text-sm hover:cursor-pointer"
          >
            Sign Up now.
          </a>
        </div>
      </>
    );
  } else {
    return (
      <div className="mt-auto w-full">
        <span className="text-gray-400 text-sm mr-3">Already a user?</span>
        <a
          onClick={() => {
            setIsLogin(true);
          }}
          className="text-white text-sm hover:cursor-pointer"
        >
          Log In here.
        </a>
      </div>
    );
  }
}

function Auth() {

  const [isLogin, setIsLogin] = React.useState<boolean>(true);
  
  const title: string = isLogin ? "Sign In" : "Sign Up";

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="auth-banner h-screen w-screen brightness-50 absolute top-0 -z-10"></div>
      <div className="header w-screen absolute top-0">
        <a
          className="logo block h-[55px] w-[220px] relative top-5 left-8"
          href="/"
        ></a>
      </div>

      <div className="flex flex-col justify-center h-[600px] w-[450px] px-[68px] py-[70px] bg-black bg-opacity-60 rounded-2xl">
        <span className="h-[50px] text-4xl text-white mb-5">
          {title}
        </span>

        <InputFields isLogin={isLogin} />
        <button
          className="h-[50px] rounded-md bg-nflix-red text-white mb-3"
          type="submit"
        >
          {title}
        </button>

        <AdditionalOptions isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
    </div>
  );
}

export default Auth;
