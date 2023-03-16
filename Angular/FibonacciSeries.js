function FibonacciSeries(Num) {
    var No1 = 1;
    var No2 = 1;
    var Sum = No1 + No2;
    console.log(No1);
    console.log(No2);
    console.log(Sum);
    while (Sum < Num) {
        No1 = No2;
        No2 = Sum;
        Sum = No1 + No2;
        console.log(Sum);
    }
}
FibonacciSeries(21);
