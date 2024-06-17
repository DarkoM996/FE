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
    <footer className="max-w-screen-3xl mx-auto h-full px-6 py-4 bg-primary_darkerShade-900 text-white">
      <div className="flex items-center justify-center border-b-2 border-primary_darkerShade-850 p-6 dark:border-primary_lighterShade-300 lg:justify-between">
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
            <p className=" text-primary_lighterShade-500">
              Feel the comfort of resting nicely with our variety of our brands
              such as FurniPro, FurnicoDreams, FurnicoComfort and many others.
              Join us and become a member of growing base of happy customers.
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h4 className="mb-4 text-3xl flex justify-center font-medium md:justify-start">
              Products
            </h4>
            <p className="mb-4">
              <a className="text-primary_lighterShade-500 hover:text-primary_lighterShade-200">
                FurniPro
              </a>
            </p>
            <p className="mb-4">
              <a className="text-primary_lighterShade-500 hover:text-primary_lighterShade-200 ">
                FurnicoDreams
              </a>
            </p>
            <p className="mb-4">
              <a className="text-primary_lighterShade-500 hover:text-primary_lighterShade-200 ">
                FurniOffice
              </a>
            </p>
            <p>
              <a className="text-primary_lighterShade-500 hover:text-primary_lighterShade-200">
                FurniDining
              </a>
            </p>
          </div>
          {/* <!-- Useful Links --> */}
          <div className="">
            <h4 className="mb-4 text-3xl flex justify-center font-medium md:justify-start">
              Useful Links
            </h4>
            <p className="mb-4">
              <a className="text-primary_lighterShade-500 hover:text-primary_lighterShade-200">
                Category
              </a>
            </p>
            <p className="mb-4">
              <a className="text-primary_lighterShade-500 hover:text-primary_lighterShade-200">
                Orders
              </a>
            </p>
            <p className="mb-4">
              <a className="text-primary_lighterShade-500 hover:text-primary_lighterShade-200">
                Settings
              </a>
            </p>
            <p>
              <a className="text-primary_lighterShade-500 hover:text-primary_lighterShade-200">
                Help
              </a>
            </p>
          </div>
          {/* <!-- Contact --> */}
          <div className="">
            <h4 className="mb-4 text-3xl flex justify-center font-medium  md:justify-start">
              Products
            </h4>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdHouse className="text-2xl mr-1" />
              <a className="text-primary_lighterShade-500 hover:text-primary_lighterShade-200">
                New York, NY 10012, US
              </a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdMail className="text-2xl mr-1" />
              <a className="text-primary_lighterShade-500 hover:text-primary_lighterShade-200">
                info@example.com
              </a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdLocalPhone className="text-2xl mr-1" />
              <a className="text-primary_lighterShade-500 hover:text-primary_lighterShade-200">
                + 01 234 567 88
              </a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdFax className="text-2xl mr-1" />
              <a className="text-primary_lighterShade-500 hover:text-primary_lighterShade-200">
                + 01 234 567 89
              </a>
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
