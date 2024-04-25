import {User} from "./User";

export interface Category{
  id: number,
  name: string
}

export interface Car{
  id: number,
  brand: string,
  model: string,
  year: number,
  color: string,
  category: Category[],
  description: string,
  price: number,
  image: string,
  liked: boolean,
  user: User[]
}


export interface Dealer {
  address: string,
  city: string,
  description: string,
  id: number,
  img: string,
  name: string,
  phone_number:string;
}
export interface DealerCar{
  id: number,
  brand: string;
  model: string;
  year: number;
  color: string;
  description: string;
  price: number;
  imgURL: string;
  liked: boolean;
  dealer: Dealer;
}



