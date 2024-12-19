import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const navItems = (
		<>
			<li>
				<Link
					to="/"
					className="font-medium text-lg "
					activeClassName="active-link"
				>
					Home
				</Link>
			</li>
			<li>
				<Link
					to="/add-food"
					className="font-medium text-lg "
					activeClassName="active-link"
				>
					Add Food
				</Link>
			</li>
			<li>
				<Link
					to="/available-food"
					className="font-medium text-lg "
					activeClassName="active-link"
				>
					Available Food
				</Link>
			</li>
			<li>
				<Link
					to="/manage-food"
					className="font-medium text-lg "
					activeClassName="active-link"
				>
					Manage Food
				</Link>
			</li>
			<li>
				<Link
					to="/request-food"
					className="font-medium text-lg "
					activeClassName="active-link"
				>
					Request Food
				</Link>
			</li>
		</>
	);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	return (
		<div className="bg-transparent text-black flex justify-between mx-auto container p-6">
			{/* Navbar Start */}
			<div className="flex items-center">
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
								d="M4 6h2 6M4 12h8m-8 6h2 6"
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
					<h2 className="font-bold text-lg hidden md:block">
						FoodConnect
					</h2>
				</div>
			</div>

			{/* Navbar Center (Links for Large Screens) */}
			<div className=" hidden lg:flex">
				<ul className="menu menu-horizontal">{navItems}</ul>
			</div>

			{/* Navbar End (Signup and Login Buttons) */}
			<div className="flex items-center space-x-2">
				<Link to="/signup" className="btn-teal-custom">
					Signup
				</Link>
				{!user ? (
					<Link to="/login" className="btn-teal-custom">
						Login
					</Link>
				) : (
					<button onClick={logOut} className="btn-teal-custom">
						Logout
					</button>
				)}
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
