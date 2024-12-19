import Banner from "./Banner";
import ChefsSpecialPicks from "./ChefsSpecialPicks";
import CustomerFavorites from "./CustomerFavorites";
import FeaturedFood from "./FeaturedFood";

const Home = () => {
	return (
		<div className="w-full">
			<Banner></Banner>
			<FeaturedFood></FeaturedFood>
			<ChefsSpecialPicks></ChefsSpecialPicks>
			<CustomerFavorites></CustomerFavorites>
		</div>
	);
};

export default Home;
