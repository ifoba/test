import TransparentBlock from "./component/TransparentBlock"


export default class Field {
    constructor(width, height) {
        this.block = new TransparentBlock();
        this.width = (width) ? width : 200;
        this.height = (height) ? height : this.block.canvas.height;
    }

    drawField() {
        for(let x = 0; x < this.width; x += this.block.size){
            for (let y = 0; y < this.height; y += this.block.size){
                this.block.drawBlock(x, y)
            }
        }
    }
}