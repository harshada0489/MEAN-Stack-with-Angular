
//Write a program which contains one function named Maximum. That function accepts 3 parameters 
//and should return the lasrgest among them

function Maximum(No1, No2, No3) {
    var Max = 0;
    if (No1 > No2) {
        Max = No1;
    }
    else {
        Max = No2;
    }
    if (No3 > Max) {
        Max = No3;
    }
    return Max;
}
var Ret = 0;
Ret = Maximum(23, 89, 6);
console.log("Maximum number is: " + Ret);
