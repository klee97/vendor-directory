import express from 'express';
import type { Request, Response } from 'express';
import { AppDataSource } from './data-source.ts';

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(express.json())
  app.get('/', (req: Request, res: Response) => {
    return res.json('Established connection!');
  });
  return app.listen(process.env.PORT);
})