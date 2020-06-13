import Block from "./Block";

export default class TransparentBlock {
    constructor(){
        this.block = new Block();
    }

    drawBlock() {
        this.block('#0000000a');
    }
}