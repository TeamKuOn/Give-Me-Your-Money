import * as p5 from "p5";
import TimeNow from './TimeNow';
import Meter from "./Meter";
import CenterMeter from "./CenterMeter"
import develop from './develop';

const sketch = (p: p5) => {
  let timeNow: TimeNow;
  let speed: Meter;
  let power: CenterMeter;
  let dev: develop;
  const clockSize = 100;

  p.setup = () => {
    const canvas = p.createCanvas(1920, 1080) as p5.Renderer & { canvas: HTMLCanvasElement };

    const textColor = p.color(255);
    const bgColor = p.color(0);
    timeNow = new TimeNow(p, p.width / 2 + 0, p.height / 2 + 450, clockSize);
    speed = new Meter(p, 300, 250, 350, "SPEED", "MH", 150);
    power = new CenterMeter(p, 800, "INPUT", "BATTERY POWER", "OUTPUT", "SOLAR ARRAY POWER", "WH", 7000, 1000);
    dev = new develop(p);

    canvas.elt.style.position = 'fixed'; // キャンバスの位置を固定
    canvas.elt.style.top = '0';
    canvas.elt.style.left = '0';

  };

  p.draw = () => {
    p.background(0);

    p.noFill();
    p.strokeWeight(10);
    p.stroke(255);
    p.bezier(350, 1080, 710, 800, 1210, 800, 1570, 1080);
 
    timeNow.clock();
    speed.meter_bg();
    speed.needle(150);
    power.cmeter_bg();
    power.cneedle(7000, 7000);

    //dev.frame();
  };
};

console.log("Hello p5!");

new p5(sketch);