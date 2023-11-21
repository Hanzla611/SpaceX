// RocketGrid.js

import React from "react";

function RocketGrid({ details, src }) {
  console.log(details, "details");
  return (
    <div className="w-full p-2">
      {/* Card */}
      <div className="rounded-xl relative overflow-hidden">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center px-12 pb-12">
          <p className="font-bold text-6xl mb-1">{details?.name}</p>
          {/* <p className=" text-5xl mb-1">{details?.company}</p> */}
          <p className=" text-5xl mb-1">
            Status: {details?.active === true ? "active" : "inactive"}
          </p>
          <p className=" text-2xl mb-1">{details?.description}</p>
        <p className="font-semibold text-2xl mb-1">Success rate:{details.success_rate_pct}%</p>
        </div>
        <img
          className="w-screen h-screen object-cover rounded-xl"
          src={src}
          alt={name}
        />
           
      </div>
    </div>
  );
}

export default RocketGrid;
