import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageFood = () => {
  const [foods, setFoods] = useState([]);
  const [userEmail, setUserEmail] = useState("loggedInUser@example.com"); // Replace with dynamic user email
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserFoods = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/foods?email=${userEmail}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch foods");
      }
      const data = await response.json();
      setFoods(data);
    } catch (error) {
      console.error("Error fetching user foods:", error);
      toast.error("Failed to fetch foods");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this food?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/foods/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete food");
      }
      const result = await response.json();
      if (result.deleteCount > 0) {
        toast.success("Food deleted successfully");
        fetchUserFoods(); // Refresh the list
      } else {
        toast.error("Failed to delete food");
      }
    } catch (error) {
      console.error("Error deleting food:", error);
      toast.error("Failed to delete food");
    }
  };

  const handleUpdate = (food) => {
    console.log("Update clicked for:", food);
    toast.info("Update feature not implemented yet!");
  };

  useEffect(() => {
    fetchUserFoods();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-teal-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-teal-600">Manage My Foods</h1>
        <p className="text-gray-600 mt-2">
          Here you can update or delete the foods you have added.
        </p>
      </div>

      {/* Table Section */}
      {foods.length === 0 ? (
        <p className="text-center text-gray-600">No foods added yet.</p>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full table-auto border border-gray-300 bg-white">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Food Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Pickup Location
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food, index) => (
                <tr
                  key={food._id}
                  className={
                    index % 2 === 0 ? "even:bg-gray-50" : "odd:bg-white"
                  }
                >
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {food.foodName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {food.quantity}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {food.pickupLocation}
                  </td>
                  <td className="px-6 py-4 flex justify-center items-center space-x-4">
                    <button
                      onClick={() => handleUpdate(food)}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageFood;
