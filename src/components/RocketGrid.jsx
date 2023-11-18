// RocketGrid.js

import React from "react";

function RocketGrid({ name, src }) {
  return (
    <div className="w-full  p-2">
      {/* Card */}
      <div className="rounded-xl relative overflow-hidden">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-end px-2">
          <p className="font-bold text-lg mb-1">{name}</p>
        </div>
        <img
          className="w-screen h-screen  md:h-620 object-cover rounded-xl"
          src={src}
          alt={name}
        />
      </div>
    </div>
  );
}

export default RocketGrid;
