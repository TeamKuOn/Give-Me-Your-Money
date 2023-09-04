import * as p5 from 'p5';

class CenterMeter {
    private p: p5;
    private position: p5.Vector; // 位置座標の変数
    private size: number;
    private mainColor: p5.Color;
    private subColor: p5.Color;
    private l_o_Color: p5.Color;
    private r_o_Color: p5.Color;
    private l_i_Color: p5.Color;
    private r_i_Color: p5.Color;
    private l_physics: string;
    private l_subphysics: string;
    private r_physics: string;
    private r_subphysics: string;
    private unit: string;
    private o_limits: number;
    private i_limits: number;

    constructor(p: p5, size: number, l_physics: string, l_subphysics: string, r_physics: string, r_subphysics: string, unit: string, o_limits: number, i_limits: number){
        this.p = p;
        this.position = p.createVector(1920 / 2, 1080 / 2); // 位置座標をベクトルとして初期化
        this.size = size;
        this.l_physics = l_physics;
        this.l_subphysics = l_subphysics;
        this.r_physics = r_physics;
        this.r_subphysics = r_subphysics;
        this.unit = unit;
        this.o_limits = o_limits;
        this.i_limits = i_limits;
        this.mainColor = p.color(255);
        this.subColor = p.color(130);
        this.l_o_Color = p.color(255, 190, 0);
        this.r_o_Color = p.color(0, 60, 255);
        this.l_i_Color = p.color(255, 110, 50);
        this.r_i_Color = p.color(0, 190, 200);
    }

    cmeter_bg(){
        this.p.fill(this.mainColor);
        this.p.noStroke();
        this.p.text(this.l_physics, this.position.x - this.size / 8, this.position.y - this.size / 3.5);
        this.p.textSize(40);
        this.p.text(this.l_subphysics, 310, 900);
        this.p.text(this.r_subphysics, 1610, 900);

        //
        this.p.stroke(this.mainColor);
        this.p.strokeWeight(10);
        this.p.strokeCap(this.p.SQUARE); // 丸みをなくす
        this.p.noFill();
        this.p.arc(this.position.x, this.position.y, this.size, this.size, this.p.radians(-200), this.p.radians(-90), this.p.PIE);
        this.p.arc(this.position.x, this.position.y, this.size, this.size, this.p.radians(-90), this.p.radians(20), this.p.PIE);

        
        this.p.fill(0);
        this.p.noStroke();
        this.p.circle(this.position.x, this.position.y, this.size / 5 * 4);
        

        this.p.fill(this.subColor);
        this.p.textSize(this.size * 0.05);
        this.p.text(this.l_physics, this.position.x - this.size / 8, this.position.y - this.size / 3.5);
        this.p.text(this.r_physics , this.position.x + this.size / 8, this.position.y - this.size / 3.5);

        this.p.textSize(this.size * 0.09);
        this.p.text(this.unit, this.position.x, this.position.y + this.size / 5);

        this.p.fill(this.p.color("red"))
        this.p.textSize(this.size * 0.07);
        this.p.text(this.o_limits / 1000 + "k", this.position.x, this.position.y - this.size / 1.8);

        this.p.fill(this.p.color("green"))
        this.p.textSize(this.size * 0.07);
        this.p.text(this.i_limits / 1000 + "k", this.position.x, this.position.y - this.size / 2.8);
    }

    cneedle(l_values: number, r_values: number){
        //値
        this.p.textAlign(this.p.RIGHT, this.p.CENTER);
        this.p.textSize(this.size * 0.14);
        this.p.fill(this.l_o_Color);
        this.p.text(l_values, this.position.x - this.size / 60, this.position.y - this.size / 18);
        this.p.fill(this.r_o_Color);
        this.p.text(r_values, this.position.x + this.size / 2.7, this.position.y - this.size / 18);

        //指針
        this.p.strokeWeight(75);
        this.p.strokeCap(this.p.SQUARE); // 丸みをなくす
        this.p.noFill();
        this.p.stroke(this.l_o_Color);
        this.p.arc(this.position.x - this.size / 155, this.position.y - this.size / 300, this.size / 1.131, this.size / 1.127, this.p.radians(-200), this.p.radians(-200 + (this.p.constrain(l_values, 0, 7000) * 110 / this.o_limits)));
        this.p.stroke(this.r_o_Color);
        this.p.arc(this.position.x + this.size / 155, this.position.y - this.size / 300, this.size / 1.133, this.size / 1.127, this.p.radians(20 - (this.p.constrain(r_values, 0, 7000) * 110 / this.o_limits)), this.p.radians(20));
        this.p.strokeWeight(25);
        this.p.stroke(this.l_i_Color);
        this.p.arc(this.position.x - this.size / 155, this.position.y - this.size / 300, this.size / 1.217, this.size / 1.215, this.p.radians(-200), this.p.radians(-200 + (this.p.constrain(l_values, 0, 1000) * 110 / this.i_limits)));
        this.p.stroke(this.r_i_Color);
        this.p.arc(this.position.x + this.size / 155, this.position.y - this.size / 300, this.size / 1.217, this.size / 1.215, this.p.radians(20 - (this.p.constrain(r_values, 0, 1000) * 110 / this.i_limits)), this.p.radians(20));
    }
}

export default CenterMeter;
