// desestructuración
const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX',
};

let { name, ...all } = obj; // si en vez de name, ...all ponemos country, ...all podemos hacer console a all y nos lo sacará todo menos country, así podemos seleccionar de forma ágil que se imprime
console.log(name, all);

console.log(all);


// propiedades de propagación
const obj1 = {
    name: 'Oscar',
    age: 32,
}

const obj2 = {
    ...obj1, // tomará los datos de obj1
    country: 'MX',
}

console.log(obj2);


// promise finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Hello world'), 3000) : reject(new Error ('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


// mejoras en expresiones regulares (regex)
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ // cada contenido entre paréntesis es un grupo
const match = regexData.exec('2018-04-20'); // caso concreto
const year = match[1] // grupo primero de match
const month = match[2]
const day = match[3]

console.log(year, month, day);