function SecondMaximum(Arr) {
    var Cnt = 0;
    var Max1 = Arr[0];
    var Max2 = Arr[0];
    for (Cnt = 1; Cnt < Arr.length; Cnt++) {
        if (Arr[Cnt] > Max1) {
            Max1 = Arr[Cnt];
        }
    }
    for (Cnt = 1; Cnt < Arr.length; Cnt++) {
        if (Arr[Cnt] > Max2 && Arr[Cnt] < Max1) {
            Max2 = Arr[Cnt];
        }
    }
    return Max2;
}
var SecondMax = 0;
var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
SecondMax = SecondMaximum(Arr);
console.log("Second Maximum number is : " + SecondMax);
