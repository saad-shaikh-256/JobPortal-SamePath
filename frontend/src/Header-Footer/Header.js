import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <nav className="w-full flex justify-between items-center p-6 bg-white shadow-md">
         {/* Left Link */}
         <div className="text-blue-600 font-semibold text-lg hover:text-base transition-all duration-300 cursor-pointer">
            Saad Shaikh
         </div>

         {/* Center Links */}
         <div className="flex justify-center items-center gap-8">
            <Link
               to="/"
               className="text-gray-700 text-base opacity-80 hover:opacity-100 hover:text-blue-600 hover:scale-105 transition-all duration-300"
            >
               Home
            </Link>
            <Link
               to="/"
               className="text-gray-700 text-base opacity-80 hover:opacity-100 hover:text-blue-600 hover:scale-105 transition-all duration-300"
            >
               Table
            </Link>
            <Link
               to="/"
               className="text-gray-700 text-base opacity-80 hover:opacity-100 hover:text-blue-600 hover:scale-105 transition-all duration-300"
            >
               Counter
            </Link>
            <Link
               to="/"
               className="text-gray-700 text-base opacity-80 hover:opacity-100 hover:text-blue-600 hover:scale-105 transition-all duration-300"
            >
               Calculator
            </Link>
         </div>

         {/* Right Links */}
         <div className="flex justify-center items-center gap-4">
            <Link
               to="/login"
               className="text-white bg-blue-600 px-6 py-2 rounded-lg border border-transparent hover:bg-transparent hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
               Login
            </Link>
            <Link
               to="/register"
               className="text-blue-600 bg-transparent px-6 py-2 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300"
            >
               Sign Up
            </Link>
         </div>
      </nav>
   );
};

export default Header;