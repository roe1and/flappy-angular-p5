// tslint:disable:quotemark
import * as p5 from "p5";

export class Pipe {
  private p5;

  show(p: p5, w: number, h: number) {
    p.fill(222, 12, 56);
    p.rect(110, 100, 150, 100);
  }
}
