import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdFax, MdHouse, MdLocalPhone, MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="max-w-screen-3xl mx-auto h-full px-6 py-4 bg-[#1b1a18] text-white">
      <div className="flex items-center justify-center border-b-2 border-stone-800 p-6 dark:border-stone-400 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span className="text-xl">
            Get Connected with us on social media:
          </span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl mr-2">
            <FaInstagramSquare />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaFacebook />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaYoutube />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaTwitter />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaPinterest />
          </a>
        </div>
      </div>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- Logo Name Section --> */}
          <div className="">
            <h2 className="text-4xl mb-4 flex items-center justify-center font-semibold  md:justify-start">
              Furnico
            </h2>
            <p className="text-[#a8a49c]">
              Feel the comfort of resting nicely with our variety of our brands
              such as FurniPro, FurnicoDreams, FurnicoComfort and many others.
              Join us and become a member of growing base of happy customers.
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-medium uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a className="text-[#bebab2]">FurniPro</a>
            </p>
            <p className="mb-4">
              <a className="text-[#bebab2] ">FurnicoDreams</a>
            </p>
            <p className="mb-4">
              <a className="text-[#bebab2] ">FurniOffice</a>
            </p>
            <p>
              <a className="text-[#bebab2] ">FurniDining</a>
            </p>
          </div>
          {/* <!-- Useful Links --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-medium uppercase md:justify-start">
              Useful Links
            </h6>
            <p className="mb-4">
              <a className="text-[#bebab2]">Category</a>
            </p>
            <p className="mb-4">
              <a className="text-[#bebab2]">Orders</a>
            </p>
            <p className="mb-4">
              <a className="text-[#bebab2]">Settings</a>
            </p>
            <p>
              <a className="text-[#bebab2]">Help</a>
            </p>
          </div>
          {/* <!-- Contact --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-medium uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdHouse className="text-2xl mr-1" />
              <a className="text-[#bebab2]">New York, NY 10012, US</a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdMail className="text-2xl mr-1" />
              <a className="text-[#bebab2]">info@example.com</a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdLocalPhone className="text-2xl mr-1" />
              <a className="text-[#bebab2]">+ 01 234 567 88</a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdFax className="text-2xl mr-1" />
              <a className="text-[#bebab2]">+ 01 234 567 89</a>
            </p>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="p-6 text-center text-[#bebab2] ">
        <span>© 2024 Copyright:</span>
        <a href="/" className="text-[#bebab2] ml-1">
          Furnico
        </a>
      </div>
    </footer>
  );
};

export default Footer;
