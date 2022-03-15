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
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'meta',
    },
  ],
};
