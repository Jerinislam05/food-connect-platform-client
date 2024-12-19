import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";

const PopularDetails = () => {
	const { id } = useParams();
	const [popular, setPopular] = useState(null);
	const [requestedQuantity, setRequestedQuantity] = useState("");

	useEffect(() => {
		fetch(`http://localhost:5000/popular/${id}`)
			.then((res) => res.json())
			.then((data) => setPopular(data))
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
			foodName: popular.foodName,
			pickupLocation: popular.pickupLocation,
			imageUrl: popular.imageUrl,
			requestedQuantity,
		};

		fetch("http://localhost:5000/requests", {
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
				} else {
					alert("Error submitting request!");
				}
			})
			.catch((error) =>
				console.error("Error submitting request:", error)
			);
	};

	if (!popular) return <div>Loading...</div>;

	const { foodName, imageUrl, quantity, pickupLocation } = popular;

	return (
		<div className="container mx-auto px-4 py-8">
			{/* Page Title */}
			<h2 className="text-4xl font-bold text-teal-700 mb-6 text-center">
				Food Details
			</h2>

			<div className="flex flex-col lg:flex-row gap-6">
				{/* Food Details Section */}
				<div className="w-full">
					<div className="bg-white shadow-lg rounded-lg p-6">
						<img
							src={imageUrl}
							alt={foodName}
							className="w-full h-72 object-cover rounded-lg mb-6"
						/>
						<div className="mb-6">
							<h3 className="text-2xl flex font-bold text-teal-700 mb-4">
								{foodName} --- <FaUtensils />
							</h3>
							<p className="text-gray-700 mb-2">
								<span className="font-semibold">Quantity:</span>{" "}
								{quantity}
							</p>
							<p className="text-gray-700 mb-2">
								<span className="font-semibold">
									Pickup Location:
								</span>{" "}
								{pickupLocation}
							</p>
						</div>
						<div className="flex flex-col md:flex-row gap-4 items-center ">
							<button
								onClick={handleRequestFood}
								className="py-2 px-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-600 w-full  md:w-1/2"
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
						<Link
							to="/request-food"
							type="submit"
							className="bg-teal-600 text-white py-2 px-4 rounded-lg"
						>
							Submit Request
						</Link>
					</div>
				</form>
			</dialog>
		</div>
	);
};

export default PopularDetails;
