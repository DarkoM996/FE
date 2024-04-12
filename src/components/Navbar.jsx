import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-zinc-300 border-b border-zinc-200">
      <div className="max-w-screen-2xl mx-auto flex flex-wrap p-5 flex-col items-center  md:flex-row ">
        <a className="flex title-font font-serif justify-center items-center text-gray-900">
          <h4 className="text-3xl">Something</h4>
        </a>
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center font-serif">
          <a className="mr-5">Home</a>
          <a className="mr-5">Products</a>
          <a className="mr-5">Category</a>
          <a className="mr-5">Contact</a>
        </div>
        <div className="flex flex-wrap">
          <AiOutlineSearch />
          <MdOutlinePersonOutline />
          <MdOutlineShoppingCart />
          <div className="md:hidden">
            <IoMdMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Working nav

{
  /* <nav className="bg-zinc-300 border-b border-zinc-200">
<div className="max-w-screen-2xl mx-auto flex flex-wrap p-5 flex-col items-center  md:flex-row ">
  <a className="flex title-font font-serif justify-center items-center text-gray-900 mb-4">
    <h4 className="text-3xl">Something</h4>
  </a>
  <div className="md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center font-serif">
    <a className="mr-5">Home</a>
    <a className="mr-5">Products</a>
    <a className="mr-5">Category</a>
    <a className="mr-5">Contact</a>
  </div>
  <button className="inline-flex items-center font-serif bg-yellow-500 border-0 px-4 py-2 mt-4">
    Click Me
  </button>
</div>
</nav> */
}
