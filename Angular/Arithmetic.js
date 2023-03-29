var Arithmetic = /** @class */ (function () {
    function Arithmetic(i, j) {
        this.Number1 = i;
        this.Number2 = j;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.Number1 + this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Subtraction = function () {
        var Ans = 0;
        Ans = this.Number1 - this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Ans = 0;
        Ans = this.Number1 * this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Division = function () {
        var Ans = 0;
        Ans = this.Number1 / this.Number2;
        return Ans;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(11, 10);
var obj2 = new Arithmetic(21, 20);
var Ret = 0;
Ret = obj1.Addition();
console.log("Addition of obj1 : " + Ret);
Ret = obj2.Addition();
console.log("Addition of obj2 : " + Ret);
Ret = obj1.Subtraction();
console.log("Subtraction of obj1 : " + Ret);
Ret = obj2.Subtraction();
console.log("Subtraction of obj2 : " + Ret);
Ret = obj1.Multiplication();
console.log("Multiplication of obj1 : " + Ret);
Ret = obj2.Multiplication();
console.log("Multiplication of obj2 : " + Ret);
Ret = obj1.Division();
console.log("Division of obj1 : " + Ret);
Ret = obj2.Division();
console.log("Division of obj2 : " + Ret);
