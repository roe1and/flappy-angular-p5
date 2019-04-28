// tslint:disable:quotemark
import * as p5 from "p5";

export class Pipe {
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
    p.fill(222, 12, 56);
    p.rect(110, 100, 150, 100);
  }
}
