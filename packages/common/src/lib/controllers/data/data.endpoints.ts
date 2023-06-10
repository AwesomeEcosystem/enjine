import { Document } from '../../models/document.model';

export async function endpoints(context: any) {

  const { router, database } = context;

  router.get('/', async (req: any, res: any) => {
    try {
      const data: any = await database.all()
      res.send(data)
    } catch (err) {
      res.send(new Error(err))
    }
  });

  router.post('/', async (req: any, res: any) => {
    const doc: any = new Document('data', req.auth.ticket.user, req.body.data) // TODO ==??
    try {
      const data: any = await database.post(doc)
      res.send(data)
    } catch (err) {
      res.send(new Error(err))
    }
  });

  router.put('/', async (req: any, res: any) => {
    try {
      const data: any = await database.put(req.body.data._id, req.body.data)  // TODO updated Author
      res.send(data)
    } catch (err) {
      res.send(new Error(err))
    }
  });

  router.get('/:id', async (req: any, res: any) => {
    try {
      const data: any = await database.get(req.body.data._id)
      res.send(data)
    } catch (err) {
      res.send(new Error(err))
    }
  });

  router.get('/find', async (req: any, res: any) => {
    try {
      const data: any = await database.find(req.body.data.fn)
      res.send(data)
    } catch (err) {
      res.send(new Error(err))
    }
  });

  router.get('/filter', async (req: any, res: any) => {
    try {
      const data: any = await database.filter(req.body.data.fn)
      res.send(data)
    } catch (err) {
      res.send(new Error(err))
    }
  });

  router.delete('/:id', async (req: any, res: any) => {
    try {
      const data: any = await database.remove(req.body.data._id)
      res.send(data)
    } catch (err) {
      res.send(new Error(err))
    }
  });
}
