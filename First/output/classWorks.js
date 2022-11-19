import { Player } from './classes/Player.js';
const mashrafi = new Player('Masrafi', 39, 'Bangladesh');
let shakib;
shakib = new Player('Shakib', 37, 'Bangladesh');
shakib.name = 'Masrafi'; // property is private
shakib.age = 339;
shakib.country = 'Pakistan'; // can't be changed
console.log(shakib.name);
console.log(shakib.age);
console.log(shakib.country); // i can access that
const players = [];
players.push(shakib);
players.push(mashrafi);
function drawRectangle(options) {
    let width = options.width;
    let height = options.length;
}
let threeDoptions = {
    width: 90,
    length: 35,
    height: 20
};
drawRectangle(threeDoptions);
