import React from "react";

const Testimonials = () => {
  return (
    <div className="max-w-screen-3xl mx-auto px-6 py-4 relative w-full h-full">
      <h2 className="text-4xl md:text-5xl py-12">Testimonials</h2>
      {/* Grid with testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Grid Element */}
        <div>
          <h4 className="text-3xl">Some title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            doloremque expedita neque velit ipsum perspiciatis, temporibus enim,
            nesciunt cumque corrupti tempora ad dicta animi ullam explicabo nisi
            dolor doloribus dolore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
