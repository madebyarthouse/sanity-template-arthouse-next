import {
  MetaConfigType,
  SanityComplexImageType,
  GlobalMetaConfigType,
  SanitySimpleImageType,
} from 'sanity/queries';
import { NextSeo } from 'next-seo';
import { OpenGraphMedia } from 'next-seo/lib/types';
import useTranslation from 'next-translate/useTranslation';
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

type PageMetaType = {
  metaTitle?: string;
  metaDescription?: string;
  shareTitle?: string;
  shareDescription?: string;
  shareGraphics: SanityComplexImageType[];
  twitterCardType: 'summary' | 'summary_large_image' | 'app' | 'player';
};

type SiteMetaType = {
  meta?: PageMetaType;
  siteName?: string;
  favicon?: SanitySimpleImageType;
  siteUrl?: string;
  titleTemplate?: string;
};
const Meta = ({
  siteConfig,
  pageConfig,
}: {
  siteConfig?: SiteMetaType;
  pageConfig?: PageMetaType;
}) => {
  const { lang } = useTranslation();
  let shareImages = pageConfig?.shareGraphics
    ? buildOpenGraphImages(pageConfig?.shareGraphics)
    : [];

  if (shareImages.length === 0) {
    shareImages = siteConfig?.meta?.shareGraphics
      ? buildOpenGraphImages(siteConfig.meta?.shareGraphics)
      : [];
  }

  const merged = {
    title: pageConfig?.metaTitle ?? siteConfig?.meta?.metaTitle,
    description:
      pageConfig?.metaDescription ?? siteConfig?.meta?.metaDescription,
    openGraph: {
      type: 'website',
      lang,
      url: siteConfig?.siteUrl,
      site_name: siteConfig?.siteName,
      images: shareImages,
    },
    twitter: {
      cardType:
        pageConfig?.twitterCardType ??
        siteConfig?.meta?.twitterCardType ??
        'summary_large_image',
    },
  };

  if (siteConfig?.titleTemplate?.includes('%s')) {
    merged.title = siteConfig.titleTemplate.replace('%s', merged.title ?? '');
  }

  return (
    <>
      <NextSeo {...merged} />
    </>
  );
};

Meta.defaultProps = {
  pageConfig: null,
  siteConfig: null,
};

export default Meta;
