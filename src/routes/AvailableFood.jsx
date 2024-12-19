import { useEffect, useState } from "react";
import FeaturedCard from "../pages/home/FeaturedCard";

const AvailableFood = () => {
	const [availableFoods, setAvailableFoods] = useState([]);

	useEffect(() => {
		// Fetch available foods
		fetch("http://localhost:5000/foods-available")
			.then((res) => res.json())
			.then((data) => setAvailableFoods(data))
			.catch((error) =>
				console.error("Error fetching available foods:", error)
			);
	}, []);

	return (
		<div className="container mx-auto px-4 py-8">
			<h2 className="text-4xl font-extrabold text-center text-teal-700 mb-8">
				Available Food
			</h2>
			<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{availableFoods.length === 0 ? (
					<p className="text-center text-gray-500 col-span-full">
						No available food items at the moment.
					</p>
				) : (
					availableFoods.map((food) => (
						<FeaturedCard food={food} key={food.id}></FeaturedCard>
					))
				)}
			</div>
		</div>
	);
};

export default AvailableFood;
