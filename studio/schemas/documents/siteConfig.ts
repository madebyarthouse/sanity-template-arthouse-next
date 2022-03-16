import { baseLanguage } from '../config/localization';

export default {
  title: 'Site Settings',
  name: 'siteConfig',
  type: 'document',
  groups: [
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    {
      name: 'meta',
      title: 'SEO / Share Settings',
      type: 'localizedMeta',
      group: 'meta',
    },
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'localizedString',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleTemplate',
      title: 'Title Template',
      type: 'localizedString',
      group: 'meta',
      description:
        'This template is used to generate the title of the page. The following variables are available: %s = title of page.',
    },
    {
      name: 'indexPage',
      title: 'Index Page',
      type: 'reference',
      to: [{ type: 'page' }],
      description: 'The page that is used as the index page.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'meta',
    },
  ],
  preview: {
    select: {
      title: `Site Settings`,
    },
  },
};
