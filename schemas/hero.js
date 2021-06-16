export default {
    name: "hero",
    title: "Hero",
    type: "object",
    fields: [{
            name: "heading",
            type: "string",
            title: "Heading",
        },
        {
            name: "tagline",
            type: "string",
            title: "Tagline",
        },
        {
            name: "image",
            type: "image",
            title: "Background image",
            options: {
                hotspot: true,
            },
            fields: [{
                name: "alt",
                type: "string",
                title: "Alternative text",
            }, ],
        },
        {
            name: "ctas",
            type: "callToAction",
            title: "Call to actions",
            of: [{
                type: "reference",
                to: [{ type: "cta" }],
            }, ],
        },
    ],
    preview: {
        select: {
            title: "heading",
            media: "backgroundImage",
        },
        prepare({ title, media }) {
            return {
                title,
                subtitle: "Hero section",
                media,
            };
        },
    },
};