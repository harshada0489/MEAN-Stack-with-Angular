var Circle = /** @class */ (function () {
    function Circle(r) {
        this.Radius = r;
        this.PI = 3.14;
    }
    Circle.prototype.CircleArea = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var object1 = new Circle(3);
var object2 = new Circle(5);
var Ret = 0;
Ret = object1.CircleArea();
console.log("Area of Circle object1 : " + Ret);
Ret = object2.CircleArea();
console.log("Area of Circle object2 : " + Ret);
