import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import {
  PortableText as PortableTextComponent,
  PortableTextProps,
} from '@portabletext/react';

import {
  PortableTextBlock,
  PortableTextMarkDefinition,
  ArbitraryTypedObject,
  PortableTextSpan,
} from '@portabletext/types';

import config from './sanityConfig';

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const PortableText = (
  props: JSX.IntrinsicAttributes &
    PortableTextProps<
      PortableTextBlock<
        PortableTextMarkDefinition,
        ArbitraryTypedObject | PortableTextSpan,
        string,
        string
      >
    >
) => {
  <PortableTextComponent components={{}} {...props} />;
};

// export const PortableText = createPortableTextComponent({
//   ...config,
//   serializers: {},
// });

export const useCurrentUser = createCurrentUserHook(config);
