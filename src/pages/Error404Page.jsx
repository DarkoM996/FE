import backgroundimage from "../images/error404image.jpg";

const Error404Page = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-screen">
      <img
        src={backgroundimage}
        alt="/"
        className="object-cover w-full h-full bg-center"
      />
    </div>
  );
};

export default Error404Page;
