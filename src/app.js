import View from './View';
import Model from './Model';

const view = new View();
const model = new Model();
view.ctx.lineWidth = "5";
view.ctx.rect(0, 0, 200, canvas.height);
view.ctx.stroke();
view.ctx.lineWidth = "2";
view.ctx.font = '20px Arial';
view.ctx.fillText('Score', 235, 20);
view.ctx.fillText(score, 258, 45);
view.ctx.fillText('High Score', 210, 80);
view.ctx.fillText(highScore, 255, 110);
view.ctx.fillText('Life', 245, 155);
view.drawRoad()