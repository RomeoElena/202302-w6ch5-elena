import { Request, Response } from 'express';
import { ProductsFileRepo } from '../repository/products.file.repo.js';

export class ProductsController {
  constructor(public repo: ProductsFileRepo) {
    this.repo = repo;
  }

  getAll(_req: Request, resp: Response) {
    this.repo.read().then((data) => {
      resp.json(data);
    });
  }

  get(req: Request, resp: Response) {
    const id = Number(req.params.id);

    this.repo.readById(id).then((data) => {
      resp.json(data);
    });
  }

  post(req: Request, resp: Response) {
    this.repo.write(req.body).then((data) => {
      resp.json(data);
    });
  }

  patch(req: Request, resp: Response) {
    const id = Number(req.params.id);
    this.repo.update(id, req.body).then((data) => resp.json(data));
  }

  delete(req: Request, resp: Response) {
    const id = Number(req.params.id);
    this.repo.delete(id).then((data) => resp.json(data));
  }
}
