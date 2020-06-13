const data = {
    roadLeftX: 0,
    roadRightX: 180,
    roadY: 0,
    car: [
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
    ],
    carPosition: 'right',
    firstEnemy: {x:0, y:400},
    secondEnemy: {x:1, y:580},
    thirdEnemy: {x:0, y:760},
    score: 0,
    highScore: +localStorage.getItem('score')
};
export default data;