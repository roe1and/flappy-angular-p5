// tslint:disable:quotemark
import * as p5 from "p5";

export class Bird {
  private p5;
  private height;
  private width;

  constructor(
    w: number,
    h: number
  ) {
    this.height = h;
    this.width = w;
  }

  show(p: p5) {
    p.fill(123, 123, 0);
    p.circle(44, this.height / 2, 30);
  }
}
