const myFunc = (a: string, b: string, c?:string) => {  // optional parameter use case "?"
    console.log(`Hello ${a} ${b}`);    
}
myFunc('Saiful', 'Islam');


const myFunc1 = (a: number, b: number, c:string = 'true') => {  // default parameter value
    return a + b;  
}
console.log(myFunc1(344, 974));


// Type Aliases in TypeScript
type stringOrNum = string | number;
type userType = {name: string; age: number};

const userDetails = (id: stringOrNum, user: userType) => {
    console.log(`User id is ${id}, name is ${user.name}, age is ${user.age}`);
};

const sayHello = (user: userType) => {
    console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
}


// function signatures
let add: (x: number, y: number) => number;
add = (x: number, y: number) => {
    return x + y;
}
console.log(add(50, 50));


let calc: (m: number, n: number, p: string) => number;

calc = (m: number, n: number, p: string) => {
    if ( p === "add") {
        return m + n;
    }
    else {
        return m - n;
    }
}
console.log(calc(99, 50, "add"));



let userInfo: (id: number | string, userData: {
    name: string,
    age: number
}) => void;

userInfo = (id: number | string, userData: {
    name: string,
    age: number
}) => {

};