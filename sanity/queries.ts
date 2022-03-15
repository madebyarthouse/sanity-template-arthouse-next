import { groq } from 'next-sanity';
import { getClient } from 'sanity/sanity.client';

export type SanityComplexImageType = {
  alt: string;
  image: SanitySimpleImageType;
};

export type SanitySimpleImageType = {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

export type Localized<T> = {
  [locale in 'en' | 'de']: T;
};

export type MetaConfigType = {
  metaTitle?: string;
  metaDescription?: string;
  shareTitle?: string;
  shareDescription?: string;
  shareGraphics: SanityComplexImageType[];
  twitterCardType: 'summary' | 'summary_large_image' | 'app' | 'player';
};

const metaConfigPartial = `
  "meta": {
    "de": meta.de,
    "en": meta.en
  }
`;

export type GlobalMetaConfigType = {
  meta: Localized<MetaConfigType>;
  siteName: Localized<string>;
  favicon: SanitySimpleImageType;
  siteUrl: string;
};

export const siteConfigQuery = async (
  preview = false
): Promise<GlobalMetaConfigType> => {
  return getClient(preview).fetch(groq`
    *[_type == "siteConfig"][0] {
      ${metaConfigPartial},
      siteName,
      favicon,
      siteUrl,
    }
  `);
};
