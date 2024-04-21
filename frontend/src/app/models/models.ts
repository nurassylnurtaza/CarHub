export class Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  description: string;
  imageUrl: string;

  constructor(id: number, make: string, model: string, year: number, price: number, description: string, imageUrl: string) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}
