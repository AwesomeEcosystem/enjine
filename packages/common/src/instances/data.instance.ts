import { Instance } from '@enjine/core';
import { DataGateway } from '../gateways/data/data.gateway';
import { DataController } from '../controllers/data/data.controller';

export class DataInstance extends Instance {
  constructor(config: any) { // TODO Interface

    super({
      controller: [
        new DataController({ name: `/${config.name || ''}`, db: config.db})
      ],
      gateway: [
        new DataGateway({ name: config.name || '', db: config.db})
      ]
    });

    this.name = config.name || ''
  }
}
