import {Car} from "./models";

export const Cars: Car[] = [];
for(let i = 0; i < 100; i++){
  Cars.push(
    {
      id: i + 1,
      model: `model ${i + 1}`,
      brand:`brand ${i + 1}`,
      year: 1952,
      color: 'black',
      category: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur consequatur, eaque',
      price: 150000,
      imgURL: '',
      liked: true
    }
  )
}
