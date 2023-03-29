class Circle
{
    Radius : number;
    PI : number;

    constructor(r : number)
    {
        this.Radius = r;
        this.PI = 3.14;
    }

    CircleArea() : number
    {
        let Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    }
}

var object1 = new Circle(3);
var object2 = new Circle(5);

var Ret : number = 0;

Ret = object1.CircleArea();
console.log("Area of Circle object1 : " + Ret);

Ret = object2.CircleArea();
console.log("Area of Circle object2 : " + Ret);