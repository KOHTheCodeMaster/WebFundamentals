console.log("Hola..!! :D\n");

//  -------------------
//  Basic Data Types
//  -------------------

//  boolean, number (integer & floating point)
//  ------------------------------------------
console.log("boolean, number (integer & floating point):");

let booleanValue: boolean = false;
let num: number = 10;
let pi: number = 3.14;

console.log(booleanValue);
console.log(num);
console.log(pi);


//  String
//  ------
console.log("\nString:");

let str1: string = "John Doe";
let strMultiLine: string = `Multi-line string using backquote / backtick.
        ABC...
                123...
XYZ...`
let strWithExpression: string = `Name: ${str1}`;

console.log(str1);
console.log(strMultiLine);
console.log(strWithExpression);


//  Any
//  ---
console.log("\nAny:");

/*
    Variables with 'any' data type can be re-assigned with any type of value as its data type
    can be determined dynamically at run-time with the value supplied to it

    Note: By default 'any' type will be assigned if no annotation is specified along with no value initialized.
          If the Type of the variable is not specified, and is directly assigned to a value of any specific Datatype,
          the Datatype of the variable is set to the Datatype of the assigned value.

    Remember that all the convenience of any comes at the cost of losing type safety.
    Type safety is one of the main motivations for using TypeScript and you should try to avoid using any when not necessary.
*/

let x;  // let x: any;
console.log(x);
x = "A";
console.log(x);
x = 3.14;
console.log(x);

// Although the datatype of the variable strName is not specified here, but since its assigned
// a string type value, so the Datatype of the variable strName is set to "String"
let strName = "John";

// strName = 123 // throws an error "Type 'number' is not assignable to type 'string'."
strName = "John Doe" // the value of variable name is assigned to "John"


//  Void, Null & Undefined
//  ----------------------
console.log("\nVoid, Null & Undefined:");

// By default null and undefined are subtypes of all other types.
// That means you can assign null and undefined to something like number, string, etc.
let undefinedValue: undefined = undefined;
let nullValue: null = null;

console.log(undefinedValue);
console.log(nullValue);

//  Void

/*
    Void allows only undefined & null values.
    If no return type is mentioned for the function,
    then 'void' return type will be assigned by default.
*/

// let error:void = "a";
let voidValue1: void = undefined;
let voidValue2: void = null;

console.log(voidValue1);
console.log(voidValue2);


//  Enum
//  --------------
console.log("\nEnum:");

// By default, enums begin numbering their members starting at 0.
enum ColorDefault {
    Red,
    Green,
    Blue
}

console.log(ColorDefault.Red);

// If we set a different value for one of the variable, the subsequent values will be incremented by 1.
enum ColorInitialized {
    Red = 10,
    Green,
    Blue
}

console.log(ColorDefault.Green);

// Enum item can also be initialized with different values than the default value.
enum Color {
    Red = "#f00",
    Green = "#0f0",
    Blue = "#00f",
}

let blueColor: Color = Color.Blue;
console.log(blueColor);


//  Array
//  -----
console.log("\nArray:");

/*
    Array types can be written in one of two ways.
    In the first, you use the type of the elements followed by []
    to denote an array of that element type:
*/
let arr: number[] = [1, 2, 3];
console.log(arr);

//  The second way uses a generic array type, Array<elemType>
let arr2: Array<string> = ["ABC", "XYZ"];
console.log(arr2);

//  Using any data type for an array of mixed data type
let arr3: any[] = [1, "ABC", 3.14];
console.log(arr3);

