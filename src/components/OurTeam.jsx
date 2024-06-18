import teammember1 from "../images/teammember1.jpg";
import teammember2 from "../images/teammember2.jpg";
import teammember3 from "../images/teammember3.jpg";
import teammember4 from "../images/teammember4.jpg";

const OurTeam = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-full px-6 py-4">
      <h2 className="text-4xl md:text-5xl py-12">Our Team</h2>
      {/* Grid with elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {/* Grid Element #1 */}
        <div className="">
          <img
            src={teammember2}
            alt="/"
            className="w-full h-[420px] object-cover rounded-3xl"
          />
          <div className="flex flex-col items-start pt-4 gap-2">
            <h4 className="text-2xl">John Stones</h4>
            <p className="text-base text-neutral-600">CEO and founder</p>
          </div>
        </div>
        {/* Grid Element #1 */}
        <div>
          <img
            src={teammember1}
            alt="/"
            className="w-full h-[420px] object-cover rounded-3xl"
          />
          <div className="flex flex-col items-start pt-4 gap-2">
            <h4 className="text-2xl">Jenny Stokes</h4>
            <p className="text-base text-neutral-600">CFO</p>
          </div>
        </div>
        {/* Grid Element #1 */}
        <div>
          <img
            src={teammember3}
            alt="/"
            className="w-full h-[420px] object-cover rounded-3xl"
          />
          <div className="flex flex-col items-start pt-4 gap-2">
            <h4 className="text-2xl">Sarah Stones</h4>
            <p className="text-base text-neutral-600">Operations Manager</p>
          </div>
        </div>
        {/* Grid Element #4 */}
        <div className="">
          <img
            src={teammember4}
            alt="/"
            className="w-full h-[420px] object-cover rounded-3xl"
          />
          <div className="flex flex-col items-start pt-4 gap-2">
            <h4 className="text-2xl">Wesley Stokes</h4>
            <p className="text-base text-neutral-600">CMO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
