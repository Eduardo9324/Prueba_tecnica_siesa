/* Si tiene una cantidad x expresada en base 10 y se quiere representar en base k, hay que dividir x y los sucesivos cocientes que se vayan obteniendo entre k, la representacion en base k estara dada por los residuos de dichas divisiones y por el ultimo cociente */


/* Implemente una funsion que reciba como parametro un numero x y una base k y devuelva la representacion en base k del numero x */


// Declaro una Arrow function que recibe por parametro (num y base)
const baseConversion = (num, base) => {
  // Valido que ambos argumentos sean de tipo "numero"
  if (typeof num !== "number" || typeof base !== "number") {
    return "Error: ambos parámetros deben ser números.";
  }
  // y despues valido que ambos sean numeros enteros
  if (num % 1 !== 0 || base % 1 !== 0) {
    return "Error: ambos parámetros deben ser números enteros.";
  }
  // Aqui me aseguro que la base sea siempre un numero positivo mayor que 1
  if (base <= 1) {
    return "Error: la base debe ser mayor que 1.";
  }
  // Defino la variable result como un string vacio
  let result = "";
  // Uso un bucle while, Mientras que num sea mayor que "0" calcula el resto (modulo) de num dividido por la base y se suma al resultado. Luego actualiza num dividiéndolo por la base y redondeando hacia abajo al entero más cercano
  while (num > 0) {
    result = (num % base) + result;
    num = Math.floor(num / base);
  }
  // Muestra un mensaje con el resultado
  return `El resultado es: ${result}`;
}

console.log(baseConversion(287, 4));