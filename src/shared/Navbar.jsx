import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link
          to="/"
          className="font-extrabold text-xl font-serif"
          activeClassName="active-link"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/available-foods"
          className="font-extrabold text-xl font-serif"
          activeClassName="active-link"
        >
          AvailableFoods
        </Link>
      </li>
    </>
  );
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
            className={`menu menu-sm dropdown-content bg-white text-teal-500 font-bold rounded-box z-[1] mt-3 w-52 p-2 shadow ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            {navItems}
          </ul>
        </div>

        {/* Brand Name and Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://sharefood.be/wp-content/uploads/2018/01/logo-sharefood.png"
            alt="Logo"
            className="h-8 w-8 md:h-10 md:w-10"
          />
          <h2 className="font-extrabold font-serif text-lg hidden md:block text-white">
            FoodConnect
          </h2>
        </div>
      </div>

      {/* Navbar Center (Links for Large Screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{navItems}</ul>
      </div>

      {/* Navbar End (Signup and Login Buttons) */}
      <div className="navbar-end space-x-2">
        <Link
          to="/signup"
          className="btn bg-teal-600 hover:bg-teal-700 text-white shadow-md"
        >
          Signup
        </Link>
        <Link
          to="/login"
          className="btn bg-teal-600 hover:bg-teal-00 text-white shadow-md"
        >
          Login
        </Link>
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
