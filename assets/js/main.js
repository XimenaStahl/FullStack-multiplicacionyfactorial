// Solicitar un número al usuario
let num = parseInt(prompt('Ingrese un número entre 1 y 20'));


// Función Multiplicación
const multiplicar = (num) => {
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        // multiplicación
        let multip = i * num;
        console.log(`${i} x ${num} = ${multip}`);
    }
};
// Función Factorial
const factorial = (num) => {
    for (let i = 1; i <= num; i++) {
        // factorial
        let factor = 1
        for (let j = 1; j <= i; j++) {
            factor = factor * j;
        }
        console.log(`Factorial de ${i} es ${factor}`);
    }
};

const multFact = (num) => {
    // Validar si el usuario ingresó un número entre 1 y 20
    if (num >= 1 && num <= 20) {
        // cumple la condición así que continúa llamando la función
        multiplicar(num);
        factorial(num);
    } else {
        alert("número ingresado fuera de rango");
    }
};

// Llamado a la función que calcula multiplicación y factorial
multFact(num);