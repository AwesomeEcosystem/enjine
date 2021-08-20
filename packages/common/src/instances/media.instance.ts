import { Instance } from '@enjine/core';
import { MediaGateway } from '../gateways/media/media.gateway';
import { MediaController } from '../controllers/media/media.controller';

export class MediaInstance extends Instance {
  constructor(config: any) { // TODO Interface

    super({
      controller: [
        new MediaController({ name: `/${config.name || ''}`, db: config.db})
      ],
      gateway: [
        new MediaGateway({ name: config.name || '', db: config.db})
      ]
    });

    this.name = config.name || ''
  }
}
