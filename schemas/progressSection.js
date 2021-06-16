export default {
    type: "object",
    name: "progressSection",
    title: "Progress",
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
            type: "array",
            name: "steps",
            title: "Steps",
            of: [{
                type: "object",
                fields: [{
                        name: "image",
                        type: "image",
                        title: "Icon",
                    },
                    {
                        name: "subheading",
                        type: "string",
                        title: "Sub Heading",
                    },
                    {
                        name: "sublabel",
                        type: "string",
                        title: "Sub Label",
                    },
                ],
            }, ],
        },
    ],
    preview: {
        select: {
            heading: "heading",
        },
        prepare({ heading }) {
            return {
                title: `${heading}`,
                subtitle: "Progress Section",
            };
        },
    },
};