export interface MenuItem {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

export interface Review {
  id: string;
  user: string;
  text: string;
  rating: number;
}

export interface restaurant {
  id: string;
  name: string;
  menu: string[];
  reviews: string[];
}
