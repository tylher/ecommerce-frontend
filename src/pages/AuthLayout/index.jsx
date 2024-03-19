import React from "react";
import illustrationImage from "../../assets/images/pexels-nataliya-vaitkevich-6214471.jpg";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex text-gray-700 font-medium min-h-screen">
      <section className="w-1/2  flex flex-col items-center justify-center gap-5 px-[5%] py-5">
        <Outlet />
      </section>

      <section className="w-1/2 flex flex-col items-center justify-center">
        <img src={illustrationImage} className="w-full mx-auto " />
      </section>
    </div>
  );
};

export default AuthLayout;
