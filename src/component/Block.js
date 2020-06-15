export default class Block {
    constructor(color, size) {
        this.canvas = document.getElementById('can');
        this.ctx = this.canvas.getContext('2d');
        this.sizeBlock = (size) ? size : 20;
        this.contentBlock = this.sizeBlock / 2;
        this.color = (color) ? color : '#000000';
    }

    drawBlock(x, y) {
        this.ctx.strokeStyle = this.color
        this.ctx.lineWidth = "2";
        this.ctx.beginPath()
        this.ctx.rect(x, y, this.sizeBlock, this.sizeBlock);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.rect(x + 5 , y + 5, this.contentBlock, this.contentBlock);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.fillStyle = this.color
        this.ctx.fill();
    }
}