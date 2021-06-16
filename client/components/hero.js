import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../client";

const builder = imageUrlBuilder(sanityClient);

const Hero = ({ data }) => {
  console.log("hero", data);

  return (
    <div className="mt-20">
      {data.map((dt, index) => (
        <div key={index}>
          <img src={builder.image(dt.image.asset._ref)} />
          <h1 className="text-4xl ml-2 font-bold">{dt.heading}</h1>
          <p className="ml-2 text-gray-500">{dt.tagline}</p>
          <button className="bg-gray-900 w-2/3 h-12 ml-2 mt-8 text-white">
            {dt.ctas.linkText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Hero;
