import * as cardinal_permissions_manager from '@journeyapps-platform/cardinal-permissions-manager';
import { InterServiceClient } from '@journeyapps-platform/sdk-inter-service';
import * as sdk from '@journeyapps-platform/sdk-common';
import * as micro from '@journeyapps-platform/micro';
import type { ENV } from '../env.js';

export class System extends micro.system.MicroSystem {
  cardinal: cardinal_permissions_manager.CardinalPermissionsManager;

  constructor(env: ENV) {
    super();

    const inter_service = new InterServiceClient({
      client_id: env.ACCOUNTS_CLIENT_ID,
      client_secret: env.ACCOUNTS_CLIENT_SECRET,
      endpoint: env.ACCOUNTS_ENDPOINT,
      DEV_MODE_DO_NOT_ENABLE_IN_PRODUCTION_OR_YOU_WILL_BE_FIRED:
        env.DEV_MODE_DO_NOT_ENABLE_IN_PRODUCTION_OR_YOU_WILL_BE_FIRED
    });
    this.cardinal = new cardinal_permissions_manager.CardinalPermissionsManager({
      endpoint: env.CARDINAL_ENDPOINT,
      client: sdk.createNodeNetworkClient({
        headers: async () => {
          const token = await inter_service.getInterServiceToken();
          return {
            Authorization: `Bearer ${token}`
          };
        }
      })
    });
  }

  static fromENV(env: ENV) {
    return new System(env);
  }
}
