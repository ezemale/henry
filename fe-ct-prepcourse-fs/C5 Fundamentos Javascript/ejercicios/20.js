function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
letra = letra.toLowerCase()

var vocales = "aeiou"

if (vocales.includes(letra)){
  return "es vocal"
}
else if(letra.length > 2){
  return "Dato incorrecto"

}else {
  
}
}

module.exports = esVocal;
