import { Document } from '../../models/document.model';

export async function endpoints(context: any) {

  const { router, database } = context;

  router.get('/', async (callback: any) => {
    try {
      const res: any = await database.all()
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  });

  router.post('/', async (data: any, callback: any) => {
    const doc: any = new Document('data', req.auth.ticket.user, data) // TODO ==??
    try {
      const res: any = await database.post(doc)
      callback(null, res)
      space.emit('post', doc)
    } catch (err) {
      callback(new Error(err), null)
    }
  });

  router.put('/', async (doc: any, callback: any) => {
    try {
      const res: any = await database.put(doc._id, doc)  // TODO updated Author
      callback(null, res)
      space.emit('update', doc)
    } catch (err) {
      callback(new Error(err), null)
    }
  });

  router.get('/:id', async (id: any, callback: any) => {
    try {
      const res: any = await database.get(id)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  });

  router.get('/find', async (fn: any, callback: any) => {
    try {
      const res: any = await database.find(fn)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  });

  router.get('/filter', async (fn: any, callback: any) => {
    try {
      const res: any = await database.filter(fn)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  });

  router.delete('/:id', async (id: string, callback: any) => {
    try {
      const res: any = await database.remove(id)
      callback(null, res)
      space.emit('remove', id)
    } catch (err) {
      callback(new Error(err), null)
    }
  });
}
