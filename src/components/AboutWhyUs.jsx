import whyusimage from "../images/newsstandimage4.jpg";

const AboutWhyUs = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-full relative px-6 py-4 md:py-8 lg:py-16">
      <h2 className="text-4xl md:text-5xl py-12">Why Us</h2>
      {/* Grid/Flexbox section with image and paragraphs */}
      <div className="grid grid-cols-1 gap-6">
        {/* Image */}
        <div className="relative w-full">
          <img
            src={whyusimage}
            alt="/"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {/* Grid Element #1 */}
            <div className="">
              <h4 className="text-3xl pb-2 md:pb-4">High Quality</h4>
              <p className="text-base">
                Our purpose, ‘Through sport, we have the power to change lives,’
                guides the way we run our company, how we work with our
                partners, how we create our products, and how we engage with our
                consumers. We will always strive to expand the boundaries of
                human possibility, to include and unite people in sport, and to
                create a more sustainable world.
              </p>
            </div>
            {/* Grid Element #1 */}
            <div className="">
              <h4 className="text-3xl pb-2 md:pb-4">Experience</h4>
              <p className="text-base">
                Our purpose, ‘Through sport, we have the power to change lives,’
                guides the way we run our company, how we work with our
                partners, how we create our products, and how we engage with our
                consumers. We will always strive to expand the boundaries of
                human possibility, to include and unite people in sport, and to
                create a more sustainable world.
              </p>
            </div>
            {/* Grid Element #1 */}
            <div className="">
              <h4 className="text-3xl pb-2 md:pb-4">Knowledge</h4>
              <p className="text-base">
                Our purpose, ‘Through sport, we have the power to change lives,’
                guides the way we run our company, how we work with our
                partners, how we create our products, and how we engage with our
                consumers. We will always strive to expand the boundaries of
                human possibility, to include and unite people in sport, and to
                create a more sustainable world.
              </p>
            </div>
            {/* Grid Element #1 */}
            <div className="">
              <h4 className="text-3xl pb-2 md:pb-4">Innovation</h4>
              <p className="text-base">
                Our purpose, ‘Through sport, we have the power to change lives,’
                guides the way we run our company, how we work with our
                partners, how we create our products, and how we engage with our
                consumers. We will always strive to expand the boundaries of
                human possibility, to include and unite people in sport, and to
                create a more sustainable world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWhyUs;
