import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomerFavorites = () => {
	const navigate = useNavigate();
	const [favorites, setFavorites] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const handleViewPopular = (_id) => {
		navigate(`/popular/${_id}`);
	};

	// Fetch popular dishes
	useEffect(() => {
		const fetchFavorites = async () => {
			try {
				const response = await fetch("http://localhost:5000/popular");
				if (!response.ok) {
					throw new Error("Failed to fetch customer favorites");
				}
				const data = await response.json();
				setFavorites(data);
			} catch (error) {
				console.error("Error fetching customer favorites:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchFavorites();
	}, []);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-48">
				<div className="w-16 h-16 border-4 border-teal-500 border-dashed rounded-full animate-spin"></div>
			</div>
		);
	}

	return (
		<div className="bg-gradient-to-r from-teal-100 to-white py-12">
			<div className="container mx-auto px-4">
				{/* Section Title */}
				<div className="text-center mb-8">
					<h2 className="text-4xl font-bold  text-teal-600">
						Popular Dishes
					</h2>
					<p className="text-gray-600 mt-2 ">
						Explore the most loved dishes by our customers!
					</p>
				</div>

				{/* Favorites List */}
				{favorites.length === 0 ? (
					<p className="text-center text-gray-600">
						No popular dishes available right now!
					</p>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-6">
						{favorites.map((dish) => (
							<Link to={`/popular/${dish._id}`} key={dish._id}>
								<div className="bg-teal-50 border border-teal-300 rounded-lg shadow-sm p-4 hover:scale-105 transition-transform duration-300">
									<h3 className="text-lg font-bold text-teal-600  truncate">
										{dish.foodName}
									</h3>
									<p className="text-sm text-gray-700 mt-1 flex items-center gap-1">
										<div className="font-semibold">
											Location:{" "}
										</div>
										{dish.pickupLocation}
									</p>
									<p className="text-sm text-gray-700 flex items-center gap-1">
										<div className="font-semibold">
											Available:{" "}
										</div>
										{dish.quantity}
									</p>
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default CustomerFavorites;
