import Field from "./Field";
import Fence from "./Fence";
import Car from "./Car";
import Enemy from "./Enemy";
import StatusBar from "./component/StatusBar";
export default class View {
    constructor(model) {
        this.model = model;
        this.statusBar = new StatusBar(model);
        this.field = new Field();
        this.fence = new Fence(model);
        this.car = new Car(model);
        this.enemy = new Enemy(model);
        this.ctx = document.getElementById('can').getContext('2d');
    }
    draw() {
        this.ctx.clearRect(0, 0, 320, 400);
        this.field.drawField();
        this.fence.drawFence(this.model.roadY);
        this.statusBar.drawBar(this.model.score, this.model.highScore, this.model.life);
        this.car.drawCar(this.model.carPosition);
        this.enemy.drawEnemy(this.model.firstEnemy.x, this.model.firstEnemy.y);
        this.enemy.drawEnemy(this.model.secondEnemy.x, this.model.secondEnemy.y)
        this.enemy.drawEnemy(this.model.thirdEnemy.x, this.model.thirdEnemy.y);
    }
    drawStartPage() {
        this.ctx.lineWidth = "2";
        this.ctx.font = '40px Arial';
        this.ctx.fillText('Start', 115, 200);
    }
}
