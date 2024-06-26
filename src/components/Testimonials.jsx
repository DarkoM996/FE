import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Testimonials = () => {
  return (
    <div className="max-w-screen-3xl mx-auto px-6 py-4 relative w-full h-full">
      <h2 className="text-4xl md:text-5xl py-12">Testimonials</h2>
      {/* Grid with testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
        {/* Grid Element */}
        <div className=" bg-primary_lighterShade-200 px-8 py-6 rounded-3xl border border-primary_lighterShade-300 hover:shadow-2xl">
          <h4 className="text-3xl pb-1">Amazing Sofa </h4>
          {/* Star rating  */}
          <div className="flex flex-row pb-4 text-xl text-yellow-500">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
          <p className="text-base leading-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            doloremque expedita neque velit ipsum perspiciatis, temporibus enim,
            nesciunt cumque corrupti tempora ad dicta animi ullam explicabo nisi
            dolor doloribus dolore.
          </p>
          {/* Date and name of who posted it */}
          <div className="flex flex-row justify-between items-centers pt-4">
            {/* customer's name */}
            <p className="font-bold">John Wayne</p>
            {/* date when the comment is posted */}
            <p>24/07/2024</p>
          </div>
        </div>
        {/* Grid Element */}
        <div className="bg-primary_lighterShade-200 px-8 py-6 rounded-3xl border border-primary_lighterShade-300 hover:shadow-2xl">
          <h4 className="text-3xl pb-1">Phenomenal Service!</h4>
          {/* Star rating  */}
          <div className="flex flex-row pb-4 text-xl text-yellow-500">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
          <p className="text-base leading-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            doloremque expedita neque velit ipsum perspiciatis, temporibus enim,
            nesciunt cumque corrupti tempora ad dicta animi ullam explicabo nisi
            dolor doloribus dolore.
          </p>
          {/* Date and name of who posted it */}
          <div className="flex flex-row justify-between items-centers pt-4">
            {/* customer's name */}
            <p className="font-bold">Juliana Stone</p>
            {/* date when the comment is posted */}
            <p>14/08/2024</p>
          </div>
        </div>
        {/* Grid Element */}
        <div className="bg-primary_lighterShade-200 px-8 py-6 rounded-3xl border border-primary_lighterShade-300 hover:shadow-2xl">
          <h4 className="text-3xl pb-1">The Most Amazing Experience!</h4>
          {/* Star rating  */}
          <div className="flex flex-row pb-4 text-xl text-yellow-500">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
          <p className="text-base leading-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            doloremque expedita neque velit ipsum perspiciatis, temporibus enim,
            nesciunt cumque corrupti tempora ad dicta animi ullam explicabo nisi
            dolor doloribus dolore.
          </p>
          {/* Date and name of who posted it */}
          <div className="flex flex-row justify-between items-centers pt-4">
            {/* customer's name */}
            <p className="font-bold">Harry Brown</p>
            {/* date when the comment is posted */}
            <p>24/06/2024</p>
          </div>
        </div>
        {/* Grid Element */}
        <div className="bg-primary_lighterShade-200 px-8 py-6 rounded-3xl border border-primary_lighterShade-300 hover:shadow-2xl">
          <h4 className="text-3xl pb-1">Best Sofa Ever</h4>
          {/* Star rating  */}
          <div className="flex flex-row pb-4 text-xl text-yellow-500">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
          <p className="text-base leading-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            doloremque expedita neque velit ipsum perspiciatis, temporibus enim,
            nesciunt cumque corrupti tempora ad dicta animi ullam explicabo nisi
            dolor doloribus dolore.
          </p>
          {/* Date and name of who posted it */}
          <div className="flex flex-row justify-between items-centers pt-4">
            {/* customer's name */}
            <p className="font-bold">Wayne Jefferson</p>
            {/* date when the comment is posted */}
            <p>24/03/2024</p>
          </div>
        </div>
        {/* Grid Element */}
        <div className="bg-primary_lighterShade-200 px-8 py-6 rounded-3xl border border-primary_lighterShade-300 hover:shadow-2xl">
          <h4 className="text-3xl pb-1">The Best Mattress</h4>
          {/* Star rating  */}
          <div className="flex flex-row pb-4 text-xl text-yellow-500">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
          <p className="text-base leading-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            doloremque expedita neque velit ipsum perspiciatis, temporibus enim,
            nesciunt cumque corrupti tempora ad dicta animi ullam explicabo nisi
            dolor doloribus dolore.
          </p>
          {/* Date and name of who posted it */}
          <div className="flex flex-row justify-between items-centers pt-4">
            {/* customer's name */}
            <p className="font-bold">George Davies</p>
            {/* date when the comment is posted */}
            <p>24/03/2024</p>
          </div>
        </div>
        {/* Grid Element */}
        <div className=" bg-primary_lighterShade-200 px-8 py-6 rounded-3xl border border-primary_lighterShade-300 hover:shadow-2xl">
          <h4 className="text-3xl pb-1">Best Sleep I've Ever Had</h4>
          {/* Star rating  */}
          <div className="flex flex-row pb-4 text-xl text-yellow-500">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
          <p className="text-base leading-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            doloremque expedita neque velit ipsum perspiciatis, temporibus enim,
            nesciunt cumque corrupti tempora ad dicta animi ullam explicabo nisi
            dolor doloribus dolore.
          </p>
          {/* Date and name of who posted it */}
          <div className="flex flex-row justify-between items-centers pt-4">
            {/* customer's name */}
            <p className="font-bold">Lily Thompson</p>
            {/* date when the comment is posted */}
            <p>24/03/2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
