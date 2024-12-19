import { useNavigate } from "react-router-dom";
import { FaLocationDot, FaCalendarDays } from "react-icons/fa6";

const FeaturedCard = ({ food }) => {
	const {
		_id,
		foodImage,
		foodName,
		quantity,
		pickupLocation,
		expiryDateTime,
	} = food;

	const navigate = useNavigate();

	const handleViewDetails = () => {
		navigate(`/foods/${_id}`);
	};

	return (
		<div className="w-full bg-white border rounded-xl flex flex-col justify-between overflow-hidden relative group">
			<img
				src={foodImage}
				alt={foodName}
				className="w-full h-48 object-cover group-hover:scale-105 transition-transform smooth"
			/>
			<p className="text-black bg-warning px-4 py-2 mt-2 absolute top-0 left-2 rounded-xl group">
				<span className="font-medium">{quantity} Available</span>
			</p>
			<div className="p-4 text-left">
				<h3 className="mb-4 text-2xl font-bold text-teal-700">
					{foodName}
				</h3>

				<p className="text-gray-700 flex items-center gap-2">
					<FaLocationDot />
					{pickupLocation}
				</p>
				<p className="text-gray-700 flex items-center gap-2">
					<FaCalendarDays />
					<span className="font-semibold">Exp. Date:</span>

					{expiryDateTime}
				</p>
				<button
					onClick={handleViewDetails}
					className="w-full btn-teal-custom mt-4"
				>
					View Details
				</button>
			</div>
		</div>
	);
};

export default FeaturedCard;
