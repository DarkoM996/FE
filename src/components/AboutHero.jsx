import image from "../images/aboutimage.jpg";

const AboutHero = () => {
  return (
    <div className="max-w-screen-3xl mx-auto p-8 relative w-full h-screen">
      <div className="relative w-full h-full">
        {/* Image Background */}
        <img
          src={image}
          alt="/"
          className="w-full h-full object-cover rounded-3xl"
        />
        {/* Text Container  */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/40 rounded-3xl text-white line-clamp-2 text-center">
          <div className="flex flex-col justify-center items-center text-center gap-6 text-white">
            {/* div added so the spacing fits the design requirements. It had to be written with flex flex-col so the gap class can work here */}
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl md:text-6xl text-center w-full">
                Feel The Comfort Of Resting
              </h1>
              <h1 className="text-5xl md:text-6xl text-center w-full">
                Comfortably Using FurniPro
              </h1>
            </div>
            <button className="px-6 py-4 bg-black hover:bg-primary_darkerShade-900 rounded-full">
              Scroll Down
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
