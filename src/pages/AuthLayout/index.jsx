import React from "react";
import illustrationImage from "../../assets/images/pexels-nataliya-vaitkevich-6214471.jpg";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex text-gray-700 font-medium min-h-screen font-poppins">
      <section className="sm:w-1/2  flex flex-col items-center justify-center gap-5 px-[5%] pt-10 pb-20 sm:py-10 absolute sm:static w-full bg-white z-10 top-[40%] rounded-t-3xl ">
        <Outlet />
      </section>

      <section className="sm:w-1/2 w-full sm:flex flex-col items-center justify-center sm:bg-gradient-to-tr from-[#e2e3e7] to-[#f4f5f7]  ">
        <img src={illustrationImage} className="w-full mx-auto " />
      </section>
    </div>
  );
};

export default AuthLayout;
