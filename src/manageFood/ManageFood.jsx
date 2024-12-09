import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";

const ManageFood = () => {
  const [foods, setFoods] = useState([]);
  const [userEmail, setUserEmail] = useState("loggedInUser@example.com");
  const [isLoading, setIsLoading] = useState(true);
  const [editingFood, setEditingFood] = useState(null);
  const { user } = useContext(AuthContext);

  const fetchUserFoods = async () => {
    if (user?.email) {
      setUserEmail(user.email);
    }

    try {
      const response = await fetch(
        `https://food-connect-server.vercel.app/foods?email=${userEmail}`
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
      const response = await fetch(
        `https://food-connect-server.vercel.app/foods/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();

      if (result.result.deletedCount > 0) {
        toast.success("Food deleted successfully");
        const remaining = foods.filter((food) => food._id !== id);
        setFoods(remaining);
        fetchUserFoods();
      } else {
        toast.error("Failed to delete food");
      }
    } catch (error) {
      console.error("Error deleting food:", error);
      toast.error("Failed to delete food");
    }
  };

  const handleEdit = (food) => {
    setEditingFood(food); // Set the food to be edited
    const modal = document.getElementById("edit-modal");
    if (modal) modal.showModal();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    // console.log(editingFood);

    try {
      const response = await fetch(
        `https://food-connect-server.vercel.app/foods/${editingFood._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingFood), // Send the updated food data
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update food");
      }

      toast.success("Food updated successfully");
      document.getElementById("edit-modal").close(); // Close the modal
      fetchUserFoods(); // Refresh the list
    } catch (error) {
      console.error("Error updating food:", error);
      toast.error("Failed to update food");
    }
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
        <h1 className="text-3xl font-serif font-bold text-teal-600 animate-bounce">
          ~Manage My Foods~
        </h1>
        <p className="text-gray-600 mt-2 font-bold font-serif">
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
                      onClick={() => handleEdit(food)}
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

      {/* Edit Modal */}
      <dialog
        id="edit-modal"
        className="rounded-xl shadow-2xl w-full max-w-md p-12"
      >
        <h3 className="text-3xl font-serif text-center font-bold text-teal-600 mb-4 animate-bounce">
          ~Edit Food~
        </h3>
        {editingFood && (
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Food Name</label>
              <input
                type="text"
                value={editingFood.foodName}
                onChange={(e) =>
                  setEditingFood({ ...editingFood, foodName: e.target.value })
                }
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Quantity</label>
              <input
                type="number"
                value={editingFood.quantity}
                onChange={(e) =>
                  setEditingFood({ ...editingFood, quantity: e.target.value })
                }
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">
                Pickup Location
              </label>
              <input
                type="text"
                value={editingFood.pickupLocation}
                onChange={(e) =>
                  setEditingFood({
                    ...editingFood,
                    pickupLocation: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={() => document.getElementById("edit-modal").close()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm text-white bg-teal-600 rounded-lg hover:bg-teal-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </dialog>
    </div>
  );
};

export default ManageFood;
