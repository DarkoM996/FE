import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-screen-3xl mx-auto h-full px-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <h2 className="text-3xl py-6">Furnico</h2>
        <div>
          <p>Get in touch with us</p>
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2 p-2 bg-black"
            >
              Description
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
