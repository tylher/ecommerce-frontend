import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import TextInput from "../../components/TextInput";

const SignUp = () => {
  const methods = useForm({ mode: "all" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
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
          // placeholder={"Example@gmail.com"}
          options={{
            required: "password is required",
            minLength: {
              value: 8,
              message: "password should be more than 8 characters",
            },
          }}
        />
        <TextInput
          name={"Confirm password"}
          label={"Confirm Password"}
          type={"password"}
          // placeholder={"Example@gmail.com"}
          options={{
            required: "password confirmation is required",
            minLength: {
              value: 8,
              message: "password should be more than 8 characters",
            },
          }}
        />

        <input
          value={"Sign up"}
          type="submit"
          className="text-white px-4 py-2 bg-amber-800 w-4/5 rounded-3xl"
        />
      </form>
    </FormProvider>
  );
};

export default SignUp;
