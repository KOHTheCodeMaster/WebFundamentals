let globalVar = 100;        //  global scope

function useLocalVar(num) {
    let globalVar = num;    //  local scope
}

function setGlobalVar(num) {
    globalVar = num;
}

console.log("Before: " + globalVar);
useLocalVar(50);
setGlobalVar(50);
console.log("After: " + globalVar);

function displayName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}

function factorial(num) {
    let result = 1, i = 2;
    while (i <= num)
        result *= i++;

    return result;
}

function fibonacciNthNum(num) {
    let first = 0;
    let second = 1;

    if (num === first) return first;
    if (num === second) return second;

    return fibonacciNthNum(num - 1) + fibonacciNthNum(num - 2);
}

function printNFibonacci(num) {
    let str = "";
    for (let i = 0; i < num; i++)
        str += fibonacciNthNum(i) + " ";
    console.log(str);
}

displayName("John", "Doe");

//  JS doesn't throws exception when insufficient args are passed to the
//  functions, rather it considers those args as undefined
displayName("John");

console.log(factorial(5));

printNFibonacci(10);