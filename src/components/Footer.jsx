// import React from "react";
// const Footer= ()=>{
//     return(
//         <div>Footer</div>
//     )
// }
// export default Footer 

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white py-10">
      <div className="max-w-6xl mx-auto px-5">

        {/* Sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-400 pb-8">
          {/* About Bit Buzz */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Bit Buzz</h3>
            <p className="text-black">
              Your trusted source for the latest in tech, crypto, and finance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#" className="text-black">Home</a></li>
              <li><a href="#" className="text-black">News</a></li>
              <li><a href="#" className="text-black">Crypto</a></li>
              <li><a href="#" className="text-black">Reviews</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Disclaimer</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us </h3>
            <div className="flex space-x-4">
              <a href="#" className="text- hover:text-white text-2xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-black hover:text-white text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-black hover:text-white text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-black hover:text-white text-2xl">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm">
          <p>© 2025 Bit Buzz. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
