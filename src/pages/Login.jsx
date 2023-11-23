import React, { useEffect, useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { TextField } from "@mui/material";
import axios from "axios";
import { server } from "../App";
import { Context } from "../App";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated ,isLoading,setIsLoading} = useContext(Context);
  const submitHandler = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("Please Fill  Email, Password");
      return;
    }
    try {
      console.log(server);
      const res = await axios.post(
        `https://todobackend-aw6o.onrender.com/api/v1/users/login`,
        { email, password }
      );
      console.log(res, "res");
      toast.success(res.data.message);

      setEmail("");
      setPassword("");
      setIsAuthenticated(true);
      setIsLoading(false)
    } catch (error) {
      console.log(error, "error");
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setIsLoading(false)

    }
  };

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="min-h-screen flex-col flex items-center justify-start">
      <div className="max-w-[40%] w-full px-12 py-24 flex flex-col items-center justify-center ">
        <h1 className="text-3xl my-4 font-bold">LOGIN</h1>
        <div className="w-full flex flex-col space-y-4">
          <form onSubmit={submitHandler} className="flex flex-col space-y-4">
            <TextField
              type="email"
              className="full"
              fullWidth
              label="Email"
              color="secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              className="full"
              fullWidth
              label="Password"
              color="secondary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
