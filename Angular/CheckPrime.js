function CheckPrime(Num) {
    var flag = false;
    var Cnt = 0;
    for (Cnt = 2; Cnt <= Num / 2; Cnt++) {
        if ((Num % Cnt) == 0) {
            flag = true;
            break;
        }
    }
    return flag;
}
var RetFlag = false;
RetFlag = CheckPrime(11);
if (!RetFlag) {
    console.log("It is prime number");
}
else {
    console.log("It is not a prime number");
}
