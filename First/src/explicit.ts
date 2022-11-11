// Variable Example
let student:string = 'Saiful Islam Emon';
console.log(student);

let num:number;
num = 89889;
// num = 'hello world'  // can't reasign string value
console.log(num);


// Array Example
let serial: number[] = [];
serial.push(9, 8, 0, 2, 4, 43, 5);
console.log(serial);

// normal variable
let x: string | number;
x = 'hello world';
console.log(x);
x = 77;
console.log(x);

// union type array example
let ele : (string | number)[] = [];
ele.push(9, 8, 0, 2, 4, 'jamal', 'kamal', 'alam');
console.log(ele);


// Object Example
let a: object;

a = {
    name: 'Saiful Islam',
    age: 20,
    adult: true
};
console.log(a);


// use object schema
let y: {
    name: string,
    age: number,
    adult: boolean
}
y = {
    name: 'Saiful Islam',
    age: 20,
    adult: true
};
console.log(y);
