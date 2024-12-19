import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();

	const [showModal, setShowModal] = useState(false);
	const [links] = useState([
		{ name: "Home", route: "/" },
		{ name: "AddFood", route: "/add-food" },
		{ name: "ManageFood", route: "/manage-food" },
		{ name: "AvailableFood", route: "/available-food" },
		{ name: "RequestFood", route: "/request-food" },
		{ name: "OurCommunity", route: "/community" },
		{ name: "ContactUs", route: "/contact" },
	]);
	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then((result) => {
				const loggedInUser = result.user;
				console.log("User logged in:", loggedInUser);
				setShowModal(true);
			})
			.catch((error) => {
				console.error(error.message);
				if (error.message.includes("user-not-found")) {
					navigate("/signup");
				}
			});
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="flex flex-col-reverse lg:flex-row bg-white rounded-lg shadow-xl w-full max-w-4xl">
				{/* Image Section */}
				<div className="hidden lg:block lg:w-1/2">
					<img
						src="https://i.pinimg.com/736x/65/dc/a6/65dca69f78972935caf61580e7c17bd9.jpg"
						alt="Login Illustration"
						className="w-full h-full object-cover rounded-l-lg"
					/>
				</div>

				{/* Login Form Section */}
				<div className="lg:w-1/2 p-8">
					<h2 className="text-4xl font-extrabold  text-center text-teal-700 mb-4">
						Login Now!
					</h2>
					<form onSubmit={handleLogin}>
						{/* Email Input */}
						<div className="mb-4">
							<label className="block text-sm  font-bold text-teal-600 mb-1">
								Email
							</label>
							<input
								type="email"
								name="email"
								placeholder="Enter your email"
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
								required
							/>
						</div>

						{/* Password Input */}
						<div className="mb-6">
							<label className="block text-sm  font-bold text-teal-600 mb-1">
								Password
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
								required
							/>
						</div>

						{/* Login Button */}
						<div className="mb-4">
							<button
								type="submit"
								className="w-full py-2 text-gray-200 font-bold  bg-teal-600 rounded-lg hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
							>
								Login
							</button>
						</div>

						{/* Sign Up Link */}
						<p className="text-center font-bold  text-gray-500 text-sm">
							New to Food Connect? <br />
							<Link
								to="/signup"
								className="text-teal-600 font-bold hover:underline"
							>
								Sign Up Please!
							</Link>
						</p>
					</form>
				</div>
			</div>

			{/* Modal for Successful Login */}
			{showModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="bg-white w-96 p-6 rounded-lg shadow-lg">
						<h3 className="text-2xl  font-bold text-teal-700 mb-4">
							Welcome Back!
						</h3>
						<p className="text-gray-600 mb-6">
							Choose where to go next:
						</p>
						<ul>
							{links.map((link) => (
								<li key={link.route} className="mb-2">
									<Link
										to={link.route}
										className="block text-teal-600 hover:underline  font-bold"
										onClick={() => setShowModal(false)}
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
						<button
							onClick={() => setShowModal(false)}
							className="mt-4 w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-800"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Login;
