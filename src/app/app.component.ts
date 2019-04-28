// tslint:disable:quotemark
import { Component, OnInit } from "@angular/core";
import * as p5 from "p5";
import { Bird } from "./bird";
import { Pipe } from "./pipe";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "flappy-tf";
  private p5;

  pipeSpeed = 2;

  constructor() {
  }

  ngOnInit() {
    this.createCanvas();
  }

  private createCanvas = () => {
    this.p5 = new p5(this.drawing);
  }

  private drawing = function(p: any) {
    const bird = new Bird();
    const pipe = new Pipe();
    const width = 800;
    const height = 600;
    p.setup = () => {
      p.createCanvas(800, 600);
      p.background(51);
    };

    p.draw = () => {
      bird.show(p, width, height);
      pipe.show(p, width, height);
    };
  };
}
