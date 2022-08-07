// objetos a array
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana', // ahora acepta coma en el ultimo elemento de un objeto para en un futuro evitar errores al agregar más olvidando poner la  coma
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
console.log(values);
console.log(values.length);


// padStart, dado un string, declaramos cuantos espacios queremos, y los adicionales los rellena al principio con la string que le demos
const string = 'hello';
console.log(string.padStart(8,'hi '));
// padEnd es igual pero al final
console.log(string.padEnd(8,' hi'));



// async await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ?setTimeout(() => resolve('Hello world'), 3000)
            : reject(new error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();