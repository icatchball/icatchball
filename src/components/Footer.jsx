import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo2 from "../assets/logo2.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-10 py-8 w-screen relative left-1/2 -translate-x-1/2">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo2} alt="Logo" className="w-11 h-auto" />
          <span className="text-primary font-medium text-lg">
            Catchball League
          </span>
        </div>

        {/* Navigation Links */}
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:mr-[140px] md:space-x-8 text-center">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            className="text-primary font-medium hover:text-[#f9c5d1]"
          >
            Home
          </Link>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            className="text-primary font-medium hover:text-[#f9c5d1]"
          >
            About
          </Link>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            className="text-primary font-medium hover:text-[#f9c5d1]"
          >
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a
            href="https://www.facebook.com/ICatchball/"
            target="_blank"
            className="text-primary hover:text-[#f9c5d1]"
            rel="noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/icatchaball/"
            target="_blank"
            className="text-primary hover:text-[#f9c5d1]"
            rel="noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Catchball League. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
