// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import complexImage from './components/complexImage';
import localizedRichText from './components/localizedRichText';
import localizedString from './components/localizedString';
import meta from './components/meta';
import localizedMeta from './components/localizedMeta';
import localizedComplexImage from './components/localizedComplexImage';
import siteConfig from './documents/siteConfig';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    complexImage,
    localizedRichText,
    localizedString,
    localizedComplexImage,
    meta,
    localizedMeta,
    siteConfig,
  ]),
});
