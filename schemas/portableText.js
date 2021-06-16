export default {
    name: "portableText",
    type: "array",
    title: "Content",
    of: [{
        type: "block",
        marks: {
            annotations: [{
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [{
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [
                        { type: "article" },
                        // other types you may want to link to
                    ],
                }, ],
            }, ],
        },
    }, ],
};