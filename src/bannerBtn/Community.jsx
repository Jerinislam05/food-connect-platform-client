import { useNavigate } from "react-router-dom";

const Community = () => {
    const navigate = useNavigate();
    const handleGetInvolved = () => {
        navigate("/login")
    }
  return (
    <div className="bg-white">
      {/* Cover Section */}
      <div className="relative">
        <img
          src="https://media.istockphoto.com/id/1498170344/photo/volunteers-teamwork-are-working-together-in-a-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=BhwS7ps8yEcRm8aPqPc2rBVUnhdjz78mHgc3YVnKZ-A="
          alt="Community Impact"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800 to-transparent opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold font-serif">Community Impact</h1>
            <p className="text-lg mt-4">
              Together, we are building a stronger, more connected community.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-teal-100">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold font-serif text-teal-800">
            Our Impact So Far
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-3xl font-bold text-teal-600">12,000+</h3>
              <p className="mt-2 text-gray-600">Meals Donated</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-3xl font-bold text-teal-600">2,500+</h3>
              <p className="mt-2 text-gray-600">Families Supported</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-3xl font-bold text-teal-600">50,000+</h3>
              <p className="mt-2 text-gray-600">Pounds of Food Saved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold font-serif text-teal-800">
            What Our Community Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="bg-teal-50 rounded-lg shadow-md p-6">
              <p className="text-gray-700">
                Food Connect has helped us bridge the gap between surplus and
                scarcity. It is amazing!
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User Testimonial"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-teal-700 font-bold">Emily Watson</h4>
                  <p className="text-gray-500 text-sm">Volunteer</p>
                </div>
              </div>
            </div>
            <div className="bg-teal-50 rounded-lg shadow-md p-6">
              <p className="text-gray-700">
                As a single mother, the support I have received from Food Connect
                has been a lifesaver. Forever grateful!
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="User Testimonial"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-teal-700 font-bold">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Volunteer</p>
                </div>
              </div>
            </div>
            <div className="bg-teal-50 rounded-lg shadow-md p-6">
              <p className="text-gray-700">
                We have been able to provide meals to families in need. This
                platform is a blessing!
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="User Testimonial"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-teal-700 font-bold">James Lee</h4>
                  <p className="text-gray-500 text-sm">NGO Partner</p>
                </div>
              </div>
            </div>
            <div className="bg-teal-50 rounded-lg shadow-md p-6">
              <p className="text-gray-700">
                The impact Food Connect has made is immeasurable. Truly
                life-changing.
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="User Testimonial"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-teal-700 font-bold">Ahmed Khan</h4>
                  <p className="text-gray-500 text-sm">Donator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-teal-800">
        <div className="max-w-screen-xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold font-serif">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg mt-4">
            Whether you donate food or time, every contribution counts. Be a
            part of the change.
          </p>
          <button 
          onClick={handleGetInvolved}
          className="mt-8 px-6 py-3 bg-white text-teal-800 font-bold rounded-lg hover:bg-teal-600 hover:text-white transition duration-300">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
