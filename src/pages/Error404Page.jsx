import backgroundimage from "../images/error404image.jpg";

const Error404Page = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-screen p-8">
      <div className="relative w-full h-full ">
        {/* Image Background With Padding */}
        <img
          src={backgroundimage}
          alt="/"
          className="object-cover w-full h-full bg-center rounded-3xl"
        />
        {/* Text Container With Links Pointing Back */}
        {/* Add padding on the text container so it matches the padding on the picture background */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-6 bg-black/40 rounded-3xl p-8">
          <div className="flex flex-col justify-center items-center text-center gap-2 text-white">
            <h1 className="text-5xl md:text-6xl ">Error 404</h1>
            <p className="text-xl">
              Unfortunately, something went wrong duo to unknown reasons.
            </p>
          </div>
          <button className="p-4 bg-white text-black text-transform: uppercase rounded-full">
            Back To Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404Page;
