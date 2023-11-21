import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import axios from "axios";
import { server } from "../App";
import { toast } from "react-hot-toast";

const Register = () => {
   
    const [name,setName] = useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword] = useState("")

    const submitHandler = async (e) =>{
        e.preventDefault()
      try {
        console.log(server)
        const {data} =  await axios.post(`${server}/users/register`,{name,email,password},{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
           })
    
           toast.success(data.message)
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
  return (
    <div className="min-h-screen flex-col flex items-center justify-start">
      <div className="max-w-[40%] w-full px-12 py-24 flex flex-col items-center justify-center ">
        <h1 className="text-3xl my-4 uppercase font-bold">Register</h1>
        <div className="w-full flex flex-col space-y-4">
          <form onSubmit={submitHandler} className="flex flex-col space-y-4" >
            <TextField
              type="text"
              className="full"
              fullWidth
              label="Name"
              color="secondary"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />

            <TextField
              type="email"
              className="full"
              fullWidth
              label="Email"
              color="secondary"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              type="password"
              className="full"
              fullWidth
              label="Password"
              color="secondary"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button className="bg-black py-4 text-white w-full  rounded font-bold">
              REGISTER
            </button>
          </form>
        </div>
        <h1 className="my-2 font-bold  text-xl">Or</h1>
        <Link
          className="bg-black py-4 text-white w-full text-center uppercase rounded font-bold"
          to="/login"
        >
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default Register;
