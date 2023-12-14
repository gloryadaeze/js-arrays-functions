Functions
Generally a function is a "subprogram" that can be called by code it could be external or internal that's innacase of recursion. A function is composed of a sequence of statements called the function body. Values can be passed to a function as parameters, and the function will return a value.

In JavaScript, functions are first-class objects, because they can be passed or returned from functions, and assigned to variables and properties as that case maybe. They can also have properties and methods just like any other object. Functions are distinguished from other objects due to the fact that they can be called.

Description
Function values are typically instances of  Callable values.

Return value
The return statement allows the user to return an arbitrary value from the function.

Arguments
Arguments are always passed by value and never passed by reference. This means that if a function reassigns a parameter, the value won't change outside the function.Arguments are also passed by sharing, which means if the object's properties are mutated, the change will impact the outside of the function. 



References
Functions


Filter sidebar
Filter
In this article
Description
Examples
Specifications
Browser compatibility
See also
JavaScript
Tutorials
Complete beginners
JavaScript Guide
Intermediate
Advanced
References
Built-in objects
Expressions & operators
Statements & declarations
Functions
Overview
Arrow function expressions
Default parameters
get
Method definitions
Rest parameters
set
The arguments object
Classes
Regular expressions
Errors
Misc
Functions
Generally speaking, a function is a "subprogram" that can be called by code external (or internal, in the case of recursion) to the function. Like the program itself, a function is composed of a sequence of statements called the function body. Values can be passed to a function as parameters, and the function will return a value.

In JavaScript, functions are first-class objects, because they can be passed to other functions, returned from functions, and assigned to variables and properties. They can also have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called.

For more examples and explanations, see the JavaScript guide about functions.

Description
Function values are typically instances of Function. See Function for information on properties and methods of Function objects. Callable values cause typeof to return "function" instead of "object".

Note: Not all callable values are instanceof Function. For example, the Function.prototype object is callable but not an instance of Function. You can also manually set the prototype chain of your function so it no longer inherits from Function.prototype. However, such cases are extremely rare.

Return value
By default, if a function's execution doesn't end at a return statement, or if the return keyword doesn't have an expression after it, then the return value is undefined. The return statement allows you to return an arbitrary value from the function. One function call can only return one value, but you can simulate the effect of returning multiple values by returning an object or array and destructuring the result.

Note: Constructors called with new have a different set of logic to determine their return values.

Passing arguments
Parameters and arguments have slightly different meanings, but in MDN web docs, we often use them interchangeably. For a quick reference:

JS
Copy to Clipboard

function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(2);
In this example, the num variable is called the function's parameter: it's declared in the parenthesis-enclosed list of the function's definition. The function expects the num parameter to be a number — although this is not enforceable in JavaScript without writing runtime validation code. In the formatNumber(2) call, the number 2 is the function's argument: it's the value that is actually passed to the function in the function call. The argument value can be accessed inside the function body through the corresponding parameter name or the arguments object.

Arguments are always passed by value and never passed by reference. This means that if a function reassigns a parameter, the value won't change outside the function. More precisely, object arguments are passed by sharing, which means if the object's properties are mutated, the change will impact the outside of the function. 

Defining functions
Generally , JavaScript has four kinds of functions they are ;

Regular function:
 can return anything; always runs to completion after invocation

Generator function: 
returns a Generator object; can be paused and resumed with the yield operator. 

Async function: 
returns a Promise; can be paused and resumed with the await operator. 

Async generator function: 
returns an AsyncGenerator object; both the await and yield operators can be used. 

For every kind of function, there are three ways to define it:

Declaration
function, function*, async function, async function*

Expression
function, function*, async function, async function*

Constructor
Function(), GeneratorFunction(), AsyncFunction(), AsyncGeneratorFunction().