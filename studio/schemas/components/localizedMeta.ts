import { supportedLanguages } from '../config/localization';

export default {
  title: 'Localized Meta',
  name: 'localizedMeta',
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
      type: 'meta',
      fieldset: 'translations',
    })).concat([
      {
        // TODO: Add conditional fields when different settings are selected
        // Needed for app https://developer.twitter.com/content/developer-twitter/en/docs/tweets/optimize-with-cards/overview/app-card
        // Needed for player https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card
        name: 'twitterCardType',
        title: 'Twitter Card Type',
        type: 'string',
        initialValue: 'summary_large_image',
        options: {
          list: [
            {title: 'Summary', value: 'summary'},
            {title: 'Summary Large Image', value: 'summary_large_image'},
            {title: 'App', value: 'app'},
            {title: 'Player', value: 'player'},
          ],
          layout: 'radio',
          direction: 'horizontal',
        }
      }
    ]),
};
