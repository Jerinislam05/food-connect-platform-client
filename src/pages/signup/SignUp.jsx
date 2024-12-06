import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("Google signed in successful:", user);
      })
      .catch((error) => console.log(error));
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
          <h2 className="text-4xl font-extrabold font-serif text-center text-teal-700 mb-4">
            Sign Up Please!
          </h2>

          <form onSubmit={handleSignUp}>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-serif font-bold text-teal-600 mb-1">
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
            {/* Photo URL */}
            <div className="mb-4">
              <label className="block text-sm font-serif font-bold text-teal-600 mb-1">
                Photo URL
              </label>
              <input
                type="url"
                name="PhotoURL"
                placeholder="Your Photo URL"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-serif font-bold text-teal-600 mb-1">
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
              <label className="block text-sm font-serif font-bold text-teal-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Login Button */}
            <div className="mb-4">
              <button
                type="submit"
                value="Sign Up"
                className="w-full py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                Sign Up
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center font-serif text-gray-500 text-sm">
              Already Have an Account? <br />
              <Link
                to="/login"
                className="text-teal-600 font-bold hover:underline"
              >
                Login Now!
              </Link>
            </p>

            <div className="flex justify-center mt-4">
              <button
                onClick={handleGoogleSignIn}
                className="flex justify-center items-center gap-2 w-full px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/042/165/816/non_2x/google-logo-transparent-free-png.png"
                  alt="Google Logo"
                  className="w-8 h-8"
                />
                <span>Sign in with Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
