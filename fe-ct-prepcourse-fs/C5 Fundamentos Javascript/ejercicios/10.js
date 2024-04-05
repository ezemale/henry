function esFechaValida(fecha) {
  // Utiliza el constructor de Date para intentar crear una fecha con el argumento proporcionado
  var dateObject = new Date(fecha);
  
  // Verifica si la fecha creada es válida
  // Esto se hace comprobando si la fecha pasada es igual a la fecha creada y si la fecha creada no es "Invalid Date"
  if (dateObject && dateObject.toISOString().slice(0,10) === fecha) {
    return true;
  } else {
    return false;
  }
}
