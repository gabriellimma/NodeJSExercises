module.exports = {soma, subtrai, divide, multiplica}

function soma(num1, num2)
{
    return ("The sum is: " + (num1+num2));
}

function subtrai(num1, num2)
{
    return("The subtraction is: " + (num1-num2));
}

function divide(num1, num2)
{
    if(num2 == 0)
    {
        return "Can't divide by zero"
    }
    else
    {
        return("The division is: " + (num1/num2));
    }
}

function multiplica (num1,num2)
{
    return("The multiplication is: " + (num1*num2));
}

