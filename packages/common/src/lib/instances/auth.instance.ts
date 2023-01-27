// import { Instance } from '@enjine/core';
// import { AuthGateway } from '../gateways/auth/auth.gateway';
// import { AuthController } from '../controllers/auth/auth.controller';
//
// export class AuthInstance extends Instance {
//   constructor(config: any) { // TODO Interface
//
//     super({
//       controller: [
//         new AuthController({ name: `/${config.name || ''}`, db: config.db})
//       ],
//       gateway: [
//         new AuthGateway({ name: config.name || '', db: config.db})
//       ]
//     });
//
//     this.name = config.name || ''
//   }
// }
