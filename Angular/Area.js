function Area(Radius) {
    var PI = 3.14;
    var circleArea = 0;
    circleArea = PI * Radius * Radius;
    return circleArea;
}
var Ret = 0;
Ret = Area(5);
console.log("Area of a circle is " + Ret);
