const displayInput = document.getElementById('display');
const displayAnswer = document.getElementById('displayAnswer');

let expression = '';
let expressionToDisplay = '';
let lastValueEntered = '';
let subAnswer ='';
let subExpression = '';


const calculate = () =>
{
    //Handle negative values
    let ref = expression.indexOf('k');
    while(ref >=0)
    {
        
        console.log('ref: ' + ref);
        //Remove any leading k values 
        if(ref === 0)
        {
            expression = expression.substring(1);
            console.log(expression);
        } 
        //In the case of subtracting a negative number such as 1--1 (in the array represented as 1,-,k,-,1), change the expression to 1+1 for easier calculations.
        else if(expression[ref-1] === '-' && expression[ref+1] === '-')
        {
            let array = expression.split('');
            array.splice(ref-1, 3, '+');
            expression = array.join('');
            console.log(expression);
        }
        //In the case where you have an operator followed by a negative value eg. 1*k-2 remove k to have 1*-2
        else if(isNaN(expression[ref-1]) && isNaN(expression[ref+1]))
        {
            let array = expression.split('');
            array.splice(ref, 1);
            expression = array.join('');
            console.log(expression);       
        }
        ref = expression.indexOf('k');                
    }
    
    //Split the expression 
    let array = expression.split('+').join(' + ').split('*').join(' * ').split('/').join(' / ').split('-').join(' - ');
    array = array.split(' ');
    //Remove empty string in the array
    if(array.indexOf('')>=0)
    {
        let ref = array.indexOf(''); 
        while(ref>=0)
        {
            array.splice(ref, 1);
            ref = array.indexOf('');
        }
    }
    
    
    //Calculate cos, sin, tan first
    for (let index = 0; index < array.length; index++) 
    {
        if(isNaN(array[index]) && array[index] !== '+' && array[index] !== '-' && array[index] !== '*' && array[index] !== '/')
        {
            if(array[index].includes('sin'))
            {
                let num = array[index].substring(3); //Get the angle value of sin
                array.splice(index, 1, Math.sin(num*(Math.PI/180))); //Calculate the sin of angle x and replace the sin string in the array with the calculated value 
            }
            else if(array[index].includes('cos'))
            {
                let num = array[index].substring(3); //Get the angle value of cos
                array.splice(index, 1, Math.cos(num*(Math.PI/180))); //Calculate the cos of angle x and replace the cos string in the array with the calculated value 
            }
            else
            {
                let num = array[index].substring(3);
                if(num === '270' || num === '90')
                {
                    array.splice(index, 1, 'undefined'); //The values of tan(270) and tan(90) are undefined.
                }
                else if(num === '45')
                {
                    /*Calculate the tan of angle x and replace the tan string in the array with the calculated value 
                        JavaScript calculate tan(45) as 0.9999.. instead of one, so round off the value to 1
                    */
                    array.splice(index, 1, Math.ceil(Math.tan(num*(Math.PI/180)))); 
                }
                else
                {
                    array.splice(index, 1, Math.tan(num*(Math.PI/180))); //Calculate the tan of angle x and replace the tan string in the array with the calculated value 
                }
                
            }
        }        
    }
    //Before doing calculation, check if the expression is not undefined due to tan(90) or tan(270) and return an error is undefined.
    if(array.indexOf('undefined')>=0)
    {
        displayAnswer.value = 'ERROR';
    }
    //Continue calculation if the array does not contain an empty string, since an empty string will mess up the calculations
    else if (array.indexOf('')<0 && array.indexOf('')!=array.length) 
    {       
        //Follow the rules of BODMAS
        let divide = array.indexOf('/');
        while(divide>=0)
        { 
            try
            {
                //Handle the case where you divide negative numbers together eg. -1/-2
                if(array[divide-2] === '-'  && array[divide+1] === '-' )
                {
                    subExpression = array[divide-2] + array[divide-1] + '/' + array[divide+1] + array[divide+2];
                    console.log(subExpression);
                    subAnswer = eval(subExpression);
                    array.splice(divide-2, 5, subAnswer); //Replace the evaluated values from the array with the answer, in this example: [a, b, -, 1, /, -, 2, c, d] to [a, b, 0.5, c, d]
                }
                //Handle the case where you divide a negative by a positive number eg. -1/2
                else if(array[divide-2] === '-')
                {
                    
                    subExpression = array[divide-2] + array[divide-1] + '/' + array[divide+1];
                    subAnswer = eval(subExpression);
                    console.log(subExpression);
                    array.splice(divide-2, 4, subAnswer); //Replace the evaluated values from the array with the answer, in this example: [a, b, -, 1, /, 2, c, d] to [a, b, -0.5, c, d]
                }
                //Similar to the previous condition but we dividing a positive number by a negative number eg. 1/-2
                else if (array[divide+1] === '-')
                {
                    subExpression = array[divide-1] + '/' + array[divide+1] + array[divide+2];
                    subAnswer = eval(subExpression);
                    array.splice(divide-1, 4, subAnswer);
                }
                //Divide to positive numbers eg 1/2
                else
                {
                    subExpression = array[divide-1] + '/' + array[divide+1];
                    subAnswer = eval(subExpression);
                    array.splice(divide-1, 3, subAnswer); //Replace the evaluated values from the array with the answer, in this example: [a, b, 1, /, 2, c, d] to [a, b, 0.5, c, d]
                }          
                divide = array.indexOf('/');
            }
            catch(e)
            {
                displayAnswer.value = 'ERROR';
            }
            
        }
        let multiply = array.indexOf('*');
        while(multiply>=0)
        {
            try 
            {
                //Handle the case where you multiple two negative numbers eg. -1*-2
                if(array[multiply-2] === '-' && array[multiply+1] === '-')
                {
                    subExpression = array[multiply-2] + array[multiply-1] + '*' + array[multiply+1] + array[multiply+2];
                    subAnswer = eval(subExpression);
                    array.splice(multiply-2, 5, subAnswer); //Replace the evaluated values from the array with the answer, in this example: [a, b, -, 1, *, -, 2, c, d] to [a, b, 2, c, d]
                }
                //Multiply a negative number with a positive one eg. -1*2
                else if(array[multiply-2] === '-')
                {
                    
                    subExpression = array[multiply-2] + array[multiply-1] + '*' + array[multiply+1];
                    subAnswer = eval(subExpression);
                    console.log(subExpression);
                    array.splice(multiply-2, 4, subAnswer); //Replace the evaluated values from the array with the answer, in this example: [a, b, -, 1, *, 2, c, d] to [a, b, -2, c, d]
                }
                //Multiply a postive number with a negative one eg 2*-1
                else if (array[multiply+1] === '-')
                {
                    subExpression = array[multiply-1] + '*' + array[multiply+1] + array[multiply+2];
                    subAnswer = eval(subExpression);
                    array.splice(multiply-1, 4, subAnswer); //Replace the evaluated values from the array with the answer, in this example: [a, b, 1, *, -, 2, c, d] to [a, b, -2, c, d]
                }
                //multiply two positive numbers
                else
                {
                    subExpression = array[multiply-1] + '*' + array[multiply+1];
                    subAnswer = eval(subExpression);
                    array.splice(multiply-1, 3, subAnswer);
                }
                
                console.log(array);
                multiply = array.indexOf('*');
            } catch (error) 
            {
                displayAnswer.value = 'ERROR';
            }
            
        }
        let add = array.indexOf('+');    
        while(add>=0)
        {
            try 
            {
                //Add two negative numbers eg -1+-2
                if(array[add-2] === '-' && array[add+1] === '-')
                {
                    subExpression = array[add-2] + array[add-1] + '+' + array[add+1] + array[add+2];
                    subAnswer = eval(subExpression);
                    array.splice(add-2, 5, subAnswer); //Replace the evaluated values from the array with the answer, in this example: [a, b, -, 1, +, -, 2, c, d] to [a, b, -2, c, d]
                }
                //Add positive number to a negative one eg -1+2 
                else if(array[add-2] === '-')
                {
                    
                    subExpression = array[add-2] + array[add-1] + '+' + array[add+1];
                    subAnswer = eval(subExpression);
                    console.log(subExpression);
                    array.splice(add-2, 4, subAnswer);
                }
                //Eg. 1+-2
                else if (array[add+1] === '-')
                {
                    subExpression = array[add-1] + '+' + array[add+1] + array[add+2];
                    subAnswer = eval(subExpression);
                    array.splice(add-1, 4, subAnswer);
                }
                //Eg. 1+2
                else
                {
                    subExpression = array[add-1] + '+' + array[add+1];
                    subAnswer = eval(subExpression);
                    array.splice(add-1, 3, subAnswer);
                }
                add = array.indexOf('+');
            } catch (error) 
            {
                displayAnswer.value = 'ERROR';        
            }
            
        }
        let subtract = array.indexOf('-');
        while(subtract>=0)
        {
            try 
            {
                //Add a zero at the begining of the array if it begins with -
                if(array[0] == '-')
                {
                    console.log('unshift')
                    array.unshift(0);
                    subtract = array.indexOf('-');
                }
                //Subtract two negative numbers eg. -1--1
                if(array[subtract-2] === '-' && array[subtract+1] === '-')
                {
                    subExpression = array[subtract-2] + array[subtract-1] + '-' + array[subtract+1] + array[subtract+2];
                    subAnswer = eval(subExpression);
                    array.splice(subtract-2, 5, subAnswer);
                }
                //eg. -1-1
                else if(array[subtract-2] === '-')
                {
                    
                    subExpression = array[subtract-2] + array[subtract-1] + '-' + array[subtract+1];
                    subAnswer = eval(subExpression);
                    console.log(subExpression);
                    array.splice(subtract-2, 4, subAnswer);
                }
                //eg. 1--1
                else if (array[subtract+1] === '-')
                {
                    subExpression = array[subtract-1] + '-' + array[subtract+1] + array[subtract+2];
                    subAnswer = eval(subExpression);
                    array.splice(subtract-1, 4, subAnswer);
                }
                //eg. 1-1
                else
                {
                    subExpression = array[subtract-1] + '-' + array[subtract+1];
                    subAnswer = eval(subExpression);
                    array.splice(subtract-1, 3, subAnswer);
                }
                subtract = array.indexOf('-');
            } catch (error) 
            {
                displayAnswer.value = 'ERROR';        
            }           
        }
    } 
    else 
    {
        displayAnswer.value = 'ERROR';     
    }
    /* 
        Workout the final answer if the array size is greater than 1.
        Remember that -1/-2 will return an array like this: [a, b, 0.5, c, d].
        Lets assume the actual array is like this: [1, *, 2, 0.5, -, 3, +; 4] the the following steps would return the arrays below, respective of BODMAS:
        [2, 0.5, -, 3, +, 4]
        [2, 0.5, 1]
        To get the final answer we just add the elements of the array together and the result would be 3.5
    */
    if(array.length >1)
    {
        let currentAnswer = 0;
        let subExp = '';
        if(array[0] == '-')
        {
            array.unshift(0);
            for (let index = 0; index < array.length; index++) 
            {
                subExp += array[index];     
            }
            subAnswer = eval(subExp);
            displayAnswer.value = subAnswer;
        }
        else
        {
            for (let index = 0; index < array.length; index++) 
            {
                currentAnswer += eval(array[index]);     
            }
            displayAnswer.value = currentAnswer ;
        }
        
        
    }
    else
    {
        displayAnswer.value =  array[0];
    }
    
}

