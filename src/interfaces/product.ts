export interface Product {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  isFavorite: boolean;
  userId: number;
}

export interface NewProduct {
  imgUrl: string;
  title: string;
  description: string;
  userId: number;
}
