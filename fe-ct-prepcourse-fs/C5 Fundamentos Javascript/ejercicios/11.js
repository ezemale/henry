function esMayorDeEdad(fechaNacimiento) {
  // Obten el año actual
  var añoActual = new Date().getFullYear();
  
  // Obten el año de nacimiento
  var añoNacimiento = new Date(fechaNacimiento).getFullYear();
  
  // Calcula la edad restando el año actual al año de nacimiento
  var edad = añoActual - añoNacimiento;
  
  // Verifica si la edad es mayor o igual a 18
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

module.exports = esMayorDeEdad;
