import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/register/SignUp";
import Login from "../pages/login";
import AuthLayout from "../pages/AuthLayout";

export const allPages = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: <SignUp />,
        path: "/register",
      },
      {
        element: <SignUp />,
        path: "/",
      },
      {
        element: <Login />,
        path: "/signin",
      },
    ],
  },
]);
