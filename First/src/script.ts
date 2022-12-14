/** Types in Variable **/
let PlayerName = "Mushfiqur Rahim";
console.log(PlayerName);
// PlayerName = 62; => can`t reasign number type value

let fruites; // variable defined but not assigned value
fruites = "Banana";
console.log(fruites);
fruites = 77;
console.log(fruites);

/** Types in function **/
function multiply(a: number, b: number) {
  // parameter assigned must be a number
  return a * b;
}
console.log(multiply(5, 3));

/** Types in Array **/
let mixed = ["orange", "banana", "mango", 87, true, undefined, {}];

mixed.push("coconate");
mixed.push(34);
mixed.push(false);
mixed.push({
  student: "Saiful Emon",
});
console.log(mixed);

// Types in Object
let player = {
  name: "Sakib Al Hasan",
  age: 37,
  isCaptain: true,
};
/* In the case of object, the properties of the declared type should be kept the same type while changing later. And if you want to add a new property , you can`t add it because TypeScript doesn't recognize any new properties outside of the object's schema */

// player.country = "Bangladesh";
player.name = "Masrafi";
// player.name = 54;  string type properties can`t be passed any value other than string
console.log(player);

// Any Types example
let random: any;

random = 454;
random = "saiful Emon";
random = true;
random = {
  name: "fokir alam",
  age: 34,
  alive: true,
};
console.log(random);

// Type: unknown
let w: unknown = 1;
w = "string";

w = {
  runANonExMethod: () => {
    console.log("I think therefore I am");
  },
} as { runANonExMethod: () => void };

if (typeof w === "object" && w !== null) {
  (w as { runANonExMethod: Function }).runANonExMethod();
}

// TypeScript Tuples
let ourTuple: [number, boolean, string];
ourTuple = [5, false, "Coding God was here"];

ourTuple.push("Something new and wrong");
console.log(ourTuple);

// Named Tuples
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);

// Dynamic Types or any Types
let unique;
unique = 5;
unique = "Saiful Islam";

console.log(unique);

let arr: any[] = [];
arr.push("TypeScript");
arr.push(999);
console.log(arr);

let hello: {
  name: any;
  age: any;
};
hello = {
  name: "Bangladesh",
  age: 43,
};
console.log(hello);



// Generic in TypeScript
const addID = <T extends {
    name: string;
    age: number;
}>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return {...obj, id}
}

let user = addID({
    name: "Saiful Islam",
    age: 42, 
    country: 'Tukey'
})
addID(user);



interface APIresponse<T> {
    status: number;
    type: string;
    data: T;
}

const response1: APIresponse<object> = {
    status: 300,
    type: 'good',
    data: {
        name: 'Test',
        something: 399
    }
}


// Enums Type
enum RType {Success, Error, Failure, Unknown, Forbidden, Unauthenticated}
interface APIresponse<T> {
    status: number;
    type: RType;
    data: T;
}

const response2: APIresponse<object> = {
    status: 200,
    type: RType.Success,
    data: {
        name: 'Test',
        something: 399
    }

}