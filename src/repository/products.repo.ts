import fs from 'fs/promises';

const file = './data/products.json';

export type Product = {
  id: number;
  product: string;
  price: number;
  category: string;
};

export interface ProductsRepoStructure {
  read(): Promise<Product[]>;
}

export class ProductsRepo {
  read() {
    return fs
      .readFile(file, { encoding: 'utf-8' })
      .then((data) => JSON.parse(data) as Product[]);
  }
}
