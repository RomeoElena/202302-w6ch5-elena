import { Router } from 'express';
import { ProductsController } from '../controllers/products.controller.js';
import { ProductsRepo } from '../repository/products.repo.js';

// eslint-disable-next-line new-cap
export const productsRouter = Router();
const repo = new ProductsRepo();
const controller = new ProductsController(repo);

productsRouter.get('/', controller.getAll.bind(controller));
productsRouter.get('/:id', controller.get.bind(controller));
productsRouter.post('/', controller.post.bind(controller));
productsRouter.patch('/:id', controller.patch.bind(controller));
productsRouter.delete('/:id', controller.delete.bind(controller));
