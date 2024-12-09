import { useEffect, useState } from "react";

const AvailableFood = () => {
  const [availableFoods, setAvailableFoods] = useState([]);

  useEffect(() => {
    // Fetch available foods
    fetch("https://food-connect-server.vercel.app/foods-available")
      .then((res) => res.json())
      .then((data) => setAvailableFoods(data))
      .catch((error) =>
        console.error("Error fetching available foods:", error)
      );
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-extrabold font-serif text-center text-teal-700 mb-8 animate-bounce">
        ~Available Food~
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {availableFoods.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No available food items at the moment.
          </p>
        ) : (
          availableFoods.map((food) => (
            <div
              key={food._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-700">
                  {food.foodName}
                </h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Quantity:</span>{" "}
                  {food.quantity}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Pickup Location:</span>{" "}
                  {food.pickupLocation}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Expires:</span>{" "}
                  {food.expiryDateTime}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Expires:</span>{" "}
                  {food.foodStatus}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AvailableFood;
