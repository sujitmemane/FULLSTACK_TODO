import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-black text-white py-4 px-4 flex items-center justify-between">
      <Link to="/">  <h1 className="text-2xl font-bold">TODOs</h1></Link>
      <nav className="flex space-x-12 text-white uppercase font-semibold text-md ">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Home
        </NavLink>
        <NavLink  className={({ isActive }) => (isActive ? "text-red-400" : "")} to="/profile">Profile</NavLink>
        <NavLink  className={({ isActive }) => (isActive ? "text-red-400" : "")} to="/login">Login</NavLink>
      </nav>
    </div>
  );
};

export default Header;
