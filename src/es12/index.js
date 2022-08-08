// replaceAll
const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web';
const replacedString = string.replace('JavaScript', 'Python'); // reemplaza solo el primer elemento
console.log(replacedString);

const replacedString2 = string.replaceAll('JavaScript', 'Python');
console.log(replacedString2);


// métodos privados
class Message {
    #show(val) { // la almohadilla lo hace privado, así que no se ejecutará al llamar message.show
        console.log(val);
    };
}

const message = new Message();
message.show('Hola!');


// promise.any
const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3]) // busca el primer resolve que se de
    .then(response => console.log(response)); // nos devolverá 2, porque es el primer resolve


// WeakRef
class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element) // evita que sea removido de la memoria para liberarla
    }
}


// nuevos operadores logicos abreviados
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);

let isTrue1 = undefined;
let isFalse1 = false;
console.log(isTrue ??= isFalse);