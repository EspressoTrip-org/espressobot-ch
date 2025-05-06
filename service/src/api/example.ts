import * as types from '@journeyapps-platform/types-PROJECT_NAME';
import { System } from '../system/index.js';
import * as bson from 'bson';

export const createResource = (system: System, params: types.ExampleDocument): types.ExampleDocumentResource => {
  return {
    _id: new bson.ObjectId(),
    title: params.title,
    created_at: new Date(),
    updated_at: new Date()
  };
};
