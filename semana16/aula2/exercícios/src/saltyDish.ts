import { Dish } from "./dish";

export class saltyDish extends Dish {

    size: SIZE;

    constructor(
        price: number,
        cost: number,
        ingredients: string[],
        time: number,
        size: SIZE
    ) {
        super(price, cost, ingredients, time);
        this.size = size;
    }
}

export enum SIZE{
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    BIG = "BIG"
}