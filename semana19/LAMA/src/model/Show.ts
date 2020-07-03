export class Show {
  constructor(
    private id: string,
    private week_day: string,
    private start_time: number,
    private end_time: number,
    private band_id: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getWeekDay(): string {
    return this.week_day;
  }

  public getStart(): number {
    return this.start_time;
  }

  public getEnd(): number {
    return this.end_time;
  }

  public getBandId(): string {
    return this.band_id;
  }
}
