import { useEffect, useState } from "react";

const RequestFood = () => {
	const [requests, setRequests] = useState([]);

	useEffect(() => {
		// Fetch submitted requests
		fetch("https://food-connect-server.vercel.app/requests")
			.then((res) => res.json())
			.then((data) => setRequests(data))
			.catch((error) => console.error("Error fetching requests:", error));
	}, []);

	return (
		<div className="container mx-auto px-4 py-8">
			{/* <h2 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-teal-500 to-green-600 text-transparent bg-clip-text text-center mb-8  animate-bounce"> */}
			<h2 className="text-head">Submitted Requests</h2>
			{/* </h2> */}
			{requests.length === 0 ? (
				<p className="text-center text-lg text-gray-600 animate-pulse">
					No requests yet. Be the first to request some food!
				</p>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{requests.map((request, index) => (
						<div
							key={index}
							className="relative p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
						>
							{/* Badge */}
							<span className="absolute top-2 right-2 px-3 py-1 text-xs font-bold text-white bg-teal-600 rounded-full shadow-md">
								Request #{index + 1}
							</span>

							<div className="text-center">
								{/* Food Name */}
								<h3 className="text-2xl font-bold text-teal-700 mb-2">
									{request.foodName}
								</h3>
								{/* Details */}
								<p className="text-gray-700 mb-2">
									<span className="font-semibold">
										Pickup Location:
									</span>{" "}
									{request.pickupLocation}
								</p>
								<p className="text-gray-700 mb-4">
									<span className="font-semibold">
										Requested Quantity:
									</span>{" "}
									{request.requestedQuantity}
								</p>
							</div>
							{/* Divider */}
							<div className="border-t-2 border-dashed border-gray-200 mt-4 pt-4 text-center">
								<span className="text-sm text-gray-500 italic">
									Thank you for your kindness!
								</span>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default RequestFood;
