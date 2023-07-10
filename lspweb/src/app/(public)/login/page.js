"use client";

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
export default function Login() {
  console.log("masuk1");

  const googleSuccess = (resp) => {
    let decoded = jwt_decode(resp?.credential);
    const email = decoded?.email;
    const name = decoded?.name;
    const token = resp?.tokenId;
    const googleId = resp?.googleId;
    const result = { email, name, token, googleId };
    // dispatch(googleLogin({ result, navigate, toast }));
    console.log(result);
  };
  return (
    <>
      <a href="/registrasi">registrasi</a>
      <GoogleOAuthProvider clientId="8183620420-97vo1t4g23unvaa2qd97249j98agerul.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(resp) => {
            googleSuccess(resp);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        />
        ;
      </GoogleOAuthProvider>
    </>
  );
}
