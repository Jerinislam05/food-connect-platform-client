import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const AddFoodForm = () => {
  const { user } = useContext(AuthContext); // Logged-in user details
  const [formData, setFormData] = useState({
    foodName: "",
    foodImage: "",
    quantity: "",
    pickupLocation: "",
    expiryDateTime: "",
    additionalNotes: "",
    foodStatus: "available", // Default status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFood = {
      ...formData,
      donatorName: user?.displayName || "Anonymous",
      donatorEmail: user?.email || "N/A",
    };

    try {
      const response = await fetch("http://localhost:5000/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFood),
      });

      if (response.ok) {
        alert("Food added successfully!");
        setFormData({
          foodName: "",
          foodImage: "",
          quantity: "",
          pickupLocation: "",
          expiryDateTime: "",
          additionalNotes: "",
          foodStatus: "available",
        });
      } else {
        alert("Failed to add food. Please try again.");
      }
    } catch (error) {
      console.error("Error adding food:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold font-serif text-teal-700 text-center mb-6">
        Add Food
      </h2>
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
            placeholder="Enter food image URL"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 focus:ring-2 focus:ring-teal-400"
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFoodForm;
