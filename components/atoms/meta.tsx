import { NextSeo } from 'next-seo';
import { OpenGraphMedia } from 'next-seo/lib/types';
import useTranslation from 'next-translate/useTranslation';

import {
  GlobalMetaConfigType,
  Localized,
  MetaConfigType,
  SanityComplexImageType,
} from 'sanity/queries';
import { urlFor } from 'sanity/sanity';

const buildOpenGraphImages = (
  images: SanityComplexImageType[]
): OpenGraphMedia[] => {
  return images.map((imageData) => {
    return {
      url:
        urlFor(imageData.image.asset._ref).width(1200).height(630).url() ?? '',
      width: 1200,
      height: 630,
      alt: imageData.alt,
    };
  });
};

const MetaConfig = ({
  siteConfig,
  pageConfig,
}: {
  siteConfig?: GlobalMetaConfigType;
  pageConfig?: Localized<MetaConfigType>;
}) => {
  const { lang } = useTranslation();
  const locale = lang as 'en' | 'de'; // Recast for TypeScript autocomplete

  let shareImages = pageConfig?.[locale]?.shareGraphics
    ? buildOpenGraphImages(pageConfig?.[locale].shareGraphics)
    : [];

  if (shareImages.length === 0) {
    shareImages = siteConfig?.meta?.[locale]?.shareGraphics
      ? buildOpenGraphImages(siteConfig.meta?.[locale].shareGraphics)
      : [];
  }

  const merged = {
    title:
      pageConfig?.[locale]?.metaTitle ?? siteConfig?.meta?.[locale]?.metaTitle,
    description:
      pageConfig?.[locale]?.metaDescription ??
      siteConfig?.meta?.[locale]?.metaDescription,
    openGraph: {
      type: 'website',
      locale,
      url: siteConfig?.siteUrl?.[locale],
      site_name: siteConfig?.siteName?.[locale],
      images: shareImages,
    },
    twitter: {
      cardType:
        pageConfig?.[locale]?.twitterCardType ??
        siteConfig?.meta?.[locale]?.twitterCardType ??
        'summary_large_image',
    },
  };

  return (
    <>
      <NextSeo {...merged} />
    </>
  );
};

MetaConfig.defaultProps = {
  pageConfig: null,
  siteConfig: null,
};

export default MetaConfig;
