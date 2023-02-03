/* Realice un algoritmo que reciba como parámetro dos números enteros y retorne la
división de ambos números. */


// Declaro una Arrow function "division" que recibe dos parametros (num1 y num2)
const division = (num1, num2) => {
  // Aqui se valida que el tipo de dato recibido sea de tipo numero, si alguno de los dos no es un tipo numero muestra un mensaje "Ambos parámetros deben ser números"
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Ambos parámetros deben ser números";
  }
  // Aqui se valida que los numeros recibidos sean enteros, de no ser asi muestra un mensaje "Ambos parámetros deben ser números enteros"
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "Ambos parámetros deben ser números enteros";
  }
  // Aqui muestra un mensaje en caso de que el segundo argumento sea "0", y dice que no se puede dividir por 0
  if (num2 === 0) {
    return "No se puede dividir por el número 0";
  }
  // Si aprueba todas las validaciones retorna la division de ambos numeros enteros
  return `El resultado de la division entre ${num1} y ${num2} da como resultado ${
    num1 / num2
  }`;
};

console.log(division(95, 8))
