import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="  flex justify-between items-center h-20 bg-[#B4AB9C]">
      {/* I added this div class with container so I could have padding on side and menu still works regularly */}
      <div className="container mx-auto p-8 flex items-center justify-between">
        <div>
          <h3 className="text-3xl">Furnico</h3>
        </div>
        <ul className="hidden md:flex">
          <li className="text-xl">Home</li>
          <li className="text-xl">About</li>
          <li className="text-xl">Category</li>
          <li className="text-xl">Newsstand</li>
          <li className="text-xl">Contact</li>
        </ul>
        <div className="hidden md:flex">
          <AiOutlineSearch className="mr-2 text-2xl" />
          <MdOutlineShoppingCart className="mr-2 text-2xl" />
          <MdOutlinePersonOutline className="mr-2 text-2xl" />
        </div>

        {/* Hamburger Menu */}
        <div onClick={handleNav} className="md:hidden text-2xl z-10">
          {nav ? (
            <AiOutlineClose className="text-white" size={20} />
          ) : (
            <IoMdMenu size={20} />
          )}
        </div>
        {/* Mobile Menu dropdown */}
        <div
          onClick={handleNav}
          className={
            nav
              ? "absolute left-0 top-0 w-full h-full bg-[#2F2C26] py-7 px-4 flex flex-col text-white gap-8 md:hidden"
              : "absolute left-[-100%]"
          }
        >
          <ul className="flex flex-col items-center pt-16 justify-between gap-8">
            <li className="text-5xl ">Home</li>
            <li className="text-5xl ">About</li>
            <li className="text-5xl ">Category</li>
            <li className="text-5xl ">Newsstand</li>
            <li className="text-5xl ">Contact</li>
          </ul>
          <div className="flex justify-between my-8 px-8">
            <FaFacebook className="icon text-2xl cursor-pointer" />
            <FaTwitter className="icon text-2xl cursor-pointer" />
            <FaYoutube className="icon text-2xl cursor-pointer" />
            <FaPinterest className="icon text-2xl cursor-pointer" />
            <FaInstagram className="icon text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
