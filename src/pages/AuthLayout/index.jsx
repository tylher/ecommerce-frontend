import React from "react";
import illustrationImage from "../../assets/images/pexels-nataliya-vaitkevich-6214471.jpg";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex text-gray-700 font-medium max-h-screen font-poppins overflow-y-hidden">
      <section className="sm:w-1/2 min-h-full  w-full bg-white  rounded-t-3xl overflow-y-scroll absolute z-10 top-[40%] md:static">
        <Outlet />
      </section>

      <section className="sm:w-1/2 w-full sm:flex flex-col items-center justify-center sm:bg-gradient-to-tr from-[#e2e3e7] to-[#f4f5f7]  h-auto lg:h-screen ">
        <img
          src={illustrationImage}
          className="w-full mx-auto lg:h-full lg:object-cover"
        />
      </section>
    </div>
  );
};

export default AuthLayout;
