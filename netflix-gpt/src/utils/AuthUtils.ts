import { FORM_TYPE } from "../constants";
import { z } from "zod";

class AuthUtils {

  static GetSchema(formType: FORM_TYPE): z.ZodTypeAny {

    switch (formType) {

      case FORM_TYPE.SIGN_UP:
        return z
          .object({
            name: z.string().min(3, "Name must have at least 3 characters"),
            email: z.string().email("Invalid email address"),
            password: z
              .string()
              .min(8, "Password must be at least 8 characters"),
            confirm_password: z.string(),
          })
          .refine((data) => data.confirm_password === data.password, {
            message: "Passwords don't match",
            path: ["confirm_password"],
          });

      case FORM_TYPE.SIGN_IN:
        return z.object({
          email: z.string().email("Invalid email address"),
          password: z.string().min(8, "Password must be at least 8 characters"),
          remember: z.boolean(),
        });
    }
  }

  static GetTitle(formType: FORM_TYPE): string{

    switch(formType){

      case FORM_TYPE.SIGN_IN:
        return "Sign In";

      case FORM_TYPE.SIGN_UP:
        return "Sign Up";
    }
  }

  static GetButtonText(formType: FORM_TYPE): string{

    switch(formType){

      case FORM_TYPE.SIGN_IN:
        return "Sign In";

      case FORM_TYPE.SIGN_UP:
        return "Sign Up";
    }
  }

  static GetInputFields(formType: FORM_TYPE): string[]{

    switch(formType){

      case FORM_TYPE.SIGN_IN:
        return ['email', 'password'];

      case FORM_TYPE.SIGN_UP:
        return ['name', 'email', 'password', 'confirm_password'];
    }
  }

}

export default AuthUtils;
