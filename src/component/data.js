const data = {
    speed: 990,
    roadLeftX: 0,
    roadRightX: 180,
    roadY: 0,
    car: [
        {
            x: 40,
            y: 400 - 20 
        },
        {
            x: 80,
            y: 400 - 20 
        },
        {
            x: 60,
            y: 400 - 40
        },
        {
            x: 40,
            y: 400 - 60
        },
        {
            x: 60,
            y: 400 - 60
        },
        {
            x: 80,
            y: 400 - 60
        },
        {
            x: 60,
            y: 400 - 80
        },
    ],
    carPosition: 0,
    firstEnemy: {x:0, y:400},
    secondEnemy: {x:1, y:580},
    thirdEnemy: {x:0, y:760},
    score: 0,
    highScore: +localStorage.getItem('score'),
    life: 5
    
};
export default data;