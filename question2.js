//Build a simple loop, inside a function, that takes an array and prints the value of the array to the console.



function printArrayValues(a) {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}

const myArray = ['Pink', 'red', 'blue'];
printArrayValues(myArray);