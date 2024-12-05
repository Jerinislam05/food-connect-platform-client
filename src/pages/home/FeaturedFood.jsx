import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedFood = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="text-center font-serif">
      <h2 className="font-extrabold text-4xl text-teal-700 mt-6">
        Featured Food
      </h2>
      <p className="text-lg text-gray-700 mt-6">
      Explore our top food donations handpicked for their quality and
        quantity. These options provide ample servings and ensure timely
        availability for those in need. Let’s make a difference, one meal at a
        time.
      </p>
      <div className="flex flex-wrap justify-center mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {foods.map((food) => (
            <FeaturedCard food={food} key={food.id}></FeaturedCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedFood;
