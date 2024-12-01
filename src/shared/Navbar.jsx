import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="navbar bg-teal-500 text-white shadow-2xl">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for Small Screens */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-white text-green-500 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <NavLink to="/" exact activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/available-foods" activeClassName="active-link">
                Available Foods
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Brand Name and Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://sharefood.be/wp-content/uploads/2018/01/logo-sharefood.png"
            alt="Logo"
            className="h-8 w-8 md:h-10 md:w-10"
          />
          <h2 className="font-bold font-serif text-lg hidden md:block text-white">
            FoodConnect
          </h2>
        </div>
      </div>

      {/* Navbar Center (Links for Large Screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="font-bold underline"
              className="text-white hover:text-blue-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/available-foods"
              activeClassName="font-bold underline"
              className="text-white hover:text-blue-300"
            >
              Available Foods
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End (Signup and Login Buttons) */}
      <div className="navbar-end space-x-2">
        <button className="btn bg-purple-600 hover:bg-purple-700 text-white shadow-md">
          Signup
        </button>
        <button className="btn bg-red-400 hover:bg-red-500 text-white shadow-md">
          Login
        </button>
      </div>

      {/* Logo Centered on Small Screens */}
      {isDropdownOpen && (
        <div className="absolute inset-x-0 top-16 flex justify-center lg:hidden">
          <img
            src="https://sharefood.be/wp-content/uploads/2018/01/logo-sharefood.png"
            alt="Logo"
            className="h-12 w-12"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
