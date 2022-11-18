"use strict";
/** Types in Variable **/
let PlayerName = 'Mushfiqur Rahim';
console.log(PlayerName);
// PlayerName = 62; => can`t reasign number type value
let fruites; // variable defined but not assigned value
fruites = "Banana";
console.log(fruites);
fruites = 77;
console.log(fruites);
/** Types in function **/
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 3));
/** Types in Array **/
let mixed = ["orange", "banana", "mango", 87, true, undefined, {}];
mixed.push('coconate');
mixed.push(34);
mixed.push(false);
mixed.push({
    student: 'Saiful Emon'
});
console.log(mixed);
// Types in Object 
let player = {
    name: 'Sakib Al Hasan',
    age: 37,
    isCaptain: true
};
/* In the case of object, the properties of the declared type should be kept the same type while changing later. And if you want to add a new property , you can`t add it because TypeScript doesn't recognize any new properties outside of the object's schema */
// player.country = "Bangladesh";
player.name = 'Masrafi';
// player.name = 54;  string type properties can`t be passed any value other than string
console.log(player);
// Any Types example
let random;
random = 454;
random = 'saiful Emon';
random = true;
random = {
    name: 'fokir alam',
    age: 34,
    alive: true
};
console.log(random);
// Type: unknown
let w = 1;
w = "string";
w = {
    runANonExMethod: () => {
        console.log("I think therefore I am");
    }
};
if (typeof w === 'object' && w !== null) {
    w.runANonExMethod();
}
// TypeScript Tuples
let ourTuple;
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push('Something new and wrong');
console.log(ourTuple);
// Named Tuples
const graph = [55.2, 41.3];
console.log(graph);
// Dynamic Types or any Types
let unique;
unique = 5;
unique = 'Saiful Islam';
console.log(unique);
let arr = [];
arr.push('TypeScript');
arr.push(999);
console.log(arr);
let hello;
hello = {
    name: 'Bangladesh',
    age: 43
};
console.log(hello);
