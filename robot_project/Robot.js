"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Robot = /** @class */ (function () {
    function Robot() {
        this.x = 0 /* point.x */;
        this.y = 0 /* point.y */;
        this.power = false;
        this.x = 0;
        this.y = 0;
    }
    Robot.prototype.turnOn = function () {
        this.power = true;
        console.log("The robot on");
    };
    Robot.prototype.turnOff = function () {
        this.power = false;
        console.log("The robot off");
    };
    Robot.prototype.goLeft = function () {
        if (this.power) {
            this.x--;
            console.log("The robot position is x:".concat(this.x, ",y:").concat(this.y));
        }
        else {
            console.log("The robot off");
        }
    };
    Robot.prototype.goRight = function () {
        if (this.power) {
            this.x++;
            console.log("The robot position is x:".concat(this.x, ",y:").concat(this.y));
        }
        else {
            console.log("The robot off");
        }
    };
    Robot.prototype.goUp = function () {
        if (this.power) {
            this.y++;
            console.log("The robot position is x:".concat(this.x, ",y:").concat(this.y));
        }
        else {
            console.log("The robot off");
        }
    };
    Robot.prototype.goDown = function () {
        if (this.power) {
            this.y--;
            console.log("The robot position is x:".concat(this.x, ",y:").concat(this.y));
        }
        else {
            console.log("The robot off");
        }
    };
    return Robot;
}());
exports.default = Robot;
