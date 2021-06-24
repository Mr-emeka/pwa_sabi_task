export interface Item {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  location: string;
  stock: number;
}

export interface Items {
  item: Item[];
}
