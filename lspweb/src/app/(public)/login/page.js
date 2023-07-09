"use client";

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Login() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error, "error");
  };

  return (
    <>
      <a href="/registrasi">registrasi</a>
      <GoogleOAuthProvider clientId="8183620420-97vo1t4g23unvaa2qd97249j98agerul.apps.googleusercontent.com">
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </GoogleOAuthProvider>
    </>
  );
}
