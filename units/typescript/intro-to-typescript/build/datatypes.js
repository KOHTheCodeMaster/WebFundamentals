console.log("Hola..!! :D\n");
//  -------------------
//  Basic Data Types
//  -------------------
//  boolean, number (integer & floating point)
//  ------------------------------------------
console.log("boolean, number (integer & floating point):");
var booleanValue = false;
var num = 10;
var pi = 3.14;
console.log(booleanValue);
console.log(num);
console.log(pi);
//  String
//  ------
console.log("\nString:");
var str1 = "John Doe";
var strMultiLine = "Multi-line string using backquote / backtick.\n        ABC...\n                123...\nXYZ...";
var strWithExpression = "Name: " + str1;
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
var x; // let x: any;
console.log(x);
x = "A";
console.log(x);
x = 3.14;
console.log(x);
// Although the datatype of the variable strName is not specified here, but since its assigned
// a string type value, so the Datatype of the variable strName is set to "String"
var strName = "John";
// strName = 123 // throws an error "Type 'number' is not assignable to type 'string'."
strName = "John Doe"; // the value of variable name is assigned to "John"
//  Void, Null & Undefined
//  ----------------------
console.log("\nVoid, Null & Undefined:");
// By default null and undefined are subtypes of all other types.
// That means you can assign null and undefined to something like number, string, etc.
var undefinedValue = undefined;
var nullValue = null;
console.log(undefinedValue);
console.log(nullValue);
//  Void
/*
    Void allows only undefined & null values.
    If no return type is mentioned for the function,
    then 'void' return type will be assigned by default.
*/
// let error:void = "a";
var voidValue1 = undefined;
var voidValue2 = null;
console.log(voidValue1);
console.log(voidValue2);
//  Enum
//  --------------
console.log("\nEnum:");
// By default, enums begin numbering their members starting at 0.
var ColorDefault;
(function (ColorDefault) {
    ColorDefault[ColorDefault["Red"] = 0] = "Red";
    ColorDefault[ColorDefault["Green"] = 1] = "Green";
    ColorDefault[ColorDefault["Blue"] = 2] = "Blue";
})(ColorDefault || (ColorDefault = {}));
console.log(ColorDefault.Red);
// If we set a different value for one of the variable, the subsequent values will be incremented by 1.
var ColorInitialized;
(function (ColorInitialized) {
    ColorInitialized[ColorInitialized["Red"] = 10] = "Red";
    ColorInitialized[ColorInitialized["Green"] = 11] = "Green";
    ColorInitialized[ColorInitialized["Blue"] = 12] = "Blue";
})(ColorInitialized || (ColorInitialized = {}));
console.log(ColorDefault.Green);
// Enum item can also be initialized with different values than the default value.
var Color;
(function (Color) {
    Color["Red"] = "#f00";
    Color["Green"] = "#0f0";
    Color["Blue"] = "#00f";
})(Color || (Color = {}));
var blueColor = Color.Blue;
console.log(blueColor);
//  Array
//  -----
console.log("\nArray:");
/*
    Array types can be written in one of two ways.
    In the first, you use the type of the elements followed by []
    to denote an array of that element type:
*/
var arr = [1, 2, 3];
console.log(arr);
//  The second way uses a generic array type, Array<elemType>
var arr2 = ["ABC", "XYZ"];
console.log(arr2);
//  Using any data type for an array of mixed data type
var arr3 = [1, "ABC", 3.14];
console.log(arr3);
//# sourceMappingURL=datatypes.js.map