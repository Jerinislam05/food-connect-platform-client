import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate(AuthContext);
	const [formData, setFormData] = useState({
		foodName: "",
		foodImage: "",
		quantity: "",
		pickupLocation: "",
		expiryDateTime: "",
		additionalNotes: "",
		donatorName: "",
		donatorEmail: "",
		donatorImage: "",
		foodStatus: "available",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newFood = {
			...formData,
			donatorName:
				user?.displayName || formData.donatorName || "Anonymous",
			donatorEmail: user?.email || formData.donatorEmail || "N/A",
			donatorImage: user?.photoUrl || formData.donatorImage || "N/A",
		};

		try {
			fetch("https://food-connect-server.vercel.app/foods", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newFood),
			})
				.then((response) => response.json())
				.then((responseData) => {
					// console.log(responseData);

					Swal.fire({
						title: "Success!",
						text: "Food added successfully!",
						icon: "success",
						confirmButtonText: "View Details",
					}).then(() => {
						navigate(`/foods/${responseData.insertedId}`);
					});

					setFormData({
						foodName: "",
						foodImage: "",
						quantity: "",
						pickupLocation: "",
						expiryDateTime: "",
						additionalNotes: "",
						donatorName: "",
						donatorEmail: "",
						donatorImage: "",
						foodStatus: "available",
					});
				});
		} catch (error) {
			console.error("Error adding food:", error);
			alert("An error occurred. Please try again.");
		}
	};

	return (
		<div className="container mx-auto mb-16">
			<h2 className="text-head">Add Food to Cart</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Food Name */}
				<div>
					<label className="block text-lg font-medium text-gray-700">
						Food Name
					</label>
					<input
						type="text"
						name="foodName"
						value={formData.foodName}
						onChange={handleChange}
						placeholder="Enter food name"
						required
						className="w-full px-4 py-2 border rounded-lg focus:ring-teal-400 focus:border-teal-400"
					/>
				</div>

				{/* Food Image */}
				<div>
					<label className="block text-lg font-medium text-gray-700">
						Food Image URL
					</label>
					<input
						type="url"
						name="foodImage"
						value={formData.foodImage}
						onChange={handleChange}
						placeholder="Food Image URL"
						required
						className="w-full px-4 py-2 border rounded-lg focus:ring-teal-400 focus:border-teal-400"
					/>
				</div>

				{/* Quantity */}
				<div>
					<label className="block text-lg font-medium text-gray-700">
						Quantity (Number of People Served)
					</label>
					<input
						type="number"
						name="quantity"
						value={formData.quantity}
						onChange={handleChange}
						placeholder="Enter quantity"
						required
						className="w-full px-4 py-2 border rounded-lg focus:ring-teal-400 focus:border-teal-400"
					/>
				</div>

				{/* Pickup Location */}
				<div>
					<label className="block text-lg font-medium text-gray-700">
						Pickup Location
					</label>
					<input
						type="text"
						name="pickupLocation"
						value={formData.pickupLocation}
						onChange={handleChange}
						placeholder="Enter pickup location"
						required
						className="w-full px-4 py-2 border rounded-lg focus:ring-teal-400 focus:border-teal-400"
					/>
				</div>

				{/* Expiry Date and Time */}
				<div>
					<label className="block text-lg font-medium text-gray-700">
						Expiry Date/Time
					</label>
					<input
						type="datetime-local"
						name="expiryDateTime"
						value={formData.expiryDateTime}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 border rounded-lg focus:ring-teal-400 focus:border-teal-400"
					/>
				</div>
				{/* Food Status */}
				<div>
					<label className="block text-lg font-medium text-gray-700">
						Food Status
					</label>
					<select
						name="foodStatus"
						value={formData.foodStatus}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-lg focus:ring-teal-400 focus:border-teal-400"
					>
						<option value="available">Available</option>
						<option value="not-available">Not Available</option>
					</select>
				</div>

				{/* Additional Notes */}
				<div>
					<label className="block text-lg font-medium text-gray-700">
						Additional Notes
					</label>
					<textarea
						name="additionalNotes"
						value={formData.additionalNotes}
						onChange={handleChange}
						placeholder="Any special instructions or notes"
						rows="4"
						className="w-full px-4 py-2 border rounded-lg focus:ring-teal-400 focus:border-teal-400"
					></textarea>
				</div>
				<h2 className="text-head">Donor Details</h2>
				{/* Donor Name */}
				<div>
					<label className="block text-lg font-medium text-gray-700">
						Donor Name
					</label>
					<input
						type="text"
						name="donatorName"
						value={formData.donatorName}
						onChange={handleChange}
						placeholder="Enter Donor name"
						className="w-full px-4 py-2 border rounded-lg focus:ring-teal-400 focus:border-teal-400"
					/>
				</div>
				{/* Donor Email */}
				<div>
					<label className="block text-lg font-medium text-gray-700">
						Donor Email
					</label>
					<input
						type="email"
						name="donatorEmail"
						value={formData.donatorEmail}
						onChange={handleChange}
						placeholder="Enter Donor email"
						className="w-full px-4 py-2 border rounded-lg focus:ring-teal-400 focus:border-teal-400"
					/>
				</div>
				{/* Donor Img */}
				<div>
					<label className="block text-lg font-medium text-gray-700">
						Donor Image URL
					</label>
					<input
						type="url"
						name="donatorImage"
						value={formData.donatorImage}
						onChange={handleChange}
						placeholder="Donor Image URL"
						className="w-full px-4 py-2 border rounded-lg focus:ring-teal-400 focus:border-teal-400"
					/>
				</div>

				{/* Submit Button */}
				<button type="submit" className="w-full btn-teal-custom">
					Add Food
				</button>
			</form>
		</div>
	);
};

export default AddFood;
