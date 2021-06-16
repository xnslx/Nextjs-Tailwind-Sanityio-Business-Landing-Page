export default {
    type: "object",
    name: "serviceSection",
    title: "Service We Provide",
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
            name: "services",
            title: "Services",
            of: [{
                type: "object",
                fields: [{
                        name: "image",
                        type: "image",
                        title: "Image",
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
                    {
                        name: "everyservice",
                        type: "array",
                        title: "Every Service",
                        of: [{
                            type: "object",
                            fields: [{
                                    name: "everylabel",
                                    type: "string",
                                    title: "Every Label",
                                },
                                {
                                    name: "text",
                                    title: "Text",
                                    type: "text",
                                },
                            ],
                        }, ],
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
                subtitle: " Service Section",
            };
        },
    },
};