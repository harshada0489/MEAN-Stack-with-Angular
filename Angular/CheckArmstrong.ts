function ChkArmstrong(Num : number) : boolean
{
   let digitsArr = Num.toString()
   var Sum : number = 0
   
   let Cnt : number = 0

   for(Cnt = 0; Cnt< digitsArr.length; Cnt++)
   {
    let ch = digitsArr.charAt(Cnt)
    let digit = +ch

    let cube = digit * digit * digit
    Sum = Sum + cube

   }

   if(Sum == Num)
   {
    return true
   }
   else
   {
    return false
   }
}

var isArmstrong : boolean = false

isArmstrong = ChkArmstrong(153)

if(isArmstrong)
{
    console.log("It is Armstrong number");
}
else
{
    console.log("It is not a Armstrong number");
}

