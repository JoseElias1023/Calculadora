const mousetrap = require('mousetrap')

mousetrap.bind('1',clickUno)
mousetrap.bind('2',clickDos)
mousetrap.bind('+',clickSuma)

document.getElementById('botonUno').addEventListener('click', clickUno)
document.getElementById('botonDos').addEventListener('click', clickDos)
document.getElementById('suma').addEventListener('click', clickSuma)

var actualElemento = document.getElementById('numeroActual')
var resultadoElemento = document.getElementById('resultado')

var actual = ''
var resultado = 0

function clickUno(){
  actual += 1
  actualElemento.innerHTML = actual
}

function clickDos(){
  actual += 2
  actualElemento.innerHTML = actual
}

function clickSuma(){
  if(actual != ''){
    resultado += parseInt(actual)
    actual = ''
    actualElemento.innerHTML = '0'
    resultadoElemento.innerHTML = resultado
  }
}