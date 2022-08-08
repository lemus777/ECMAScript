// aplanamiento de arrays
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2)) // el número es la cantidad de niveles que nos va a aplanar, en este caso con 2 lo aplana totalmente

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));


// trimStart elimina los espacios al principio de un array
let hello = '        hello world';

console.log(hello);
console.log(hello.trimStart());

// trimEnd igual pero al final
let hello2 = 'hello world        ';

console.log(`${hello2}!`);
console.log(`${hello2.trimEnd()}!`);


// try/catch nueva forma más simple de codificarlo
try {

} catch { // antes se escribía catch (error) {}
    error
}


// Object.fromEntries
let entries = [['name', 'Oscar'], ['age', 32]];

console.log(Object.fromEntries(entries));


// Objeto de tipo symbol
let mySymbol = `my symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);