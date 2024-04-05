function esNumeroPrimo(numero) {
  // Si el número es menor o igual a 1, no es primo
  if (numero <= 1) {
    return false;
  }
  
  // Itera desde 2 hasta la raíz cuadrada del número para verificar si es divisible
  for (var i = 2; i <= Math.sqrt(numero); i++) {
    // Si el número es divisible por cualquier número entre 2 y su raíz cuadrada, no es primo
    if (numero % i === 0) {
      return false;
    }
  }
  
  // Si no fue divisible por ningún número diferente de 1 y él mismo, es primo
  return true;
}

module.exports = esNumeroPrimo;
