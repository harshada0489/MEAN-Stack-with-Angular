class Arithmetic
{
    Number1 : number;
    Number2 : number;

    constructor(i : number, j : number)
    {
        this.Number1 = i;
        this.Number2 = j;
    }

    Addition() : number
    {
        let Ans = 0;
        Ans = this.Number1 + this.Number2;
        return Ans;
    }

    Subtraction() : number
    {
        let Ans : number = 0;
        Ans = this.Number1 - this.Number2;
        return Ans;
    }

    Multiplication() : number
    {
        let Ans : number = 0;
        Ans = this.Number1 * this.Number2;
        return Ans;
    }

    Division() : number
    {
        let Ans : number = 0;
        Ans = this.Number1 / this.Number2;
        return Ans;
    }


}

var obj1 = new Arithmetic(11, 10);
var obj2 = new Arithmetic(21,20);

var Ret : number = 0;

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



