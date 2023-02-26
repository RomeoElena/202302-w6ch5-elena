import { response } from 'express';
import fs from 'fs/promises';
import { Product } from '../models/products';

const file = './data/products.json';

export class ProductsFileRepo {
  read(): Promise<Product[]> {
    return fs
      .readFile(file, { encoding: 'utf-8' })
      .then((data) => JSON.parse(data));
  }

  readById(id: Product['id']): Promise<Product | undefined> {
    if (!id) response.send('<p>Error product not found</p>');

    const product = fs.readFile(file, { encoding: 'utf-8' }).then((data) => {
      const got = JSON.parse(data) as Product[];
      const get = got.find((item) => item.id === id);
      return get;
    });
    return product;
  }

  write(body: Product): Promise<Product[]> {
    const data = fs.readFile(file, { encoding: 'utf-8' }).then((data) => {
      const got = JSON.parse(data) as Product[];
      const update = [...got, body];
      fs.writeFile(file, JSON.stringify(update));
      return update;
    });

    return data;
  }

  async update(id: number, newData: any) {
    const data = await fs.readFile(file, { encoding: 'utf-8' });
    const getJSON = JSON.parse(data);
    const updateData = getJSON.map((item: { id: number }) => {
      if (item.id === id) {
        return { ...item, ...newData };
      }

      return item;
    });
    const finalFile = JSON.stringify(updateData);
    await fs.writeFile(file, finalFile, 'utf-8');
  }

  delete(id: Product['id']) {
    const data = fs.readFile(file, { encoding: 'utf-8' }).then((data) => {
      const got = JSON.parse(data) as Product[];
      const deleteItem = got.filter((item) => item.id !== id);
      fs.writeFile(file, JSON.stringify(deleteItem));
      return deleteItem;
    });
    return data;
  }
}
