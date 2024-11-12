import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import logo2 from "../assets/logo2.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md bg-white" : ""
      }`}
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="cursor-pointer">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            className="text-primary font-medium hover:text-[#f9c5d1]"
          >
            <img src={logo2} alt="Logo" className="w-11 h-auto" />
          </Link>
        </div>
        {/* Centered Navigation Links */}
        <div className="hidden md:flex cursor-pointer md:justify-end ml-auto">
          <ul className="flex space-x-8 mx-auto text-lg">
            <li>
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
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-125}
                duration={500}
                className="text-primary font-medium hover:text-[#f9c5d1]"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                className="text-primary font-medium hover:text-[#f9c5d1]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Hamburger Menu */}
        <div className="md:hidden w-10 h-10 items-center font-extrabold flex text-primary text-2xl">
          <button onClick={handleToggle}>
            {open ? <VscClose /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`md:hidden fixed top-[4.5rem] bg-white left-0 w-full overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          open ? "h-[calc(100vh-4.5rem)] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-6 text-lg p-4 h-full">
          <li>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className="text-primary font-medium hover:text-[#f9c5d1]"
              onClick={handleClose}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-125}
              duration={500}
              className="text-primary font-medium hover:text-[#f9c5d1]"
              onClick={handleClose}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className="text-primary font-medium hover:text-[#f9c5d1]"
              onClick={handleClose}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
