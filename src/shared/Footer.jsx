import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-teal-600  text-white py-10">
			<div className="container mx-auto px-4">
				{/* Top Section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* About Section */}
					<div className="flex flex-col items-center md:items-start">
						<h3 className="text-2xl font-bold mb-4">
							About FoodConnect
						</h3>
						<p className="text-gray-200 text-center md:text-left lg:w-1/2">
							FoodConnect is dedicated to connecting those with
							surplus food to those in need. Together, we reduce
							food waste and feed the community.
						</p>
					</div>

					{/* Quick Links Section */}
					<div className="text-center md:text-left">
						<h3 className="text-2xl font-bold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<a href="/" className="hover:underline">
									Home
								</a>
							</li>
							<li>
								<a
									href="/available-food"
									className="hover:underline"
								>
									Available Foods
								</a>
							</li>
							<li>
								<a href="/add-food" className="hover:underline">
									Add Food
								</a>
							</li>
							<li>
								<a href="/contact" className="hover:underline">
									Contact Us
								</a>
							</li>
							<li>
								<a
									href="/community"
									className="hover:underline"
								>
									Our Community
								</a>
							</li>
							<li>
								<a
									href="/request-food"
									className="hover:underline"
								>
									Food Request
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Information */}
					<div className="text-center md:text-left flex flex-col gap-4">
						<h3 className="text-2xl font-bold">Get in Touch</h3>
						<p className="flex-text">
							<span className="icon-holder">
								<FaEnvelope color="#121212" />{" "}
							</span>
							support@foodconnect.com
						</p>
						<p className="flex-text">
							<span className="icon-holder">
								<FaPhone color="#121212" />{" "}
							</span>
							+123 456 7890
						</p>
						<p className="flex-text">
							<span className="icon-holder">
								<FaLocationDot color="#121212" />{" "}
							</span>
							123 FoodConnect Lane, City Center
						</p>
					</div>
				</div>

				{/* Divider */}
				<div className="my-8 border-t border-gray-200"></div>

				{/* Bottom Section */}
				<div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
					{/* Social Media Links */}
					<div className="mb-4 md:mb-0 flex gap-3">
						<a
							href="https://www.facebook.com/"
							className="text-white"
						>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png"
								alt="Facebook"
								className="w-8 h-8 rounded-xl"
							/>
						</a>
						<a
							href="https://www.instagram.com/"
							className="text-white"
						>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
								alt="Instagram"
								className="w-8 h-8 rounded-xl"
							/>
						</a>
						<a
							href="https://www.youtube.com/"
							className="text-white"
						>
							<img
								src="https://icon2.cleanpng.com/20200918/vwi/transparent-logo-icon-social-media-icon-youtube-icon-1713858589629.webp"
								alt="Twitter"
								className="w-8 h-8 rounded-2xl"
							/>
						</a>
					</div>

					{/* Copyright with Logo */}
					<p className="text-gray-200">
						© {new Date().getFullYear()} FoodConnect. All rights
						reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
