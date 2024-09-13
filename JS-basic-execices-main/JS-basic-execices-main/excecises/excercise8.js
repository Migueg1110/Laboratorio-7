/*
Escribe una función llamada calcularIMC(peso, altura) que reciba el peso (en kg) y la altura (en metros) de una persona, 
y retorne su índice de masa corporal (IMC), con base en la fórmula:
IMC = peso / altura^2.

Además, debe clasificar el IMC:

"Bajo peso" si es menor de 18.5,
"Normal" si está entre 18.5 y 24.9,
"Sobrepeso" si está entre 25 y 29.9,
"Obesidad" si es 30 o más.
*/
function calcularIMC(peso, altura) {
    // TODO: Resolver
}
function calcularIMC(peso, altura) {
    // Calcular el IMC
    let imc = peso / (altura * altura);

    // Clasificar el IMC
    if (imc < 18.5) {
        return `IMC: ${imc.toFixed(2)} - Bajo peso`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        return `IMC: ${imc.toFixed(2)} - Normal`;
    } else if (imc >= 25 && imc <= 29.9) {
        return `IMC: ${imc.toFixed(2)} - Sobrepeso`;
    } else {
        return `IMC: ${imc.toFixed(2)} - Obesidad`;
    }
}
console.log("-----------------------------------")
console.log("EJERCICIO 8")
console.log("-----------------------------------")
console.log(calcularIMC(60, 1.7)); // "Normal"
console.log(calcularIMC(80, 1.7)); // "Sobrepeso"