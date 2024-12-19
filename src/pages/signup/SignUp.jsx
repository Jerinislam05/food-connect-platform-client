import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
	const { createUser } = useContext(AuthContext);
	const [showModal, setShowModal] = useState(false);

	const handleSignUp = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		createUser(email, password)
			.then((result) => {
				console.log("User created:", result.user);
				setShowModal(true);
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="flex flex-col-reverse lg:flex-row bg-white rounded-lg shadow-xl w-full max-w-4xl">
				{/* Form Section */}
				<div className="lg:w-1/2 p-8">
					<h2 className="text-4xl font-extrabold  text-center text-teal-700 mb-4">
						Sign Up Please!
					</h2>
					<form onSubmit={handleSignUp}>
						{/* Name Input */}
						<div className="mb-4">
							<label className="block text-sm  font-bold text-teal-600 mb-1">
								Name
							</label>
							<input
								type="text"
								name="name"
								placeholder="Enter your name"
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
								required
							/>
						</div>
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
								placeholder="Enter your password"
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
								required
							/>
						</div>

						{/* Sign Up Button */}
						<div className="mb-4">
							<button
								type="submit"
								className="w-full py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
							>
								Sign Up
							</button>
						</div>

						{/* Login Link */}
						<p className="text-center  text-gray-500 text-sm">
							Already Have an Account? <br />
							<Link
								to="/login"
								className="text-teal-600 font-bold hover:underline"
							>
								Login Now!
							</Link>
						</p>
					</form>
				</div>
			</div>

			{/* Modal for Successful Sign-Up */}
			{showModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="bg-white w-96 p-6 rounded-lg shadow-lg">
						<h3 className="text-2xl text-center  font-bold text-teal-700 mb-4">
							Welcome to Food Connect!
						</h3>
						<p className="text-gray-600 text-center font-bold  mb-6">
							Explore your private routes:
						</p>
						<ul>
							<li className="mb-2">
								<Link
									to="/"
									className="block text-teal-600 hover:underline  font-bold"
									onClick={() => setShowModal(false)}
								>
									Home
								</Link>
							</li>
							<li className="mb-2">
								<Link
									to="/add-food"
									className="block text-teal-600 hover:underline  font-bold"
									onClick={() => setShowModal(false)}
								>
									AddFood
								</Link>
							</li>
							<li className="mb-2">
								<Link
									to="/available-food"
									className="block text-teal-600 hover:underline  font-bold"
									onClick={() => setShowModal(false)}
								>
									AvailableFood
								</Link>
							</li>
							<li>
								<Link
									to="/manage-food"
									className="block text-teal-600 hover:underline  font-bold"
									onClick={() => setShowModal(false)}
								>
									ManageFood
								</Link>
							</li>
							<li>
								<Link
									to="/request-food"
									className="block text-teal-600 hover:underline  font-bold"
									onClick={() => setShowModal(false)}
								>
									RequestFood
								</Link>
							</li>
							<li>
								<Link
									to="/community"
									className="block text-teal-600 hover:underline  font-bold"
									onClick={() => setShowModal(false)}
								>
									OurCommunity
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="block text-teal-600 hover:underline  font-bold"
									onClick={() => setShowModal(false)}
								>
									ContactUs
								</Link>
							</li>
						</ul>
						<Link
							to="/"
							onClick={() => setShowModal(false)}
							className="mt-4 w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-800"
						></Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default SignUp;
