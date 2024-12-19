import { Link } from "react-router-dom";

const NotFoundPage = () => (
	<div className="flex flex-col  items-center justify-center h-screen bg-gradient-to-r from-teal-200 via-teal-100 to-teal-200">
		{/* Big 404 Text */}
		<h2 className="text-9xl font-extrabold text-red-600 drop-shadow-lg mb-6 animate-bounce">
			404
		</h2>

		{/* Page Not Found Message */}
		<p className="text-3xl font-bold text-gray-800 mb-4">
			Oops! The page you are looking for does not exist.
		</p>

		{/* Decorative Subtext */}
		<p className="text-lg text-gray-600 mb-8">
			It seems you have hit a dead end. Let’s get you back on track!
		</p>

		{/* Back to Home Button */}
		<Link to="/" className="btn-teal-custom">
			🏠 Back to Home
		</Link>
	</div>
);
export default NotFoundPage;
