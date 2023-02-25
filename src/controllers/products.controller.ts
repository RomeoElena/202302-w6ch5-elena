import { Request, Response } from 'express';
import { ProductsRepo } from '../repository/products.repo.js';

export class ProductsController {
  // eslint-disable-next-line no-unused-vars, no-useless-constructor
  constructor(public repo: ProductsRepo) {}

  getAll(_req: Request, resp: Response) {
    this.repo.read().then((data) => resp.json(data));
  }

  get(req: Request, resp: Response) {
    resp.send(req.params.id);
  }

  post(_req: Request, _resp: Response) {}

  patch(_req: Request, _resp: Response) {}

  delete(_req: Request, _resp: Response) {}
}
