var ingresarTexto = document.getElementById('ingresar-texto');
var btnEncriptar = document.getElementById('btn-encriptar');
var btnDesencriptar = document.getElementById('btn-desencriptar');
var ingresarResultado = document.getElementById('resultado-texto');
var btnCopiar = document.getElementById('btn-copy');
const soloLetras ='^[a-z !ñ]+$';
document.addEventListener('DOMContentLoaded', () => {
    btnEncriptar.addEventListener('click', encriptarTexto);
    btnDesencriptar.addEventListener('click', desencriptarTexto);
    btnCopiar.addEventListener('click', copiarTexto);
  });


function encriptarTexto(e) {
  e.preventDefault();
  ingresarResultado.value = '';
  let texto = ingresarTexto.value;

  
  if(texto.match(soloLetras)!=null){
    let palabras = texto.split(' ');
    let nuevasPalabras = [];
    
    for (let palabra of palabras) {
      palabra = palabra.replaceAll('e','enter');
      palabra = palabra.replaceAll('i','imes');
      palabra = palabra.replaceAll('a','ai');
      palabra = palabra.replaceAll('o','ober');
      palabra = palabra.replaceAll('u','ufat');      
      
      nuevasPalabras.push(palabra);    
    }

    const resultado = nuevasPalabras.join(' ');
    
    ingresarResultado.value = resultado;
    document.getElementById("result").style.display = "block";
    document.getElementById("default").style.display = "none";


  } else {
    mostrarError('Solo se permiten letras minúsculas, sin acentos');
    return;
  }  
}

function desencriptarTexto(e) {
  e.preventDefault();  
  ingresarResultado.value = '';
  let texto = ingresarTexto.value;

  if(texto.match(soloLetras)!=null){
    let palabras = texto.split(" ");
    let nuevasPalabras = [];    

    for (let palabra of palabras) {
      palabra = palabra.replaceAll('enter','e');
      palabra = palabra.replaceAll('imes','i');
      palabra = palabra.replaceAll('ai','a');
      palabra = palabra.replaceAll('ober','o');
      palabra = palabra.replaceAll('ufat','u');
      nuevasPalabras.push(palabra);    
    }

    const resultado = nuevasPalabras.join(' ');
    
    ingresarResultado.value = resultado;
  } else {
    mostrarError('Solo se permiten letras minúsculas, sin acentos');
    return;
  }  
}

function mostrarError(mensaje) {
  const existeError = document.querySelector('.error');
  
  if(!existeError) {
      const formulario = document.getElementById('encriptador_form');
      const divMensaje = document.createElement('div');
      divMensaje.classList.add('error');
  
      divMensaje.textContent = mensaje;            
      formulario.appendChild(divMensaje);
      
      setTimeout(()=> {
          divMensaje.remove();
      }, 3000);
  }
}

function copiarTexto(e) {
    e.preventDefault(); 
    const mensaje = ingresarResultado.value;

    navigator.clipboard.writeText(mensaje);
}

