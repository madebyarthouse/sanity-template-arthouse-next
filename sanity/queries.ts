import { groq } from 'next-sanity';
import { getClient } from 'sanity/sanity.client';

export type SanityLocalizedComplexImageType = {
  alt: Localized<string>;
  image: SanitySimpleImageType;
};

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

export type LocalizedGlobalMetaConfigType = {
  meta?: Localized<MetaConfigType>;
  siteName?: Localized<string>;
  favicon?: SanitySimpleImageType;
  titleTemplate?: Localized<string>;
  siteUrl?: string;
  indexSlug: string;
};

export type GlobalMetaConfigType = {
  meta?: MetaConfigType;
  siteName?: string;
  favicon?: SanitySimpleImageType;
  siteUrl?: string;
  titleTemplate?: string;
  indexSlug: string;
};

export const siteConfigQuery = async (
  preview = false
): Promise<LocalizedGlobalMetaConfigType> => {
  return getClient(preview).fetch(groq`
    *[_type == "siteConfig"][0] {
      ${metaConfigPartial},
      siteName,
      favicon,
      siteUrl,
      "indexSlug": indexPage->.slug.current,
      "titleTemplate": {
        "de": titleTemplate.de,
        "en": titleTemplate.en
      }
    }
  `);
};

export const pageSlugsQuery = async (
  preview = false
): Promise<
  {
    slug: string;
  }[]
> => {
  return getClient(preview).fetch(groq`
    *[_type == "page"] {
      "slug": slug.current
    }
  `);
};

export type PageType = {
  _id: string;
  meta: Localized<MetaConfigType>;
  title: Localized<string>;
  slug: string;
};

export const pageQuery = async (
  slug: string,
  preview = false
): Promise<PageType> => {
  return getClient(preview).fetch(
    groq`
    *[_type == "page" && slug.current == $slug][0] {
      _id,
      ${metaConfigPartial},
      "slug": slug.current,
      "title": {
        "de": title.de,
        "en": title.en
      }
    }
  `,
    { slug }
  );
};
