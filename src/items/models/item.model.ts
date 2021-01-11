export interface Item {
  id: number;
  title: string;
  body: string;
  deletePassword: string;
}

export type PublicItem = Omit<Item, 'deletePassword'>;
