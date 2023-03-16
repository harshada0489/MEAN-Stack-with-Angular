function ChkString(Str) {
    var splittedStr = Str.split(" ");
    var Sum = 0;
    var Cnt = 0;
    for (Cnt = 0; Cnt < splittedStr.length; Cnt++) {
        var tempStr = splittedStr[Cnt];
        if (tempStr == "Marvellous") {
            return true;
        }
    }
    return false;
}
var isContainString = false;
var s1 = "Pune Kothrud Marvellous Infosystems";
isContainString = ChkString(s1);
if (isContainString) {
    console.log("String contains Marvellous in it ");
}
else {
    console.log("String does not contains Marvellous in it ");
}
