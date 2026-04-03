let a = [-5, -4 , -3 , -2 , -1 , 0 , 1, 2, 3, 4 , 5]
function positiveNegative()
{
    
    for(let i=0; i<a.length;i++)
    {
        let number = a[i]
    
     if (number > 0)
    {
        console.log("-----------------------------")
    console.log("the number is greater then zero")
    console.log("it's a positive number" +number)
      console.log("-----------------------------")

    }
    else if (number < 0)
    {
          console.log("-----------------------------")
    console.log("the number is less than zero")
    console.log("it's a negative number" +number)
      console.log("-----------------------------")
    }else    {
    console.log("the number is ZERO "+" "  +number)
    }
}
}
positiveNegative()

    