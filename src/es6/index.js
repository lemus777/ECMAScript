// Declaración de valores por defecto antes
function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'Oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 32, 'CO');

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// let y const
// antes
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n'
+ 'Ut eu augue in neque ultricies egestas.';

//es6
let lorem2 = `Una frase epica que necesitamos
ahora es más fácil y épico`;

console.log(lorem);
console.log(lorem2);

let person = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
}

console.log(person.name, person.age, person.country); // antes

let { name, age, country } = person; // es6
console.log(name, age, country);


let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);


{
    var globalVar = 'Global var';
}

{
    let globalLet = 'Global let';
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';


// objetos
let myName = 'Jorge';
let myAge = 41;

obj = { name: myName, age: myAge }; // antes

obj2 = { myName, myAge }; // es6
console.log(obj2);


// funciones flecha
const names = [
    { name: 'Jorge', age: 41 },
    { name: 'Jessica', age: 27 }
]

let listOfNames = names.map(function(item) { // antes
    console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name)); // es6

let listOfNames3 = (name, age, country) => {
    // aquí iría el código
}

let listOfNames4 = name => {
    // aquí iría el código
}

const square = num => num * num;


// Promesas (asincronismo)
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));


// clases
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));


// modulos (import y export)
import { hello } from './module.js'

hello();


// generadores
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'world';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);