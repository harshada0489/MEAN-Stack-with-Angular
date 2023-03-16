function Area(Radius:number): number
{
    let PI : number = 3.14
    
    let circleArea : number = 0
    
    circleArea = PI * Radius * Radius

    return circleArea
}

var Ret : number = 0

Ret = Area(5)

console.log("Area of a circle is " + Ret)


