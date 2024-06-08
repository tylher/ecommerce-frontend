import React from "react";
import { useFormContext } from "react-hook-form";

const TextInput = ({ name, options, type, placeholder, label, value }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col  w-full  items-center gap-2">
      <label htmlFor={name} className="self-start">
        {label}
      </label>
      <input
        {...register(name, options)}
        type={type}
        name={name}
        id={name}
        // value={value}
        placeholder={placeholder}
        className="border border-gray-300 w-full px-5 py-2 outline-none rounded-3xl"
      />
      {errors[name] && (
        <span className="text-red-500 text-xs block self-start">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default TextInput;
