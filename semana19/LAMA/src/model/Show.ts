import { InvalidParameterError } from "../errors/InvalidParameterError";

export class Show {
  constructor(
    private id: string,
    private week_day: WeekDay,
    private start_time: number,
    private end_time: number,
    private band_id: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getWeekDay(): WeekDay {
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

export const weekDayFormat = (day: string) : string => {
  if (day.toUpperCase() === "SEXTA-FEIRA") {
    return "SEXTA";
  } else if (day.toUpperCase() === "SÁBADO") {
    return "SABADO";
  } else {
    return day.toUpperCase();
  }
};

export const stringToWeekDay = (weekDay : string) : WeekDay => {
  switch(weekDay) {
    case "SEXTA":
      return WeekDay.SEXTA;
    case "SABADO":
      return WeekDay.SABADO;
    case "DOMINGO":
      return WeekDay.DOMINGO;
    default:
      throw new InvalidParameterError("Este dia é inválido para apresentações")
  }
}

export enum WeekDay {
  SEXTA = "SEXTA",
  SABADO = "SABADO",
  DOMINGO = "DOMINGO"
}

export interface ShowInput {
  weekDay: string,
  startTime: number,
  endTime: number,
  bandId: string
}