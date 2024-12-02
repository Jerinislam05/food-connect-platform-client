import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handleAvailableFood = () => {
    navigate("/available-foods");
  };

  const handleAddFood = () => {
    navigate("/add-food");
  };

  return (
    <div className="carousel w-full rounded-xl">
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img
          src="https://plus.unsplash.com/premium_photo-1661425443949-a5df44f1f2dd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFtaWx5JTIwd2l0aCUyMGdyYW5kcGFyZW50c3xlbnwwfHwwfHx8MA%3D%3D"
          className="w-full h-[95%]"
        />
        <div className="absolute flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white font-serif pl-12 space-y-7 w-1/2">
            <h2 className="text-6xl font-medium">Welcome to Food Connect</h2>
            <p className="text-2xl">Your Gateway to Delicious Journeys!</p>
            <div>
              <button 
              onClick={handleAvailableFood}
              className="btn btn-outline btn-warning mr-5">
                Available Foods
              </button>
              <button 
              onClick={handleAddFood}
              className="btn btn-outline btn-warning">Add Food</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0 justify-end">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img
          src="https://muslimi.com/wp-content/uploads/2023/04/da.jpg"
          className="w-full h-[95%]"
        />
        <div className="absolute flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white font-serif pl-12 space-y-7 w-1/2">
            <h2 className="text-6xl font-medium">
              Food Connect: Bringing People Together, One Bite at a Time!
            </h2>
          </div>
        </div>
        <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0 justify-end">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img
          src="https://t3.ftcdn.net/jpg/02/92/07/56/360_F_292075696_hGdSBQ9Bvf1jsaVMP2rTpuRr0VMATck0.jpg"
          className="w-full"
        />
        <div className="absolute flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white font-serif pl-12 space-y-7 w-1/2">
            <h2 className="text-6xl font-medium">
              Connect, Crave, Conquer – Dive Into a World of Flavor!
            </h2>
          </div>
        </div>
        <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0 justify-end">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img
          src="https://upmeals.com/wp-content/uploads/2021/05/dinner-together.jpg"
          className="w-full"
        />
        <div className="absolute flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white font-serif pl-12 space-y-7 w-1/2">
            <h2 className="text-6xl font-medium">
              Sign Up Now and Savor Every Moment with Food Connect!
            </h2>
          </div>
        </div>
        <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0 justify-end">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
