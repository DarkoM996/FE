import React from "react";

const AsideMenu = () => {
  return (
    <aside>
      <p className="text-xl text-transform:uppercase">Filter By:</p>
      {/* Categories */}
      <div className="flex flex-col justify-between items-start gap-4 py-8">
        <button className="px-8 py-4 border border-black rounded-full w-1/4">
          Living Room
        </button>
        <button className="px-8 py-4 border border-black rounded-full w-1/4">
          Bedroom
        </button>
        <button className="px-8 py-4 border border-black rounded-full w-1/4">
          Dining Room
        </button>
        <button className="px-8 py-4 border border-black rounded-full w-1/4">
          Kitchen
        </button>
      </div>
    </aside>
  );
};

export default AsideMenu;
