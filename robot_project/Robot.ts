const enum point{
    x = 0,
    y = 0
}
interface RobotInterface{
   turnOn():void;
   turnOff():void;
   goLeft():void;
   goRight():void;
   goUp():void;
   goDown():void;
}

class Robot implements RobotInterface{
    private x:number = point.x;
    private y:number = point.y;
    private power:boolean = false;
    constructor(){
        this.x = 0;
        this.y = 0;
    }
    turnOn(): void {
        this.power = true;
        console.log("The robot on");
    }
    turnOff(): void {
        this.power = false;
        console.log("The robot off");
    }
    goLeft(): void {
        if(this.power){
            this.x--;
            console.log(`The robot position is x:${this.x},y:${this.y}`);
        }
        else{
            console.log("The robot off");
        }
    }
    goRight(): void {
        if(this.power){
            this.x++;
            console.log(`The robot position is x:${this.x},y:${this.y}`);
        }
        else{
            console.log("The robot off");
        }
    }
    goUp(): void {
        if(this.power){
            this.y++;
            console.log(`The robot position is x:${this.x},y:${this.y}`);
        }
        else{
            console.log("The robot off");
        }
    }
    goDown(): void {
        if(this.power){
            this.y--;
            console.log(`The robot position is x:${this.x},y:${this.y}`);
        }
        else{
            console.log("The robot off");
        }
    }
}

export default Robot;
