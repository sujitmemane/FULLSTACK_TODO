import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../App";
import axios from "axios";
import { toast } from "react-hot-toast";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, isLoading, setIsLoading } =
    useContext(Context);
  const logoutHandler = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.get(
        "https://todobackend-aw6o.onrender.com/api/v1/users/logout"
      );
      toast.success(data?.message);
      setIsAuthenticated(false);
      setIsLoading(false)
    } catch (error) {
      toast.error(error.message)
      setIsLoading(false)

    }
  };

  return (
    <div className="w-full bg-black text-white py-4 px-4 flex items-center justify-between">
      <Link to="/">
        {" "}
        <h1 className="text-2xl font-bold">TODOs</h1>
      </Link>
      <nav className="flex space-x-12 text-white uppercase font-semibold text-md ">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
          to="/profile"
        >
          Profile
        </NavLink>
        {isAuthenticated ? (
          <button disabled={isLoading} onClick={logoutHandler}>LOGOUT</button>
        ) : (
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
            to="/login"
          >
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
