import { Player } from './classes/Player.js';

const mashrafi = new Player('Masrafi', 39, 'Bangladesh');
const shakib = new Player('Shakib', 37, 'Bangladesh');

shakib.name = 'Masrafi';  // property is private
shakib.age = 339;
shakib.country = 'Pakistan';   // can't be changed

console.log(shakib.name);  // property is private and only accessible within class Player
console.log(shakib.age);   // property is private and only accessible within class Player
console.log(shakib.country);  // i can access that

const players: Player[] = [];
players.push(shakib);
players.push(mashrafi);
