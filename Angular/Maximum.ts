function Maximum(No1:number,  No2 :number, No3 : number): number
{
    var Max : number = 0

    if(No1>No2)
    {
        Max = No1
    }
    else 
    {
        Max = No2
    }

    if(No3 > Max){
        Max = No3
    }

    return Max

}

var Ret : number = 0

Ret = Maximum(23,89,6)
console.log("Maximum number : " + Ret)