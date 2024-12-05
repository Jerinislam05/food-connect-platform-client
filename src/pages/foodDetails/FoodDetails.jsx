import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    // Fetch the food details by ID
    fetch(`http://localhost:5000/foods/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((error) => console.error("Error fetching food details:", error));
  }, [id]);

  const handleRequestFood = () => {
    const modal = document.getElementById("request-modal");
    if (modal) {
      modal.showModal(); // Show the modal
    }
  };

  if (!food) {
    return <div>Loading...</div>;
  }

  const {
    foodImage,
    foodName,
    quantity,
    pickupLocation,
    expiryDateTime,
    donorName,
    donorEmail,
  } = food;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-teal-700 font-serif mb-4">
        Food Details
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full md:w-1/2 h-72 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">{foodName}</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Quantity:</span> {quantity}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Pickup Location:</span>{" "}
            {pickupLocation}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Expires:</span> {expiryDateTime}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Donor Name:</span> {donorName}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Donor Email:</span> {donorEmail}
          </p>
          <button
            onClick={handleRequestFood}
            className="mt-6 py-2 px-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700"
          >
            Request Food
          </button>
        </div>
      </div>

      {/* Modal */}
      <dialog id="request-modal" className="rounded-lg shadow-lg w-96 p-4">
        <h3 className="text-xl font-bold mb-4 text-teal-700">Request Food</h3>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Food Name</label>
            <input
              type="text"
              value={foodName}
              readOnly
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Pickup Location</label>
            <input
              type="text"
              value={pickupLocation}
              readOnly
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Request Notes</label>
            <textarea
              placeholder="Additional Notes"
              className="w-full border rounded-lg p-2"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded-lg"
              onClick={() => document.getElementById("request-modal").close()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-teal-600 text-white py-2 px-4 rounded-lg"
            >
              Submit Request
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default FoodDetails;
