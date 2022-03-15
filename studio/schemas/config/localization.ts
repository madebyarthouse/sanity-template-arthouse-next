export const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'de', title: 'German' },
];

export const baseLanguage = supportedLanguages.find((l) => l.isDefault);
