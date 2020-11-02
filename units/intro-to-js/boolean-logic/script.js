// Following 6 values are False, rest everything is True
const zero = 0;
const emptyString = "";
const falseValue = false;
const naNValue = NaN;   //  Not a number
const nullValue = null;
const undefinedValue = undefined;
let z;

if (zero || emptyString || falseValue || nullValue || naNValue || undefinedValue)
    console.log("will not be executed");

/*
    ==  equality or abstract comparison operator
    === identity or strict comparison operator
 */
// An empty string is always converts to zero.
console.log(0 == "");                    //  true

console.log(100 == "100");               //  true
console.log(100 === "100");              //  false

console.log(undefined == null);          //  true
console.log(undefined === null);         //  false

if ("non-empty string is true")          //  true
    console.log(true);

/*
    when string is explicitly compared with true boolean value,
    only "1" as string is true, rest every other string is considered as false despite being non-empty string.
    To make the non-empty string as true while comparing with true boolean value, ! operator is required twice
 */
console.log(!!"string");                 //  true
console.log(true == !!"string");         //  true

if (true == "true") //  false, when explicitly compared with true boolean value, only "1" as string is true
    console.log(true);
else console.log(false);     //  else conditional block is executed

if ("true")  //  true, since no explicit comparison with true boolean, non-empty string is considered as true
    console.log(true);       //  if conditional block is executed
