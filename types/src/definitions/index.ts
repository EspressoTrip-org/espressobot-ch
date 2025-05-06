import type * as bson from 'bson';

import * as codecs from '@journeyapps-platform/micro-codecs';
import * as t from 'ts-codec';

export const ExampleDocument = t.object({
  title: t.string
});
export type ExampleDocument = t.Encoded<typeof ExampleDocument>;

export const ExampleDocumentResource = ExampleDocument.and(codecs.Resource);
export type ExampleDocumentResource = t.Decoded<typeof ExampleDocumentResource>;
export type SerializedExampleDocumentResource = t.Encoded<typeof ExampleDocumentResource>;
