import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Sargalayam</h3>
            <p className="text-gray-300">
              Empowering businesses with innovative digital solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@sargalayam.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Business Street, City, Country</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Sargalayam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;