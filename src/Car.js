import Block from "./component/Block"

export default class Car {
    constructor(data) {
        this.block = new Block();
        this.car = data.car;
    }
    drawCar(carPosition) {
        const carWidth = 60;
        if(carPosition === 'left'){
            this.car.forEach(el=>{
                this.block.drawBlock(el.x, el.y);
            });
        }else{
            this.car.forEach(el=>{
                this.block.drawBlock(el.x + car.carWidth, el.y);
            });
        }
    }
}