import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import TextInput from "./TextInput";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
const AuthSection = ({ loginFlag }) => {
  const methods = useForm({ mode: "all" });

  const onSubmit = (data) => {
    console.log(data);
  };

  const auth = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <FormProvider {...methods}>
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-4xl font-semibold ">
          {loginFlag ? "Welcome back" : "Create your account."}
        </h2>
        <p>
          {loginFlag ? "Don't have an account? " : "Already have an account? "}
          {
            <Link
              to={loginFlag ? "/register" : "/signin"}
              className="text-amber-800"
            >
              {loginFlag ? "Sign up" : "Sign in"}
            </Link>
          }
        </p>
      </div>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center justify-center gap-7"
      >
        <TextInput
          name={"email"}
          label={"Email"}
          type={"email"}
          placeholder={"Example@gmail.com"}
          options={{ required: "your email is required" }}
        />
        <TextInput
          name={"password"}
          label={"Password"}
          type={"password"}
          placeholder={"**********"}
          options={{
            required: "password is required",
            minLength: {
              value: 8,
              message: "password should be more than 8 characters",
            },
          }}
        />
        {!loginFlag && (
          <TextInput
            name={"Confirm password"}
            label={"Confirm Password"}
            type={"password"}
            placeholder={"**********"}
            options={{
              required: "password confirmation is required",
              minLength: {
                value: 8,
                message: "password should be more than 8 characters",
              },
            }}
          />
        )}

        <input
          value={loginFlag ? "Login" : "Sign up"}
          type="submit"
          className="text-white px-4 py-2 bg-amber-800 w-full rounded-3xl"
        />
      </form>

      <div className="relative w-full flex justify-center items-center ">
        <p className="px-3 text-lg font-semibold z-10 bg-white ">OR</p>
        <hr className="absolute w-full border-none h-1 bg-gray-700" />
      </div>

      <svg
        className="w-14 h-14 p-2 shadow-xl rounded-lg"
        onClick={() => auth()}
      >
        <use xlinkHref="/sprites.svg#google-auth-icon"></use>
      </svg>
    </FormProvider>
  );
};

export default AuthSection;
