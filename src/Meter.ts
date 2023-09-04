import * as p5 from 'p5';

class Meter {
    private p: p5;
    private position: p5.Vector; // 位置座標の変数
    private size: number;
    private mainColor: p5.Color;
    private subColor: p5.Color;
    private physics: string;
    private unit: string;
    private limits: number;

    constructor(p: p5, x: number, y: number, size: number, physics: string, unit: string, limits: number){
        this.p = p;
        this.position = p.createVector(x, y); // 位置座標をベクトルとして初期化
        this.size = size;
        this.physics = physics;
        this.unit = unit;
        this.limits = limits;
        this.mainColor = p.color(255);
        this.subColor = p.color(130);
    }

    meter_bg(){
        //円弧
        this.p.stroke(this.subColor);
        this.p.strokeWeight(10);
        this.p.strokeCap(this.p.SQUARE); // 丸みをなくす
        this.p.noFill();
        this.p.arc(this.position.x, this.position.y, this.size, this.size, this.p.radians(-200), this.p.radians(20), this.p.PIE);
        
        this.p.fill(0);
        this.p.noStroke();
        this.p.circle(this.position.x, this.position.y, this.size / 5 * 4);

        //物理量
        this.p.fill(this.subColor);
        this.p.textSize(this.size * 0.09);
        this.p.text(this.physics, this.position.x, this.position.y - this.size / 3.5);

        //単位
        this.p.fill(this.subColor);
        this.p.textSize(this.size * 0.09);
        this.p.text(this.unit, this.position.x, this.position.y + this.size / 5);
    }

    needle(values: number){
        //値
        this.p.fill(this.mainColor);
        this.p.textSize(this.size / 6);
        this.p.text(values, this.position.x, this.position.y - this.size / 30);

        //指針
        this.p.stroke(this.mainColor);
        this.p.strokeWeight(10);
        this.p.strokeCap(this.p.SQUARE); // 丸みをなくす
        this.p.noFill();
        this.p.arc(this.position.x, this.position.y, this.size, this.size, this.p.radians(-200), this.p.radians(-200 + (this.p.constrain(values, 0, this.limits) * 220 / this.limits)));

    }
}

export default Meter;
