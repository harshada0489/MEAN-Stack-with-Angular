function Maximum(Arr) : number
{
    var Cnt = 0;
    var Max = Arr[0];

    for (Cnt = 1; Cnt < Arr.length; Cnt++) {
        if(Arr[Cnt] > Max)
        {
            Max = Arr[Cnt]
        }
    }
    return Max
}

var Max : number = 0;

var Arr = [23, 89, 6, 29, 56, 45, 77, 32];

Max = Maximum(Arr)

console.log("Maximum number is : " + Max);
