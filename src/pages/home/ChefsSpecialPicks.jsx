const ChefsSpecialPicks = () => {
	return (
		<div className="p-12 container mx-auto mb-32">
			{/* Section Header */}
			{/* <div className="text-center mb-8">
				<h2 className="text-4xl font-bold  text-teal-600">
					Dishes handpicked by our expert chefs
				</h2>
				<p className="text-gray-600 mt-2 ">
					Dishes handpicked by our expert chefs to tantalize your
					taste buds!
				</p>
			</div> */}

			{/* Content Section */}
			<div className="">
				<div className="flex flex-col lg:flex-row items-center gap-12">
					{/* Images Section */}
					<div className="lg:w-1/2 mx-auto lg:mx-0">
						<img
							src="https://media.istockphoto.com/id/1354214251/photo/happy-team-of-chefs-high-fiving-in-the-kitchen-of-a-restaurant-and-smiling.jpg?s=612x612&w=0&k=20&c=SWPsMyVuHG9GsD2Ws7MmSBOg4ovV6YH_BnxlECSLnMU="
							alt="Chef Pick 1"
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					{/* </div> */}

					{/* Text Section */}
					<div className="lg:w-1/2 space-y-2 px-4 text-center lg:text-left ">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
							Made with love <br /> by{" "}
							<span className="text-teal-600">
								community chefs
							</span>
						</h2>
						<p className="spaced-text py-2 text-gray-700">
							At Food Connect, we believe that no one should go to
							bed hungry. With heartfelt sincerity, our community
							chefs and dedicated volunteers come together to
							prepare and share wholesome, handpicked meals. Every
							bite we deliver carries the warmth of care and the
							joy of connection.
						</p>
						<p className="spaced-text py-2 text-gray-700">
							We are committed to ensuring dignity and decency in
							every food item we distribute. Together, we strive
							to create a world where sharing food becomes a
							symbol of love and humanity.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChefsSpecialPicks;
