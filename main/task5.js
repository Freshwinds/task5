/**
 * Created by freshwinds on 17-7-14.
 */

function fizzBuzzWHizz(number,a,b,c)
{
    var str_exp=String(number);
    var str="";
    var falg=0;
    if(str_exp.indexOf(String(a))!=-1)
    {
        str+="Fizz";
        falg=1;
    }
    else {
        if (number % a == 0) {
            str += "Fizz";
            falg = 1;
        }
        if (number % b == 0) {
            str += "Buzz";
            falg = 1;
        }
        if (number % c == 0) {
            str += "Whizz";
            falg = 1;
        }
    }
    if(falg==0)
    {
        return number;
    }
    else
        return str;
}


/*var num=document.getElementById('inputs').value();
fizzBuzzWHizz(num,a,b,c);*/
