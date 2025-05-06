import * as microx from '@journeyapps-platform/micro-x';
import { System } from '../system/index.js';

export type Context = {
  viewer: microx.auth.Viewer;
  system: System;
};
