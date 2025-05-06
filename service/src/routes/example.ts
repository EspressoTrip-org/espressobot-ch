import * as types from '@journeyapps-platform/types-PROJECT_NAME';
import * as micro from '@journeyapps-platform/micro';
import * as api from '../api/index.js';
import Router from '../router.js';

export enum ROUTES {
  EXAMPLE = '/api/v1/example'
}

export const example = Router.post(ROUTES.EXAMPLE, {
  validator: micro.schema.createTsCodecValidator(types.ExampleDocument),
  handler: async ({ params, context }) => {
    return types.ExampleDocumentResource.encode(await api.example.createResource(context.system, params));
  }
});
