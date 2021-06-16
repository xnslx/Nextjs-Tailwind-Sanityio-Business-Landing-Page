export default {
    name: "pricingSection",
    title: "pricingSection",
    type: "object",
    fields: [{
            name: "heading",
            title: "Heading",
            type: "string",
        },
        {
            name: "subheading",
            title: "Sub Heading",
            type: "string",
        },
        {
            name: "label",
            title: "Label",
            type: "string",
        },
        {
            type: "array",
            name: "pricingchoose",
            title: "Pricing Choose",
            of: [{
                type: "object",
                fields: [{
                        name: "icon",
                        title: "Icon",
                        type: "image",
                    },
                    {
                        name: "chooselabel",
                        title: "Choose Label",
                        type: "string",
                    },
                    {
                        name: "price",
                        title: "Price",
                        type: "string",
                    },
                    {
                        name: "text",
                        title: "Text",
                        type: "portableText",
                    },
                    {
                        name: "ctas",
                        type: "array",
                        title: "Call to actions",
                        of: [{
                            title: "Call to action",
                            type: "callToAction",
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
                subtitle: "pricingSection",
            };
        },
    },
};