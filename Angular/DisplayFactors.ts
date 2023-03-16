function DisplayFactors(Num: number)
{
    var Cnt : number = 0;

    for(Cnt = 1; Cnt<= Num/2; Cnt++){
        if((Num%Cnt) == 0)
        {
            console.log(Cnt)
        }
    }
}

DisplayFactors(20)