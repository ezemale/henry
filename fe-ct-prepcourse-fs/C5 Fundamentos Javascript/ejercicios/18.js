function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:

  if(Number.isInteger(num)){
    if(num % 2 === 1){
      return true
    }else{
      return false
    }
  }else{
    return false
  }
}

module.exports = esImpar;