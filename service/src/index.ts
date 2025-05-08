// import '@journeyapps-platform/micro/register';
//
// import * as routes from './routes/index.js';
// import { System } from './system/index.js';
// import Router from './router.js';
// import express from 'express';
// import * as http from 'http';
// import env from './env.js';
//
// const system = new System(env);
//
// const decoders = microx.auth.createDecoders({
//   permissions_manager: system.cardinal,
//   dev: {
//     enabled: env.DEV_MODE_DO_NOT_ENABLE_IN_PRODUCTION_OR_YOU_WILL_BE_FIRED,
//     policies: []
//   },
//   jwt: {
//     issuer_endpoint: env.ACCOUNTS_ENDPOINT,
//     audience: 'journeyapps.com',
//     trusted_actor_policies: []
//   }
// });
//
// const app = express();
// const server = http.createServer(app);
//
// app.use(
//   Router.router({
//     routes: [routes.example, ...micro.router.createProbeRoutes()],
//     contextProvider: async (payload) => {
//       return {
//         system: system,
//         viewer: await microx.auth.createViewer({
//           token: payload.request.header('authorization') || '',
//           decoders
//         })
//       };
//     }
//   })
// );
//
// micro.logger.info('Starting system');
// await system.start();
// micro.logger.info('System started');
//
// await micro.router.startServer(server, env.PORT);
// micro.logger.info(`Server running on port ${env.PORT}`);
// await micro.signals.getSystemProbe().ready();
