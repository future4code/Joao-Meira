import { Dish } from "./dish";

export class Dessert extends Dish{
    slices: number;

    constructor(
        price: number,
        cost: number,
        ingredients: string[],
        time: number,
        slices: number
    ) {
        super(price, cost, ingredients, time);
        this.slices = slices;
    }

    getValorPorPedaco(): number{
        return this.price/this.slices;
    }
  
    getProfit(): number{
        return super.getProfit()/this.slices;
    }

    getDishProfit():number{
        return super.getProfit();
    }
}

