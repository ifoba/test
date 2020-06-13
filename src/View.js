import Field from "./Field";
import Fence from "./Fence";
import Car from "./Car";
import Enemy from "./Enemy";
class View {
    constructor(model) {
        this.field = new Field();
        this.fence = new Fence(model);
        this.car = new Car(model);
        this.enemy = new Enemy(model);
    }
    draw() {
        this.field.drawField();
        this.fence.drawFence(model.roadY);
        this.car.drawCar(model.carPosition);
        this.enemy.drawEnemy(model.firstEnemy)
    }
}
