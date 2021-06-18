import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../client";

const builder = imageUrlBuilder(sanityClient);

const ServiceSection = ({ data }) => {
  console.log(data);
  const [item] = data;
  console.log(item);
  const { heading, label, services } = item;
  return (
    <div className="mt-36">
      <h3 className="text-2xl text-center text-gray-900 font-semibold mt-20">
        {heading}
      </h3>
      <p className="text-center text-gray-500 w-2/3 text-center ml-auto mr-auto">
        {label}
      </p>
      <div>
        <ul>
          {services.map((service) => (
            <>
              <img
                src={builder.image(service.image.asset._ref).width(320)}
                className="ml-auto mr-auto mt-8"
              />
              <h4 className="text-2xl text-center text-green font-semibold">
                {service.subheading}
              </h4>
              <p className="text-base text-center text-gray-500 font-base w-2/3 text-center ml-auto mr-auto">
                {service.sublabel}
              </p>
              <div>
                {service.everyservice.map((i) => (
                  <>
                    <h4 className="mt-8 text-lg font-medium text-center text-gray-900">
                      {i.everylabel}
                    </h4>
                    <p className="text-base text-center text-gray-500 w-2/3 text-center ml-auto mr-auto">
                      {i.text}
                    </p>
                  </>
                ))}
              </div>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceSection;
