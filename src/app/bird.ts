// tslint:disable:quotemark
import * as p5 from "p5";

export class Bird {
  private p5;

  show(p: p5, w: number, h: number) {
    p.fill(123, 123, 0);
    p.circle(44, h / 2, 30);
  }
}
