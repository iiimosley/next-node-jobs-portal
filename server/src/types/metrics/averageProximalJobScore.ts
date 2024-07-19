import { AverageJobScore } from "./averageJobScore";

export interface AverageProximalJobScore extends AverageJobScore {
  proximity: number;
}