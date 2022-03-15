export default {
  title: 'Image with localized Alt Text',
  name: 'localizedComplexImage',
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
      type: 'localizedString',
    },
  ],
  preview: {
    select: {
      title: 'alt.de',
      media: 'image',
    },
  },
};
