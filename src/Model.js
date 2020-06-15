import data from './component/data'
export default class Model {
    constructor() {
        this.data = data;
        this.roadLeftX = data.roadLeftX;
        this.roadRightX = data.roadRightX;
        this.roadY = data.roadY;
        this.car = data.car;
        this.carPosition = data.carPosition;
        this.firstEnemy = data.firstEnemy;
        this.secondEnemy = data.secondEnemy;
        this.thirdEnemy = data.thirdEnemy;
        this.score = data.score;
        this.highScore = data.highScore;
        this.life = data.life;
        this.speed = data.speed;
    }
    changeData() {
        (this.firstEnemy.y === -120) ? (this.firstEnemy.y = 400, this.firstEnemy.x = Math.round(Math.random())) : this.firstEnemy.y -= 20;
        (this.secondEnemy.y === -120) ? (this.secondEnemy.y = 400, this.secondEnemy.x = Math.round(Math.random())) : this.secondEnemy.y -= 20;
        (this.thirdEnemy.y === -120) ? (this.thirdEnemy.y = 400, this.thirdEnemy.x = Math.round(Math.random())) : this.thirdEnemy.y -= 20;
        (this.roadY === 60) ? this.roadY = 0 : this.roadY +=20;
        this.score += 5; 
    }
    loseLife() {
        this.life -= 1;
        (this.carPosition === 0) ? this.carPosition = 1: this.carPosition = 0;
        
    }
    newGame() {
        alert(`Вы набрали  ${this.score} очков`)
         if (localStorage.getItem('score') < this.score )  localStorage.setItem('score', this.score);
        this.roadLeftX = data.roadLeftX;
        this.roadRightX = data.roadRightX;
        this.roadY = data.roadY;
        this.car = data.car;
        this.carPosition = data.carPosition;
        this.firstEnemy = {x:0, y:400}   
        this.secondEnemy = {x:1, y:580};
        this.thirdEnemy =  {x:0, y:760};
        this.score = data.score;
        this.highScore = +localStorage.getItem('score');
        this.life = data.life;
        this.speed = 990;
    }
}