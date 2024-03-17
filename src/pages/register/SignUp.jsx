import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import TextInput from "../../components/TextInput";
import illustrationImage from "../../assets/images/pexels-nataliya-vaitkevich-6214471.jpg";

const SignUp = () => {
  const methods = useForm({ mode: "all" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex">
      <section className="w-1/2 h-screen flex flex-col items-center justify-center">
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
      </section>
      <section className="w-1/2 max-h-screen">
        <img src={illustrationImage} className="h-full w-full object-cover" />
      </section>
    </div>
  );
};

export default SignUp;
