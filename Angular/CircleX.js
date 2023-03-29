var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(r) {
        return _super.call(this, r) || this;
    }
    CircleX.prototype.Circumference = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    };
    return CircleX;
}(Circle));
var obj1 = new CircleX(3);
var obj2 = new CircleX(5);
var Ret = 0;
Ret = obj1.CircleArea();
console.log("Area of circle obj1 : " + Ret);
Ret = obj1.Circumference();
console.log("Circumference of circle obj1 : " + Ret);
Ret = obj2.CircleArea();
console.log("Area of circle obj2 : " + Ret);
Ret = obj2.Circumference();
console.log("Circumference of circle obj2 : " + Ret);
