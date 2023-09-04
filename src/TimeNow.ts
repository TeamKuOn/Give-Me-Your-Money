import * as p5 from 'p5';

class TimeNow {
    private p: p5;
    private position: p5.Vector; // 位置座標の変数
    private size: number;
    private textColor: p5.Color;

    constructor(p: p5, x: number, y: number, size: number){
        this.p = p;
        this.position = p.createVector(x, y); // 位置座標をベクトルとして初期化
        this.size = size;
        this.textColor = p.color(255);
    }

    clock(){
        this.p.textAlign(this.p.CENTER, this.p.CENTER);

        // Get current time
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

         // Format time string
        const timeString = `${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)} JST`;

        // Draw time text
        this.p.fill(this.textColor);
        this.p.noStroke();
        this.p.textSize(this.size * 0.6);
        this.p.text(timeString, this.position.x, this.position.y); // 位置座標を使用して時計を描画

    }

    private formatTime(time: number): string {
        return time.toString().padStart(2, '0');
    }
}

export default TimeNow;
