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
              ? "absolute left-0 top-0 w-full h-full bg-[#2F2C26] py-7 px-4 flex flex-col text-white gap-8"
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

// Working nav

// <nav className="bg-zinc-300 border-b border-zinc-200">
//       <div className="max-w-screen-2xl mx-auto flex flex-wrap p-5 flex-col items-center  md:flex-row ">
//         <a className="flex title-font font-serif justify-center items-center text-gray-900">
//           <h4 className="text-3xl">Something</h4>
//         </a>
//         <div className="hidden md:flex flex-1 flex-wrap items-center  justify-center font-serif ">
//           <a className="mr-5">Home</a>
//           <a className="mr-5">Products</a>
//           <a className="mr-5">Category</a>
//           <a className="mr-5">Contact</a>
//         </div>
//         <div className="flex flex-wrap">
//           <AiOutlineSearch />
//           <MdOutlinePersonOutline />
//           <MdOutlineShoppingCart />
//           <div className="md:hidden">
//             <IoMdMenu />
//           </div>
//         </div>
//       </div>
//     </nav>
