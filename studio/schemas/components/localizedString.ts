import { supportedLanguages } from '../config/localization';

export default {
  title: 'Localized String',
  name: 'localizedString',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
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
    type: 'string',
    fieldset: 'translations',
  })),
};
