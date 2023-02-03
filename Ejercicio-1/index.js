/* Realice un algoritmo que reciba como parámetro dos números enteros y retorne la
división de ambos números. */

const division = (num1, num2) => {
  let result;
  if (num2 === 0) {
    return "No se puede dividir por el numero 0";
  } else {
    result = num1 / num2;
    return result;
  }
};
division(56, 2);
