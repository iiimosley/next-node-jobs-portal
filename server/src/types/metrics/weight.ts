import { Point } from "./point";

export type Weight<T> = {
  [key in keyof T]: Point;
};
