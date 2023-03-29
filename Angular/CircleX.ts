class Circle
{
    Radius : number;
    PI : number;

    constructor(r : number)
    {
        this.Radius = r;
        this.PI = 3.14;
    }

    CircleArea()
    {
        let Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    }
}

class CircleX extends Circle
{
    constructor(r : number)
    {
        super(r);
    }

    Circumference()
    {
        let Ans : number = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    }
}

var obj1 = new CircleX(3);
var obj2 = new CircleX(5);

var Ret :number = 0;

Ret = obj1.CircleArea();
console.log("Area of circle obj1 : " + Ret);

Ret = obj1.Circumference();
console.log("Circumference of circle obj1 : " + Ret);


Ret = obj2.CircleArea();
console.log("Area of circle obj2 : " + Ret);

Ret = obj2.Circumference();
console.log("Circumference of circle obj2 : " + Ret);