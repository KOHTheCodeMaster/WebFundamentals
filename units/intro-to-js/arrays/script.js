let arr = [0, 1, 2, "three", "four", 5, null, 7.14];

// length of array
console.log(arr);
console.log("Array Length: " + arr.length);

/*
    Push / Pop      : Add / Delete element at the end of the array
    Unshift / Shift : Add / Delete element at the front of the array
 */

// Add element at the end and return the size of the array after addition
console.log(arr.push("new element"));
console.log(arr);

// Remove element at the end and return that element
console.log(arr.pop());
console.log(arr);

// Remove element at the end and return that element
console.log(arr.unshift("new element"));
console.log(arr);

// Remove element at the end and return that element
console.log(arr.shift());
console.log(arr);


// indexOf(item)
// returns position of the element in the array, -1 if item doesn't exists
console.log(arr.indexOf("three"));


// slice(i, j)
// this method returns portion of array sliced from i to j, where i is inclusive and j is exclusive index
let strArr = arr.slice(3, 5);
console.log(strArr);


// forEach method
arr.forEach(function (item) {
    console.log(item);
})
