function grade(mark)
{
    switch(true)
{
    case  (mark>90): console.log("A+")
    break
    case (mark>=75): console.log("A")
    break
    case (mark>=50 && mark<=74) : console.log("B")
    break
    default : console("not a good grde to promot next class")
}
}
grade(85)