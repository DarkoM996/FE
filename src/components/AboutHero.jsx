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
          <div className="flex flex-col justify-center items-center text-center gap-2 text-white">
            <h1 className="text-5xl md:text-6xl font-bold text-center w-full">
              Feel The Comfort Of Resting
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold text-center w-full">
              Comfortably Using FurniPro
            </h1>
            <button className="px-6 py-4 bg-black hover:bg-primary_darkerShade-900 rounded-3xl">
              Scroll Down
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
