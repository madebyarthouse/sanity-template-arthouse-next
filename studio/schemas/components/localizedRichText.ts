import { supportedLanguages } from '../config/localization';

export default {
  title: 'Localized Rich Text',
  name: 'localizedRichText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: false },
    },
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'array',
    of: [
      {
        type: 'block',
      },
      {
        type: 'image',
      },
    ],
    fieldset: 'translations',
  })),
};
