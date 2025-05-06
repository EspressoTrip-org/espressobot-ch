import * as micro from '@journeyapps-platform/micro';
import * as example from './example.js';
import Router from '../router.js';

export const endpoints = [
  new micro.docs.EndpointDoc({
    name: 'example',
    endpoint: example.example,
    response_schema: {
      type: 'boolean'
    }
  })
];

export const docs = micro.docs.createDocsEndpoint(Router, {
  endpoints: endpoints
});
