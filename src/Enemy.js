import Block from "./component/Block"

export default class Enemy {
    constructor(data){
        this.block = new Block();
        this.car = data.car;
    }
    drawEnemy(x, y) {
        const enemyWidth = 60;
        if(x >= 0.5){
            this.car.forEach(el=>{
                this.block.drawBlock(el.x, el.y - y);
            });
        }else {
            this.car.forEach(el=>{
                this.block.drawBlock(el.x + enemyWidth, el.y - y);
            });
        }
    }
}