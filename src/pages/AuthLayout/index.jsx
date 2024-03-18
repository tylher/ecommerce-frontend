import React from "react";
import illustrationImage from "../../assets/images/pexels-nataliya-vaitkevich-6214471.jpg";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex">
      <section className="w-1/2 max-h-screen">
        <img src={illustrationImage} className="h-full w-full object-cover" />
      </section>

      <section className="w-1/2 h-screen flex flex-col items-center justify-center">
        <Outlet />
      </section>
    </div>
  );
};

export default AuthLayout;
