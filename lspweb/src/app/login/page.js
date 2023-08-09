"use client";

import { React, useEffect, useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import style from "./login.module.css";
import { TextField, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import GoogleIcon from "@mui/icons-material/Google";
import { Formik } from "formik";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const useStyles = makeStyles({
  root: {
    // backgroundColor: "blue",
    width: "100%",
    marginTop: "10px",
    // paddingBottom: "20px",
    paddingTop: "10px",
    // paddingBottom: 16,
    // paddingRight: 16,
    // marginTop: 16,
    // marginLeft: "auto",
    // marginRight: "auto",
    // maxWidth: 500,
  },
});
export default function Login() {
  let router = useRouter();
  const classes = useStyles();
  const [statusLogin, setStatusLogin] = useState(false);
  const [token, setToken] = useState("");
  const [profile, setProfile] = useState([]);
  const initialState = {
    email: "",
    password: "",
  };
  const [stateField, setStateField] = useState(initialState);
  const [role, setRole] = useState("");

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  console.log(role, "role");
  const googleSuccess = (resp) => {
    console.log(resp, "resp");
    let decoded = jwt_decode(resp?.credential);
    // console.log(decoded, "decode");
    const email = decoded?.email;
    const name = decoded?.name;
    const token = resp?.tokenId;
    const googleId = resp?.googleId;
    const result = { email, name, token, googleId };
    // dispatch(googleLogin({ result, navigate, toast }));
    // console.log(result, "result");
    let id_token_google = resp.credential;
    // console.log(id_token_google, "tokengoogle");

    axios({
      url: "http://localhost:3001/loginGoogle",
      method: "POST",
      data: { id_token_google },
    })
      .then((data) => {
        console.log(data, "dataaa");
        localStorage.setItem("token", data.data.token);
        let token = localStorage.getItem("token");
        // console.log(settoken, "settoken");
        router.push("/admin/Asesi");
        if (token) {
          setStatusLogin(true);
          setToken(token);
        }
        console.log(statusLogin, token, "tokeeen");
      })
      .catch((err) => console.log(err, "error"));
  };

  const logOut = () => {
    googleLogout();
    setToken(localStorage.removeItem("token"));
    setStatusLogin(false);
    googleLogout();
  };

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log("User signed out.");
    });
  }

  function setCookie() {}

  const login = useGoogleLogin({
    onSuccess: (resp) => {
      console.log(resp, "resp");
      let id_token_google = resp.access_token;
      console.log(id_token_google, "tokengoogle");

      axios({
        url: "http://localhost:3001/loginGoogle",
        method: "POST",

        data: { id_token_google },
      })
        .then((data) => {
          console.log(data.data.data, "datadaridpn");

          localStorage.setItem("token", id_token_google);
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: data.data.data.id,
              role: data.data.data.role,
              nama: data.data.data.nama_lengkap,
            })
          );
          Cookies.set("token", id_token_google);
          Cookies.set("user", JSON.stringify(data.data.data));
          router.push("/user/dashboard");
          // let token = localStorage.getItem("token");
          // // console.log(settoken, "settoken");
          // router.push("/");
          // if (token) {
          //   setStatusLogin(true);
          //   setToken(token);
          // }
          // console.log(statusLogin, token, "tokeeen");
        })
        .catch((err) => console.log(err, "errorss"));
    },
    // flow: "auth-code",
    onError: (error) => console.log("Login Failed:", error),
  });

  function handleSubmitLogin(input) {
    console.log(input, "inputloginadmin");
    axios({
      method: "POST",
      url: "http://localhost:3001/login",
      data: input,
    })
      .then((data) => {
        console.log(data.data, "data");
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: data.data.id,
            role: data.data.role,
            nama: data.data.nama,
          })
        );
        router.push("/user/admin/Asesi");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }

  return (
    <>
      {/* <a href="/registrasi">registrasi</a> */}
      <div className={`${style.container}`}>
        {/* <div className={`${style.boxLogo}`}></div> */}
        <div className={`${style.boxLogin}`}>
          <img className={`${style.logo}`} src="/logoolsp.png" />
          {role !== "" ? (
            <div className={`${style.contentLogin}`}>
              {role === "asesi" ? (
                <>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      textAlign: "center",
                      fontWeight: 700,
                      paddingBottom: "20px",
                    }}
                  >
                    Masuk
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      textAlign: "center",
                      fontWeight: 700,
                      paddingBottom: "50px",
                      color: "grey",
                    }}
                  >
                    Bagi Calon Asesi Silahkan Masuk Melalui Google
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      width: "50%",
                      background: "grey",
                      display: "block",
                      margin: "auto",
                    }}
                    onClick={() => login()}
                  >
                    {" "}
                    <GoogleIcon /> Sign in
                  </Button>
                </>
              ) : (
                // <div className="d-flex mb-3 mt-5">
                //   <hr
                //     style={{
                //       color: "grey",
                //       background: "grey",
                //       height: 2,
                //       width: "50%",
                //     }}
                //   />
                //   <Typography
                //     sx={{
                //       fontSize: "12px",
                //       textAlign: "center",
                //       fontWeight: 700,
                //       paddingBottom: "20px",
                //       color: "grey",
                //     }}
                //   >
                //     or
                //   </Typography>
                //   <hr
                //     style={{
                //       color: "grey",
                //       background: "grey",
                //       height: 2,
                //       width: "50%",
                //     }}
                //   />
                // </div>
                <Formik
                  validateOnChange={true}
                  initialValues={stateField}
                  onSubmit={(values, { setSubmitting }) => {
                    handleSubmitLogin(values);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        id="standard-password-input"
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="current-password"
                        variant="standard"
                        className={classes.root}
                        value={values.email}
                      />
                      <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        autoComplete="current-password"
                        variant="standard"
                        className={classes.root}
                      />
                      <Typography
                        sx={{
                          fontSize: "12px",
                          textAlign: "center",
                          fontWeight: 700,
                          paddingTop: "20px",
                          paddingBottom: "30px",
                          color: "black",
                          textAlign: "right",
                        }}
                      >
                        Forgot Password
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          background: "black",
                          width: "100%",
                          marginTop: "20px",
                          borderRadius: "10px",
                        }}
                        type="submit"
                      >
                        Masuk
                      </Button>
                    </form>
                  )}
                </Formik>
              )}
            </div>
          ) : (
            <div className={`${style.contentLogin}`}>
              <Typography
                sx={{
                  fontSize: "30px",
                  textAlign: "center",
                  fontWeight: 700,
                  paddingBottom: "20px",
                }}
              >
                Masuk
              </Typography>
              <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
                Silahkan Pilih Peran Anda
              </Typography>
              <div className={`${style.boxRole}`}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Peran</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={role}
                    label="Role"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="asesi">Asesi</MenuItem>
                    <MenuItem value="notasesi">Asesor / Admin</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
