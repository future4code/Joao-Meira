export class Dish {

    static ORDERS_QUANTITY = 0;
    
    protected price: number;
    protected cost: number;
    protected ingredients: string[];
    protected time: number;

    constructor(
        price: number,
        cost: number,
        ingredients: string[],
        time: number,
    ) {
        console.log("contruindo a refeição");
        this.price = price;
        this.cost = cost;
        this.ingredients = ingredients;
        this.time = time;
        Dish.ORDERS_QUANTITY +=1;
    }

    getProfit(): number{
        return this.price - this.cost;
    }

    getPrice(): number{
        return this.price;
    }

}
