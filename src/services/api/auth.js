import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "../tagTypes";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/auth",
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = getState().encryptedState.auth?.token;
      // const unprotectedEndpoints= ["/signin","/signup","/login"]
      if (!!token && endpoint == "logoutUser") {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ ...data }) => ({
        url: "/login",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    signUpUser: builder.mutation({
      query: ({ ...data }) => ({
        url: "/signup",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    signInGoogleUser: builder.mutation({
      query: ({ accessToken, roles = "USER" }) => ({
        url: `signin?accessToken=${accessToken}&roles=${roles}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useSignUpUserMutation,
  useSignInGoogleUserMutation,
} = authApi;
