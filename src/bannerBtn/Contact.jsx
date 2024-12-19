import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Contact = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		mobile: "",
		message: "",
		userImage: null,
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleImageChange = (e) => {
		setFormData({ ...formData, userImage: e.target.files[0] });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log("Form Submitted: ", formData);
		Swal.fire({
			title: "Wow Amazing!",
			text: "Now You Can Explore Our Site",
			icon: "success",
			confirmButtonColor: "#0891b2",
		});
		navigate("/");
	};
	return (
		<div className="py-16 px-4 bg-teal-100">
			{/* Header */}
			<div className="text-center">
				<h2 className="text-4xl font-extrabold  text-teal-700">
					Contact Us
				</h2>
				<p className="text-gray-600 mt-4 text-lg">
					We are here to help! Reach out with your food donation or
					order queries.
				</p>
			</div>

			{/* Form */}
			<div className="max-w-3xl mx-auto mt-8 bg-white rounded-xl shadow-lg p-8">
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Name */}
					<div>
						<label className="block text-lg font-medium text-gray-700">
							Full Name
						</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Enter your full name"
							required
							className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-teal-400 focus:border-teal-400"
						/>
					</div>

					{/* Email */}
					<div>
						<label className="block text-lg font-medium text-gray-700">
							Email Address
						</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Enter your email"
							required
							className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-teal-400 focus:border-teal-400"
						/>
					</div>

					{/* Mobile */}
					<div>
						<label className="block text-lg font-medium text-gray-700">
							Mobile Number
						</label>
						<input
							type="tel"
							name="mobile"
							value={formData.mobile}
							onChange={handleChange}
							placeholder="Enter your mobile number"
							required
							className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-teal-400 focus:border-teal-400"
						/>
					</div>

					{/* Message */}
					<div>
						<label className="block text-lg font-medium text-gray-700">
							Message
						</label>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Enter your message or details about your donation/order"
							required
							rows="4"
							className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-teal-400 focus:border-teal-400"
						/>
					</div>

					{/* User Image */}
					<div>
						<label className="block text-lg font-medium text-gray-700">
							Upload Your Image (Optional)
						</label>
						<input
							type="file"
							accept="image/*"
							onChange={handleImageChange}
							className="mt-2"
						/>
					</div>

					{/* Submit Button */}
					<div className="text-center">
						<button
							type="submit"
							className="px-8 py-3 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
