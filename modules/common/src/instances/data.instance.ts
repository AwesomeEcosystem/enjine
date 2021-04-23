import { Instance } from '@enjine/core';
import { DataGateway } from '../gateways/data/data.gateway';
import { DataController } from '../controllers/data/data.controller';

export class DataInstance extends Instance {
  constructor(config: any) { // TODO INterface

    super({
      controller: [
        new DataController(`/${config.name || ''}`, config.db)
      ],
      gateway: [
        new DataGateway(config.name || '', config.db)
      ]
    });

    this.name = config.name || ''
  }
}
