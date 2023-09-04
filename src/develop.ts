import * as p5 from 'p5';

class develop {
    private p: p5;
    private position: p5.Vector; // 位置座標の変数
    private size: number;
    private textColor: p5.Color;

    constructor(p: p5){
        this.p = p;
        this.textColor = p.color(255);
    }

    frame(){
        this.p.fill(this.textColor);
        this.p.textSize(40);
        this.p.text(this.p.frameRate(), 1500, 1030);
    }
}

export default develop;
