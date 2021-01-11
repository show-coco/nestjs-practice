import { Injectable } from '@nestjs/common';
import { Item, PublicItem } from './items/models/item.model';

const items: Item[] = [
  {
    id: 1,
    title: 'Item title',
    body: 'Hello, World',
    deletePassword: '1234',
  },
  {
    id: 2,
    title: 'Item title',
    body: 'Hello, World',
    deletePassword: '1234',
  },
];

@Injectable()
export class AppService {
  getAllItems(): Item[] {
    return [...items];
  }

  getPublicItems(): PublicItem[] {
    return this.getAllItems().map((item) => {
      const publicItem = { ...item };
      delete publicItem.deletePassword;
      return publicItem;
    });
  }
}
