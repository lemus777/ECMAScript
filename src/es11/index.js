const button = document.getElementById('btn');

button.addEventListener('click', async function() { // al hacer click llama a una funcion anonima de forma asíncrona
    const module = await import('./file.js'); // la funcion declara module, que espera para importar el fichero file.js
    module.hello(); // y ejecuta de module la función hello() declarada en el fichero file.js
});


// funciones adicionales
//bigInt
const aBigNumber = 9007199254740991n; //este es el numero máximo que permitía js, para usarlo agregamos una n al final
const anotherBigNumber = BigInt(9007199254740991); // la otra forma de usar el numero es con bigInt en vez de n

console.log(aBigNumber);
console.log(anotherBigNumber);


// promise.allSettled
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve1'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log('response'));


// globalThis
console.log(window);
console.log(globalThis);


// nullish coalescing operator
const foo = null ?? 'default string'; // lo asignado despues de ?? solo hace efecto si es null
console.log(foo);
const foo2 = 'asd' ?? 'default string';
console.log(foo2);


// optional chaining
const user = {};

//console.log(user.profile.email); // no existe, falla y detiene aplicación
console.log(user?.profile?.email); // no existe, arroja undefined y sigue con el resto de la aplicación

if (user?.profile?.email) {
    console.log('email');
} else {
    console.log('Fail');
}