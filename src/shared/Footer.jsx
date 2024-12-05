const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://sharefood.be/wp-content/uploads/2018/01/logo-sharefood.png"
              alt="Logo"
              className="h-10 w-10 mb-4"
            />
            <h3 className="text-2xl font-bold mb-4 font-serif">
              About FoodConnect
            </h3>
            <p className="text-gray-200 text-center md:text-left">
              FoodConnect is dedicated to connecting those with surplus food to
              those in need. Together, we reduce food waste and feed the
              community.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/available-food" className="hover:underline">
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
                <a href="/community" className="hover:underline">
                  Our Community
                </a>
              </li>
              <li>
                <a href="/request-food" className="hover:underline">
                  Food Request
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Get in Touch</h3>
            <p className="text-gray-200">Email: support@foodconnect.com</p>
            <p className="text-gray-200">Phone: +123 456 7890</p>
            <p className="text-gray-200">
              Location: 123 FoodConnect Lane, City Center
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between text-center md:text-left">
          {/* Social Media Links */}
          <div className="mb-4 md:mb-0 flex gap-3">
            <a href="https://www.facebook.com/" className="text-white">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png"
                alt="Facebook"
                className="w-8 h-8 rounded-xl"
              />
            </a>
            <a href="https://www.instagram.com/" className="text-white">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
                alt="Instagram"
                className="w-8 h-8 rounded-xl"
              />
            </a>
            <a href="https://www.youtube.com/" className="text-white">
              <img
                src="https://icon2.cleanpng.com/20200918/vwi/transparent-logo-icon-social-media-icon-youtube-icon-1713858589629.webp"
                alt="Twitter"
                className="w-8 h-8 rounded-2xl"
              />
            </a>
          </div>

          {/* Copyright with Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://sharefood.be/wp-content/uploads/2018/01/logo-sharefood.png"
              alt="Footer Logo"
              className="h-6 w-6"
            />
            <p className="text-gray-200">
              © {new Date().getFullYear()} FoodConnect. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
