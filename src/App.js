const { default: Controller } = require("./Controller");

class App {
    constructor(){
        this.controller = new Controller();
    }
}
new App().controller.start();