const display = (value) =>
{
    /*
        I separated the negative values with a k so I can always have a operator sign sandwiched between two strings. 
        The k is used to identify negative values from the subtraction sign.
        For example. if the expression is -1-2 I want to express it as k-1-2 so i know that 1 is a negative value.
        This is important when dealing with the expression 1--2, since i express this as 1-k-2 it is easy to identify
        that 2 is negative and the '-' sign infront of 2 is not subtraction but indicates a negative value.
    */
    //In the case where the expression being entered is 1--1 separate the two negative signs with k
    if(lastValueEntered == '-' && value == '-')
    {
        expression += 'k' + value;
        expressionToDisplay += value;
        lastValueEntered = value;
    }
    //If the expression starts with a negative number then express it as k-value.
    else if(lastValueEntered == '' && value == '-')
    {
        expression += 'k' + value;
        expressionToDisplay += value;
        lastValueEntered = value;
    }
    //If a operator sign is followed by a negative number then separates with k eg *- = *k-
    else if(isNaN(lastValueEntered) && value == '-')
    {
        expression += 'k' + value;
        expressionToDisplay += value;
        lastValueEntered = value;
    }
    else
    {
        expression += value;
        expressionToDisplay += value;
        lastValueEntered = value;
    }
    displayInput.value = expressionToDisplay;
}
//Delete one char from the expression
document.getElementById('del').addEventListener('click', () =>{
    if(!isNaN(lastValueEntered))
    {
        expression = expression.slice(0, -1);
        expressionToDisplay = expressionToDisplay.slice(0, -1);
    }
    else
    {
        expression = expression.slice(0, expression.indexOf(lastValueEntered[0]));
        expressionToDisplay = expressionToDisplay.slice(0, expressionToDisplay.indexOf(lastValueEntered[0]));
    }   
    displayInput.value = expressionToDisplay;
});
//Clear the entire screen of the calculator
document.getElementById('clear').addEventListener('click', () =>{
    expression = '';
    expressionToDisplay = '';
    lastValueEntered = '';
    displayInput.value = expressionToDisplay;
    displayAnswer.value = expression;
});

