import Block from "./Block";

export default class TransparentBlock {
    constructor(){
        this.block = new Block('#0000000a');
        this.canvas = this.block.canvas;
        this.size = this.block.sizeBlock;
    }

    drawBlock(x, y) {
        this.block.drawBlock(x, y);
    }
}