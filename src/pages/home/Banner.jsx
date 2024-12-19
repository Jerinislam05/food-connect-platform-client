import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";

const Banner = () => {
	const swiperRef = useRef(null);
	const navigate = useNavigate();

	const handleContact = () => {
		navigate("/contact");
	};

	const handleCommunity = () => {
		navigate("/community");
	};

	return (
		<div className="container mx-auto mb-16">
			<Swiper
				loop={true}
				className="mySwiper w-full h-full rounded-xl"
				onSwiper={(swiper) => (swiperRef.current = swiper)}
			>
				<SwiperSlide>
					<div className="home-slide slide-1">
						<div className="slide-content">
							<div>
								<h2 className="text-6xl font-medium">
									Welcome to Food Connect
								</h2>
								<p className="text-2xl font-light bg-yellow-700 bg-opacity-25">
									Your Gateway to Delicious Journeys!
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div id="slide2" className="home-slide slide-2">
						<div className="slide-content">
							<div>
								<h2 className="text-6xl font-medium">
									Bringing People Together One
								</h2>
								<p className="text-2xl font-light bg-yellow-700 bg-opacity-25">
									Bite at a Time!
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div id="slide3" className="home-slide slide-3">
						<div className="slide-content">
							<div>
								<h2 className="text-6xl font-medium">
									Connect, Crave, Conquer
								</h2>
								<p className="text-2xl font-light bg-yellow-700 bg-opacity-25">
									Dive Into a World of Flavor!
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div id="slide4" className="home-slide slide-4">
						<div className="slide-content">
							<div>
								<h2 className="text-6xl font-medium">
									Sign Up Now
								</h2>
								<p className="text-2xl font-light bg-yellow-700 bg-opacity-25">
									Savor Every Moment with Food Connect!
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>

				<div className="swipper-bottom z-50">
					<div className="">
						<button
							onClick={handleCommunity}
							className="btn-warning-custom mr-5"
						>
							Our Community
						</button>
						<button
							onClick={handleContact}
							className="btn-white-custom"
						>
							Contact Here
						</button>
					</div>
					<div className="pagination">
						<a
							onClick={() => swiperRef.current?.slidePrev()}
							className="btn-white-custom !rounded-full mr-4"
						>
							❮
						</a>
						<a
							onClick={() => swiperRef.current?.slideNext()}
							className="btn-white-custom !rounded-full"
						>
							❯
						</a>
					</div>
				</div>
			</Swiper>
		</div>
	);
};

export default Banner;
