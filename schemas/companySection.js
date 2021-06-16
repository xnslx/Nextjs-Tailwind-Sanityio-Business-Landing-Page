export default {
    type: "object",
    name: "companySection",
    title: "Companies with Logo",
    fields: [{
            name: "heading",
            type: "string",
            title: "Heading",
        },
        {
            name: "label",
            type: "string",
            title: "Label",
        },
        {
            name: "image",
            type: "array",
            title: "Image",
            of: [{ type: "image" }],
        },
    ],
    preview: {
        select: {
            heading: "heading",
        },
        prepare({ heading }) {
            return {
                title: `${heading}`,
                subtitle: "Company Section",
            };
        },
    },
};