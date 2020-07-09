

export class Character {
    constructor(
        private id: string,
        private name: string,
        private anime: string,
        private img_url: string
    ){}
    
    public getId(): string{
        return this.id
    }
    public getName(): string{
        return this.name
    }
    public getAnime(): string{
        return this.anime
    }
    public getImgUrl(): string{
        return this.img_url
    }
}