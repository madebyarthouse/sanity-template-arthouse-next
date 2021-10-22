export default {
  name: "siteConfig",
  type: "document",
  title: "Site config",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      of: [{ type: "string" }],
    },
  ],
};
