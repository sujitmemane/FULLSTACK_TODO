import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const Login = () => {
  return (
    <div className="min-h-screen flex-col flex items-center justify-start">
      <div className="max-w-[40%] w-full px-12 py-24 flex flex-col items-center justify-center ">
        <h1 className="text-3xl my-4 font-bold">LOGIN</h1>
        <div className="w-full flex flex-col space-y-4">
          <form action="" className="flex flex-col space-y-4" method="post">
            <TextField
              type="email"
              className="full"
              fullWidth
              label="Email"
              color="secondary"
            />
            <TextField
              type="password"
              className="full"
              fullWidth
              label="Password"
              color="secondary"
            />
            <button className="bg-black py-4 text-white w-full  rounded font-bold">
              LOGIN
            </button>
          </form>
        </div>
        <h1 className="my-2 font-bold  text-xl">Or</h1>
        <Link
          className="bg-black py-4 text-white w-full text-center uppercase rounded font-bold"
          to="/register"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
