import type * as micro_codecs from '@journeyapps-platform/micro-codecs';

import * as PROJECT_NAME from '@journeyapps-platform/types-PROJECT_NAME';
import * as sdk from '@journeyapps-platform/sdk-common';

export class Client<C extends sdk.NetworkClient = sdk.NetworkClient> extends sdk.SDKClient<C> {
  example = this.createEndpoint<PROJECT_NAME.ExampleDocument, PROJECT_NAME.SerializedExampleDocumentResource>({
    path: '/api/v1/example'
  });
}
