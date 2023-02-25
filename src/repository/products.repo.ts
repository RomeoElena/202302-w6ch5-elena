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
  write(data: Product): Promise<string>;
}

export class ProductsRepo {
  read() {
    return fs
      .readFile(file, { encoding: 'utf-8' })
      .then((data) => JSON.parse(data) as Product[]);
  }

  async write(data: Product) {
    const data = await fs.readFile(file, { encoding: 'utf-8' });
    const dataParsed: Product[] = JSON.parse(data);
    const finalData = JSON.stringify([...dataParsed, data]);
    await fs.writeFile(file, finalData, { encoding: 'utf-8' });
    return 'Writed';
  }
}
