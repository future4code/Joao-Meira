
export class Band {
  
  constructor(
    private id: string,
    private name: string,
    private genre: string,
    private leader: string,
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getGenre(): string {
    return this.genre;
  }

  public getLeader(): string {
    return this.leader;
  }

}
