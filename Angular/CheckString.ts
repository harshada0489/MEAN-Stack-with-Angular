function ChkString(Str : string) : boolean
{
   let splittedStr = Str.split(" ")
   var Sum : number = 0
   
   let Cnt : number = 0

   for(Cnt = 0; Cnt< splittedStr.length; Cnt++)
   {
    let tempStr = splittedStr[Cnt]
    if(tempStr == "Marvellous")
    {
        return true
    }
   }

   return false
}

var isContainString : boolean = false

var s1 : string = "Pune Kothrud Marvellous Infosystems"
isContainString = ChkString(s1)

if(isContainString)
{
    console.log("String contains Marvellous in it ");
}
else
{
    console.log("String does not contains Marvellous in it ");
}

