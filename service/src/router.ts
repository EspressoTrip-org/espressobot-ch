import * as micro from '@journeyapps-platform/micro';
import { Context } from './auth/index.js';

export default new micro.express.ExpressRouter<Context>();
