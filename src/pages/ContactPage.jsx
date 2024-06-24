import React from "react";
import contactimage from "../images/contactimage.jpg";

const ContactPage = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-full px-6 py-4">
      <div className="flex flex-col justify-center items-center gap-6">
        {/* Image */}
        <div className="relative w-full h-[700px]">
          <img
            src={contactimage}
            alt="/"
            className="object-cover w-full h-full bg-center rounded-3xl"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start w-full gap-8 ">
          {/* Heading */}
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-5xl md:text-6xl py-6">Contact Page</h1>
            <p className="text-balance md:w-2/3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui non
              quis porro exercitationem hic, harum deserunt dolore soluta odit
              autem minima explicabo laborum atque alias nemo quam at fugit
              perspiciatis.
            </p>
          </div>
          {/* Contact Form */}
          <form
            action="#"
            className="max-w-screen-md p-8 mx-auto w-full h-full flex flex-col justify-center items-center gap-6 md:gap-12 rounded-2xl border border-black/20"
          >
            <div className="flex flex-col justify-between items-center gap-2 w-full h-full">
              <p className="text-transform: uppercase">Contact Page</p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center w-full h-1/2">
              <input
                className=" p-4 bg-white hover:bg-[#f1f1f1] rounded-full w-full"
                type="email"
                placeholder="E.g Adam Smith"
                name="Smith"
              />
              <input
                className=" p-4 bg-white hover:bg-[#f1f1f1] rounded-full w-full"
                type="email"
                placeholder="E.g adamsmith93@gmail.com"
                name="email"
              />
              <textarea
                className=" p-4 bg-white hover:bg-[#f1f1f1] rounded-2xl w-full"
                name="message"
                rows="10"
                placeholder="Your message here"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

// Contact Form

{
  /* Contact Form */
}
{
  /* <form
action="#"
className=" max-w-screen-md p-8 mx-auto w-full h-full flex flex-col justify-center items-center gap-6 md:gap-12 rounded-2xl border border-black/20"
>
<div className="flex flex-col justify-between items-start gap-2 w-full h-full">
  <p className="text-transform: uppercase">Contact Page</p>
</div>
<div className="flex flex-col gap-4 justify-center items-center w-full h-1/2">
  <input
    className=" p-4 bg-white hover:bg-[#f1f1f1] rounded-full w-full md:w-2/3"
    type="email"
    placeholder="E.g Adam Smith"
    name="Smith"
  />
  <input
    className=" p-4 bg-white hover:bg-[#f1f1f1] rounded-full w-full md:w-2/3"
    type="email"
    placeholder="E.g adamsmith93@gmail.com"
    name="email"
  />
  <textarea
    className=" p-4 bg-white hover:bg-[#f1f1f1] rounded-2xl w-full md:w-2/3"
    name="message"
    rows="10"
    placeholder="Your message here"
  />
</div>
</form> */
}
