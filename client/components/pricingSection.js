import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../client";

const builder = imageUrlBuilder(sanityClient);

const PricingSection = ({ data }) => {
  const [item] = data;
  const { heading, label, subheading, pricingchoose } = item;
  return (
    <div>
      <div>
        <h3 className="text-2xl text-center text-gray-900 font-semibold mt-20">
          {heading}
        </h3>
        <h3 className="mt-2 text-center text-gray-070 text-center ml-auto mr-auto">
          {subheading}
        </h3>
        <p className="text-center text-gray-500 w-2/3 text-center ml-auto mr-auto">
          {label}
        </p>
      </div>
      <div>
        {pricingchoose.map((pc) => (
          <>
            <img src={builder.image(pc.icon.asset._ref).width(48)} />
            <p>{pc.chooselabel}</p>
            <h2>{pc.price}</h2>
            <hr></hr>
            {/* <BlockContent
              blocks={pc.text}
              serializers={serializers}
              projectId={projectId}
              dataset={dataset}
            /> */}
            {/* <div>
              {pc.ctas.map((cta) => (
                <Cta {...cta} key={cta._key} />
              ))}
            </div> */}
          </>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
