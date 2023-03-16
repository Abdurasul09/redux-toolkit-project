import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 border border-b-1">

      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight text-zinc-900">Logo</span>
        </Link>
      </div>

      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to='/login'
            className="relative px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
          >
            Login
          </Link>
          <Link
            to='/register'
            className="relative px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};
