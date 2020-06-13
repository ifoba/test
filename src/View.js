import data from './data';
export default class View {
    constructor(){
        this.roadLeftX = data.roadLeftX
        this.roadRightX = data.roadRightX
        this.roadY = data.roadY
        this.canvas = document.querySelector('can')
        this.ctx = this.canvas.getContext('2d')
        this.car = data.car
    }
    drawBlock(x, y) {
        this.ctx.strokeStyle = '#000000'
        this.ctx.rect(x, y, 20, 20);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.rect(x + 5 , y + 5, 10, 10);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.fillStyle = '#000000'
        this.ctx.fill();
    }
    drawHideBlock(x, y) {
        this.ctx.lineWidth = "2";
        this.ctx.strokeStyle = '#0000000a';
        this.ctx.rect(x, y, 20, 20);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.rect(x + 5 , y + 5, 10, 10);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.fillStyle = '#0000000a';
        this.ctx.fill();
    }
    drawField() {
        for(let x = 0; x < 200; x +=20){
            for (let y = 0; y < this.canvas.height; y +=20){
                this.drawHideBlock(x, y)
            }
        }
    }
    drawRoad() {
        for (let i = -80; i < this.canvas.height + 80; i += 20){
            if(i % 80 === 0){
                let pos = 0;
                for (let z = 0; z < 3; z += 1){
                    this.drawBlock(this.roadLeftX, this.roadY + pos + i)
                    this.drawBlock(this.roadRightX , this.roadY + pos + i)
                    pos += 20;
                }
            }
        }
    }
    drawCar(carPosition) {
        if(carPosition === 'left'){
            this.car.forEach(el=>{
                this.drawBlock(el.x, el.y)
            })
        }else{
            this.car.forEach(el=>{
                this.drawBlock(el.x + 60, el.y)
            })
        }
    }
    enemyCar(x, y) {
        if(x >= 0.5){
            this.car.forEach(el=>{
                this.drawBlock(el.x, el.y - y)
            })
        }else {
            this.car.forEach(el=>{
                this.drawBlock(el.x + 60, el.y - y)
            })
        } 
    }
    drawEnemyCar() {
        enemyCar(first.x, first.y);
        enemyCar(second.x, second.y);
        enemyCar(third.x, third.y);
        (first.y === -120) ? (first.y = 400, first.x = Math.random()) : first.y -= 20;
        (second.y === -120) ? (second.y = 400, second.x = Math.random()) : second.y -= 20;
        (third.y === -120) ? (third.y = 400, third.x = Math.random()) : third.y -= 20;
        
    }
    drawLife() {
        for (let i = 0; i < 100; i += 20) {
            drawBlock(210 + i, 170)
        }
    }

}