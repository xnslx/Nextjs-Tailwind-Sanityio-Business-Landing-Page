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
          <img
            src={builder.image(dt.image.asset._ref)}
            className="ml-auto mr-auto w-full"
          />
          <h1 className="text-4xl ml-4 text-gray-900 font-bold">
            {dt.heading}
          </h1>
          <p className="ml-4 text-gray-500">{dt.tagline}</p>
          <button className="bg-green w-48 h-12 ml-4 mt-8 text-base text-white font-light rounded rounded-2 border border-black shadow-offset-black">
            {dt.ctas.linkText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Hero;
