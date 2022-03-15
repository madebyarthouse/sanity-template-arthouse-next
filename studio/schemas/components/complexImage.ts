export default {
  title: 'Image with Alt Text',
  name: 'complexImage',
  type: 'object',
  fields: [
    {
      title: 'Bild',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Alternativer Text',
      name: 'alt',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
  },
};
