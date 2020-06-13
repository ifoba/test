let canvas = document.getElementById('can');
let ctx = canvas.getContext('2d');

let roadLeftX = 0;
let roadRightX = 180;
let roadY = 0;
let car = [
    {
        x: 40,
        y: canvas.height - 20 
    },
    {
        x: 80,
        y: canvas.height - 20 
    },
    {
        x: 60,
        y: canvas.height - 40
    },
    {
        x: 40,
        y: canvas.height - 60
    },
    {
        x: 60,
        y: canvas.height - 60
    },
    {
        x: 80,
        y: canvas.height - 60
    },
    {
        x: 60,
        y: canvas.height - 80
    },
]
let carPosition = 'right';
let [first, second, third] = [{x:0, y:400}, {x:1, y:580}, {x:0, y:760}]
let highScore = +localStorage.getItem('score');
let score = 0;
ctx.lineWidth = "5";
ctx.rect(0, 0, 200, canvas.height);
ctx.stroke();
ctx.lineWidth = "2";
ctx.font = '20px Arial';
ctx.fillText('Score', 235, 20);
ctx.fillText(score, 258, 45);
ctx.fillText('High Score', 210, 80);
ctx.fillText(highScore, 255, 110);
ctx.fillText('Life', 245, 155);


function drawBlock(x, y) {
    ctx.strokeStyle = '#000000'
    ctx.rect(x, y, 20, 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(x + 5 , y + 5, 10, 10);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = '#000000'
    ctx.fill();
}

function drawHideBlock(x, y) {
    ctx.lineWidth = "2";
    ctx.strokeStyle = '#0000000a';
    ctx.rect(x, y, 20, 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(x + 5 , y + 5, 10, 10);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = '#0000000a';
    ctx.fill();
}

function drawField() {
    for(let x = 0; x < 200; x +=20){
        for (let y = 0; y < canvas.height; y +=20){
            drawHideBlock(x, y)
        }
    }
}

function drawRoad() {
    for (let i = -80; i < canvas.height + 80; i += 20){
        if(i % 80 === 0){
            let pos = 0;
            for (let z = 0; z < 3; z += 1){
                drawBlock(roadLeftX, roadY + pos + i)
                drawBlock(roadRightX, roadY + pos + i)
                pos += 20;
            }
        }
    }
}

function drawCar() {
    if(carPosition === 'left'){
        car.forEach(el=>{
            drawBlock(el.x, el.y)
        })
    }else{
        car.forEach(el=>{
            drawBlock(el.x + 60, el.y)
        })
    }
}

function enemyCar(x, y) {
    if(x >= 0.5){
        car.forEach(el=>{
            drawBlock(el.x, el.y - y)
        })
    }else {
        car.forEach(el=>{
            drawBlock(el.x + 60, el.y - y)
        })
    } 
}

function drawEnemyCar() {
    enemyCar(first.x, first.y);
    enemyCar(second.x, second.y);
    enemyCar(third.x, third.y);
    (first.y === -120) ? (first.y = 400, first.x = Math.random()) : first.y -= 20;
    (second.y === -120) ? (second.y = 400, second.x = Math.random()) : second.y -= 20;
    (third.y === -120) ? (third.y = 400, third.x = Math.random()) : third.y -= 20;
    
}
function drawLife() {
    for (let i = 0; i < 100; i += 20) {
        drawBlock(210 + i, 170)
    }
}
drawLife();

function draw() {
    ctx.clearRect(0, 0, 200, canvas.height);
    drawField();
    drawCar();
    drawEnemyCar();
    drawRoad();
    (roadY === 60) ? roadY = 0 : roadY +=20;
    score += 5;
    ctx.clearRect(220, 20, 100, 25);
    (score > 999) ? ctx.fillText(score, 240, 45):
    (score > 99) ? ctx.fillText(score, 245, 45):
    (score > 9) ? ctx.fillText(score, 250, 45):
    ctx.fillText(score, 258, 45);
}
let timer = 500;
/* let speed = setInterval(draw, 500) */
let speed = setTimeout(function speedUp() {
    timer -= 2;
    draw()
    speed = setTimeout(speedUp, timer);
}, 500)




document.addEventListener('keydown', (e) => {
    if(e.code === 'ArrowRight') { 
        carPosition = "right";
        document.querySelector('.right').classList.add('press');
    }
    if(e.code === 'ArrowLeft') { 
        carPosition = "left";
        document.querySelector('.left').classList.add('press');
    } 
    if(e.code === 'Space') { 
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
        document.querySelector('.big-btn').classList.remove('press');
    } 
})