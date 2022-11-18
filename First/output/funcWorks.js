"use strict";
const myFunc = (a, b, c) => {
    console.log(`Hello ${a} ${b}`);
};
myFunc('Saiful', 'Islam');
const myFunc1 = (a, b, c = 'true') => {
    return a + b;
};
console.log(myFunc1(344, 974));
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name}, age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
};
// function signatures
let add;
add = (x, y) => {
    return x + y;
};
console.log(add(50, 50));
let calc;
calc = (m, n, p) => {
    if (p === "add") {
        return m + n;
    }
    else {
        return m - n;
    }
};
console.log(calc(99, 50, "add"));
let userInfo;
userInfo = (id, userData) => {
};
