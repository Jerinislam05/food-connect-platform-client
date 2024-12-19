import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";

const FoodDetails = () => {
	const { id } = useParams();
	const [food, setFood] = useState(null);
	const navigate = useNavigate();
	const [requestedQuantity, setRequestedQuantity] = useState("");

	useEffect(() => {
		fetch(`https://food-connect-server.vercel.app/foods/${id}`)
			.then((res) => res.json())
			.then((data) => setFood(data))
			.catch((error) =>
				console.error("Error fetching food details:", error)
			);
	}, [id]);

	const handleRequestFood = () => {
		const modal = document.getElementById("request-modal");
		if (modal) modal.showModal();
	};

	const handleSubmitRequest = (e) => {
		e.preventDefault();

		const requestData = {
			foodName: food.foodName,
			pickupLocation: food.pickupLocation,
			requestedQuantity,
		};

		fetch("https://food-connect-server.vercel.app/requests", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestData),
		})
			.then((res) => {
				if (res.ok) {
					alert("Request submitted successfully!");
					document.getElementById("request-modal").close();
					navigate("");
				} else {
					alert("Error submitting request!");
				}
			})
			.catch((error) =>
				console.error("Error submitting request:", error)
			);
	};

	if (!food) return <div>Loading...</div>;

	const {
		foodImage,
		foodName,
		quantity,
		pickupLocation,
		expiryDateTime,
		foodStatus,
		donatorName,
		donatorEmail,
		donatorImage,
	} = food;

	return (
		<div className="container mx-auto px-4 py-8">
			{/* Page Title */}
			<h2 className="text-4xl font-bold text-teal-700 mb-6 text-center">
				Food Details
			</h2>

			<div className="flex flex-col lg:flex-row gap-6">
				{/* Food Details Section */}
				<div className="w-full lg:w-2/3">
					<div className="bg-white shadow-lg rounded-lg p-6">
						<img
							src={foodImage}
							alt={foodName}
							className="w-full h-72 object-cover rounded-lg mb-6"
						/>
						<div className="mb-6">
							<h3 className="text-2xl flex font-bold text-teal-700 mb-4">
								{foodName} --- <FaUtensils />
							</h3>
							<p className="text-gray-700 mb-2">
								<span className="font-semibold">Quantity:</span>
								{quantity}
							</p>
							<p className="text-gray-700 mb-2">
								<span className="font-semibold">
									Pickup Location:
								</span>
								{pickupLocation}
							</p>
							<p className="text-gray-700 mb-2">
								<span className="font-semibold">Expires:</span>
								{expiryDateTime}
							</p>
							<p className="text-gray-700 mb-2">
								<span className="font-semibold">
									Food Status:
								</span>
								{foodStatus}
							</p>
						</div>
						<div className="flex flex-col md:flex-row gap-4 items-center ">
							<button
								onClick={handleRequestFood}
								className="py-2 px-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-600 w-full md:w-1/2"
							>
								Request Food
							</button>
							<Link
								to="/"
								className="bg-teal-600 text-white px-4 py-2 rounded-lg w-full md:w-1/2 font-bold shadow-md hover:bg-teal-600 hover:shadow-lg text-center"
							>
								🏠 Back to Home
							</Link>
						</div>
					</div>
				</div>

				{/* Donator Information Section */}
				<div className="w-full lg:w-1/3">
					<div className="bg-gray-100 shadow-lg rounded-lg p-6">
						<h3 className="text-2xl font-bold  text-center text-teal-700 mb-4">
							Donator Information
						</h3>
						<div className="flex flex-col items-center">
							<img
								src={donatorImage}
								alt={donatorName}
								className="w-32 h-32 object-cover rounded-full shadow-lg mb-4"
							/>
							<p className="text-gray-700 mb-2">
								<span className="font-semibold">Name:</span>
								{donatorName}
							</p>
							<p className="text-gray-700 mb-2">
								<span className="font-semibold">Email:</span>
								{donatorEmail}
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Request Food Modal */}
			<dialog
				id="request-modal"
				className="rounded-lg shadow-2xl w-full md:w-1/2 lg:w-1/3 p-6"
			>
				<h3 className="text-2xl  font-extrabold text-center mb-4 text-teal-700">
					Request Food
				</h3>
				<form onSubmit={handleSubmitRequest}>
					<div className="mb-4">
						<label className="block text-sm font-bold mb-2">
							Food Name
						</label>
						<input
							type="text"
							value={foodName}
							readOnly
							className="w-full border rounded-lg p-2"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-bold mb-2">
							Pickup Location
						</label>
						<input
							type="text"
							value={pickupLocation}
							readOnly
							className="w-full border rounded-lg p-2"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-bold mb-2">
							Request Quantity
						</label>
						<input
							type="number"
							min="1"
							max={quantity}
							value={requestedQuantity}
							onChange={(e) =>
								setRequestedQuantity(e.target.value)
							}
							className="w-full border rounded-lg p-2"
						/>
					</div>
					<div className="flex justify-between">
						<button
							type="button"
							className="bg-orange-500 text-white py-2 px-4 rounded-lg"
							onClick={() =>
								document.getElementById("request-modal").close()
							}
						>
							Cancel
						</button>
						<input
							type="submit"
							value="Submit Request"
							className="bg-teal-600 text-white py-2 px-4 rounded-lg"
						/>
					</div>
				</form>
			</dialog>
		</div>
	);
};

export default FoodDetails;
