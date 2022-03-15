export default {
  title: 'SEO / Share Settings',
  name: 'meta',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      description: 'Title used for search engines and browsers',
      validation: (Rule) =>
        Rule.max(50).warning(
          'Longer titles may be truncated by search engines'
        ),
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      rows: 3,
      description: 'Description for search engines',
      validation: (Rule) =>
        Rule.max(150).warning(
          'Longer descriptions may be truncated by search engines'
        ),
    },
    {
      title: 'Keywords',
      name: 'keywords',
      type: 'string',
    },
    {
      title: 'Share Title',
      name: 'shareTitle',
      type: 'string',
      description: 'Title used for social sharing cards',
      validation: (Rule) =>
        Rule.max(50).warning('Longer titles may be truncated by social sites'),
    },
    {
      title: 'Share Description',
      name: 'shareDescription',
      type: 'text',
      rows: 3,
      description: 'Description used for social sharing cards',
      validation: (Rule) =>
        Rule.max(150).warning(
          'Longer descriptions may be truncated by social sites'
        ),
    },
    {
      title: 'Share Graphics',
      name: 'shareGraphics',
      type: 'array',
      of: [{ type: 'complexImage' }],
      description: 'Recommended size: 1200x630 (PNG or JPG)',
    },
  ],
};
