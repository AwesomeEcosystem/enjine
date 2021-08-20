import { Manager } from '@enjine/database';

export async function endpoints(context: any) {

  const { router, space, database } = context;

  router.on('/upload', async (data: any, callback: any) => {
    // console.log(router.id);
    callback(null, data)
  })

  router.on('/stream', async (data: any, callback: any) => {
    callback(null, data)
  })
}
