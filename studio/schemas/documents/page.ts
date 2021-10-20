export default {
    name: "page",
    type: "document",
    title: "Page",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            codegen: { required: true },
            validation: (Rule) => Rule.required(),
        },
    ],
};
