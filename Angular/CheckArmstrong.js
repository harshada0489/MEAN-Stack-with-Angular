function ChkArmstrong(Num) {
    var digitsArr = Num.toString();
    var Sum = 0;
    var Cnt = 0;
    for (Cnt = 0; Cnt < digitsArr.length; Cnt++) {
        var ch = digitsArr.charAt(Cnt);
        var digit = +ch;
        var cube = digit * digit * digit;
        Sum = Sum + cube;
    }
    if (Sum == Num) {
        return true;
    }
    else {
        return false;
    }
}
var isArmstrong = false;
isArmstrong = ChkArmstrong(153);
if (isArmstrong) {
    console.log("It is Armstrong number");
}
else {
    console.log("It is not a Armstrong number");
}
