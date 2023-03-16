function Summation(Arr) : number
{
    var Cnt : number = 0;
    var Sum : number = 0;

    for (Cnt = 0; Cnt < Arr.length; Cnt++) 
    {
            Sum = Sum + Arr[Cnt]
    }
    return Sum
}

var Sum : number = 0;

var Arr = [23, 6, 7, 4, 5, 7];

Sum = Summation(Arr)

console.log("Addition is : " + Sum);
