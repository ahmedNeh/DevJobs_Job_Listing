import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 transition duration-300 ease-in-out"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 transition duration-300 ease-in-out";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Dev Jobs
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={activeClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={activeClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={activeClass}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
