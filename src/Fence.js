import Block from "./component/Block";

export default class Fence {
    constructor(data) {
        this.block = new Block();
        this.fenceLength = 3;
        this.roadLeftX = data.roadLeftX;
        this.roadRightX = data.roadRightX;
        this.height = this.block.canvas.height;
        this.delayFence = 80;
    }
    drawFence(roadY) {
        for (let i = -this.delayFence; i < this.height + this.delayFence; i += this.block.sizeBlock){
            if(i % this.delayFence === 0){
                let shift = 0;
                for (let z = 0; z < fenceLength; z += 1){
                    this.block.drawBlock(this.roadLeftX, roadY + shift + i)
                    this.block.drawBlock(this.roadRightX, roadY + shift + i)
                    shift += this.block.sizeBlock;
                }
            }
        }
    }
}