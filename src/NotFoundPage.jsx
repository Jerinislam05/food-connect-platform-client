import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-teal-50 text-teal-700">
      {/* Main Content */}
      <div className="text-center space-y-6">
        <img
          src="https://static-00.iconduck.com/assets.00/9-404-error-illustration-1024x454-1e9ol1ls.png"
          alt="404 Not Found"
          className="w-full mx-auto"
        />
        <h1 className="text-7xl font-extrabold font-serif">
          Oops! Page Not Found
        </h1>
        <p className="text-lg font-semibold text-gray-600">
          It seems you are lost in the food chain! Let us guide you back.
        </p>
        <Link
          to="/"
          className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg text-lg font-bold shadow-md hover:bg-teal-700 hover:shadow-lg"
        >
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
