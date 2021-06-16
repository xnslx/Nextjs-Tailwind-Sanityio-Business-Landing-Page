// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import hero from "./hero";
import cta from "./cta";
import companySection from "./companySection";
import page from "./page";
import serviceSection from "./serviceSection";
import progressSection from "./progressSection";
import pricingSection from "./pricingSection";
import portableText from "./portableText";
import link from "./link";
import internalLink from "./internalLink";
import embedHTML from "./embedHTML";
import figure from "./figure";
import route from "./route";
import simplePortableText from "./simplePortableText";
import siteConfig from "./siteConfig";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        hero,
        companySection,
        cta,
        page,
        serviceSection,
        progressSection,
        pricingSection,
        portableText,
        // link,
        // internalLink,
        // embedHTML,
        // figure,
        // route,
        // simplePortableText,
        // siteConfig,
    ]),
});