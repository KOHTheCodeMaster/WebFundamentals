let obj = {};                   //  Initialize obj as empty object
obj.name = "John Doe";          //  Add name key to obj
console.log(obj.name);

//  function as a part of object is called method
let objCat = {
    name: "Tom",
    color: "Blue",
    speak: function () {
        console.log("Meow!");
    }
}


let objDog = {
    name: "Spike",
    color: "Grey",
    speak: function () {
        console.log("Woof!");
    }
}

objCat.speak();
objDog.speak();

obj = {
    1: "One",
    2: "Two"
}

//  Can not use dot operator for keys starting with number  |   E.g.: obj.1 is invalid
//  Using [] operator to access key of object
console.log(obj[1]);
console.log(obj["1"]);

//  Using variable to access specific key of object
let z = 2;
console.log(obj.z);     //  doesn't looks for 2 but rather z property/field of the object
console.log(obj[z]);    //  first evaluates the value of z & then looks up for the property i.e. 2 as key


//  this keyword refers to the object through which the property/method was invoked
objCat.introduce = function () {
    console.log("My name is " + this.name); //  Here, this keyword refers to objCat
}

objCat.introduce();

