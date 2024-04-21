export interface Category{
  id: number,
  name: string
}

export interface Car{
  id: number,
  brand: string,
  model: string,
  category: number,
  description: string,
  price: number,
  imgURL: string,
  liked: boolean
}


