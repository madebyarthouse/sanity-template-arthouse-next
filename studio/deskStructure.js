import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteConfig').documentId('siteConfig')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteConfig'].includes(listItem.getId())
      ),
    ]);
