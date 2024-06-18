import React from "react";

const AboutOurValues = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-full px-6 py-4">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Grid Element left */}
        <h2 className="text-4xl md:text-5xl md:pl-4 py-12">Our Values</h2>
        {/* Separate Grid of other elements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 py-12  gap-6">
          {/* Grid Element #1 */}
          <div className="">
            <h4 className="text-3xl pb-2 md:pb-4">Integrity</h4>
            <p className="text-base">
              Our purpose, ‘Through sport, we have the power to change lives,’
              guides the way we run our company, how we work with our partners,
              how we create our products, and how we engage with our consumers.
              We will always strive to expand the boundaries of human
              possibility, to include and unite people in sport, and to create a
              more sustainable world.
            </p>
          </div>
          {/* Grid Element #2 */}
          <div className="">
            <h4 className="text-3xl pb-2 md:pb-4">Passion</h4>
            <p className="text-base">
              Our purpose, ‘Through sport, we have the power to change lives,’
              guides the way we run our company, how we work with our partners,
              how we create our products, and how we engage with our consumers.
              We will always strive to expand the boundaries of human
              possibility, to include and unite people in sport, and to create a
              more sustainable world.
            </p>
          </div>
          {/* Grid Element #3 */}
          <div className="">
            <h4 className="text-3xl pb-2 md:pb-4">Experience</h4>
            <p className="text-base">
              Our purpose, ‘Through sport, we have the power to change lives,’
              guides the way we run our company, how we work with our partners,
              how we create our products, and how we engage with our consumers.
              We will always strive to expand the boundaries of human
              possibility, to include and unite people in sport, and to create a
              more sustainable world.
            </p>
          </div>
          {/* Grid Element #4 */}
          <div className="">
            <h4 className="text-3xl pb-2 md:pb-4">Determination</h4>
            <p className="text-base">
              Our purpose, ‘Through sport, we have the power to change lives,’
              guides the way we run our company, how we work with our partners,
              how we create our products, and how we engage with our consumers.
              We will always strive to expand the boundaries of human
              possibility, to include and unite people in sport, and to create a
              more sustainable world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurValues;
