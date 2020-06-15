import Model from "./Model";
import View from "./View";

export default class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View (this.model)
        this.music = new Audio('./tetris.mp3');
        this.audioCrash = new Audio('./crash.mp3')
    }
    start() { 
        this.music.volume = 0.2;
        this.audioCrash.volume = 0.2;
        this.music.addEventListener('ended', ()=>{
            this.music.play();
        })
        this.view.drawStartPage();
        document.getElementById('start').addEventListener('click', () => {
            this.music.play(); 
            this.run()
            document.getElementById('start').classList.add('on')
        })
    }
    run() {  
        this.speedUp(); 
        this.game = setInterval(() => {
            this.speedUp();
        }, 1000)
        this.model.speed = 990;
        this.saveSpeed = 990;
        let press = false;
        document.addEventListener('keydown', (e) => {
            if(e.code === 'ArrowRight') { 
                this.model.carPosition = 0;
                document.querySelector('.right').classList.add('press');
            }
            if(e.code === 'ArrowLeft') { 
                this.model.carPosition = 1;
                document.querySelector('.left').classList.add('press');
            } 
            if(e.code === 'ArrowUp') {
                this.music.volume += 0.1;
                this.audioCrash.volume += 0.1;
            }
            if(e.code === 'ArrowDown') {
                this.music.volume -= 0.1;
                this.audioCrash.volume -= 0.1;
            }
        });
        document.addEventListener('keypress', (e) => {
            if(e.code === 'Space' && press === false) { 
                press = true;
                this.saveSpeed = this.model.speed;
                this.model.speed = 50;
                this.speedUp()
                document.querySelector('.big-btn').classList.add('press');
            } 
        })
        document.addEventListener('keyup', (e) => {
            if(e.code === 'ArrowRight') { 
                document.querySelector('.right').classList.remove('press');
            }
            if(e.code === 'ArrowLeft') { 
                document.querySelector('.left').classList.remove('press');
            } 
            if(e.code === 'Space') {
                press = false;
                clearInterval(this.interval);
                this.model.speed = this.saveSpeed;
                this.speedUp();
                document.querySelector('.big-btn').classList.remove('press');
            } 
        });
    }
    speedUp () {
        if (this.interval) {
            clearInterval(this.interval);
        }
        if(this.model.speed > 50) {
            this.model.speed -= 20;
        }
        this.interval = setInterval(() => {            
            this.view.draw();
            this.model.changeData();
            this.crash();        
        }, this.model.speed);
    }

    crash() {
        if(this.model.firstEnemy.y < 60 && this.model.firstEnemy.y >= -80 && this.model.carPosition === this.model.firstEnemy.x){
            this.audioCrash.play();
            this.model.loseLife();
        }
        if(this.model.secondEnemy.y < 60 && this.model.secondEnemy.y >= -80 && this.model.carPosition === this.model.secondEnemy.x){
            this.audioCrash.play();
            this.model.loseLife();
        }
        if(this.model.thirdEnemy.y < 60 && this.model.thirdEnemy.y >= -80 && this.model.carPosition === this.model.thirdEnemy.x){
            this.audioCrash.play();
            this.model.loseLife();
        }
        if(this.model.life === 0) {
            clearInterval(this.game);
            clearInterval(this.interval);

            this.model.newGame();            
            this.game = setInterval(() => {
                this.speedUp();
            }, 1000)
        }
    }
}