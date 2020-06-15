import Block from "./Block";
import TransparentBlock from "./TransparentBlock";

export default class StatusBar {
    constructor(data) {
        this.block = new Block();
        this.transparentBlock = new TransparentBlock();
        this.score = data.score;
        this.canvas = document.getElementById('can');
        this.ctx = this.canvas.getContext('2d');
    }
    drawLife(life) {
        let posBlock = 0;
        for (let i = 0; i < 5; i += 1){
            this.transparentBlock.drawBlock(210 + posBlock, 170);
            if (i < life) {
                this.block.drawBlock(210 + posBlock, 170);
            }
            posBlock +=20;
        }
    }
    drawBar(score, highScore, life) {
        this.drawLife(life);
        this.ctx.beginPath()
        this.ctx.fillStyle = '#000000'
        this.ctx.rect(0, 0, 200, 400);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.lineWidth = "2";
        this.ctx.font = '20px Arial';
        this.ctx.fillText('Score', 235, 20);
        (score > 999) ? this.ctx.fillText(score, 240, 45):
        (score > 99) ? this.ctx.fillText(score, 245, 45):
        (score > 9) ? this.ctx.fillText(score, 250, 45):
        this.ctx.fillText(score, 258, 45);
        this.ctx.fillText('High Score', 210, 80);
        (highScore > 999) ? this.ctx.fillText(highScore, 240, 110):
        (highScore > 99) ? this.ctx.fillText(highScore, 245, 110):
        (highScore > 9) ? this.ctx.fillText(highScore, 250, 110):
        this.ctx.fillText(highScore, 255, 110);
        this.ctx.fillText('Life', 245, 155);
        
    }
}