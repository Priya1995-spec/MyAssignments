let browser="chrome"
if (browser !== "chrome")
{// wanted to cross verify, so put a 
    console.log("it's a chrome browser")
}else 
    console.log("it's  other browser")

    let testtype= "sanity"
    switch(testtype)
    {
        case "sanity":
            console.log("it's a sanity case")
        break  
    case "Regression":
        console.log("its a regression case")
        break
        default :
        console.log(smoke)
            
         
    }