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
