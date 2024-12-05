import { useNavigate } from "react-router-dom";

const FeaturedCard = ({ food }) => {
  const { _id, foodImage, foodName, quantity, pickupLocation, expiryDateTime } =
    food;

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/foods/${_id}`);
  };

  return (
    <div className="max-w-sm bg-white border rounded-xl shadow-xl flex flex-col justify-between h-[400px] overflow-hidden">
      <img
        src={foodImage}
        alt={foodName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-serif text-2xl font-bold text-teal-700">
          {foodName}
        </h3>
        <p className="text-gray-700 mt-2">
          <span className="font-semibold">Quantity:</span> {quantity}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Pickup:</span> {pickupLocation}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Expires:</span> {expiryDateTime}
        </p>
        <div className="mt-4">
          <button
            onClick={handleViewDetails}
            className="w-full py-2 text-white font-bold font-serif bg-teal-600 rounded-lg hover:bg-teal-700"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
