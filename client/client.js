// const sanityClient = require("@sanity/client");
// const client = sanityClient({
//     projectId: "aqm1x7ig",
//     dataset: "production",
//     apiVersion: "2021-06-15",
//     token: "", // or leave blank to be anonymous user
//     useCdn: false, // `false` if you want to ensure fresh data
// });

// module.exports = client;

import { createClient, createImageUrlBuilder } from "next-sanity";

const config = {
    dataset: "production",
    projectId: "aqm1x7ig",
    useCdn: false,
};
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);