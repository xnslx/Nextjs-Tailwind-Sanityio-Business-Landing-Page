export default {
  name: "page",
  type: "document",
  title: "Page Builder",
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      of: [
        { type: "hero" },
        { type: "companySection" },
        { type: "serviceSection" },
        { type: "progressSection" },
        { type: "pricingSection" },
        // { type: "portableText" },
        // { type: "link" },
        // { type: "internalLink" },
        // { type: "cta" },
        // { type: "embedHTML" },
        // { type: "figure" },
        // { type: "route" },
        { type: "portableText" },
        // { type: "siteConfig" },
        // { type: "simplePortableText" },
      ],
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "This description populates meta-tags on the webpage",
      fieldset: "metadata",
    },
    {
      name: "openGraphImage",
      type: "image",
      title: "Open Graph Image",
      description: "Image for sharing previews on Facebook, Twitter etc.",
      fieldset: "metadata",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "openGraphImage",
    },
  },
};
