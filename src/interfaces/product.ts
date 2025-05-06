export interface Product {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  isFavorite: boolean;
}

export interface NewProduct {
  imgUrl: string;
  title: string;
  description: string;
}
