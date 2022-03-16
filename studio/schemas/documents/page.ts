export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  groups: [
    {
      name: 'content',
      title: 'Inhalte',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    {
      name: 'meta',
      title: 'SEO / Share Einstellungen',
      type: 'localizedMeta',
      group: 'meta',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL',
      group: 'meta',
      validation: (Rule) => [
        Rule.required(),
        Rule.custom(
          (slug) =>
            slug.current.toLowerCase() === slug.current ||
            'Slug must be lowercase'
        ),
        Rule.custom(
          (slug) =>
            (!slug.current.startsWith('/') && !slug.current.endsWith('/')) ||
            'Slug cannot start or end with a /'
        ),
      ],
    },
    {
      name: 'title',
      type: 'localizedString',
      title: 'Title',
      group: 'content',
    },
  ],
  preview: {
    select: {
      title: 'slug.current',
    },
  },
};
