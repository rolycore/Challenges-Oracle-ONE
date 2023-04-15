//variables

const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDecencriptar = document.querySelector(".btnDecencriptar");
const resultado = document.querySelector('.resultado');
const btnCopiar = document.querySelector('.btnCopiar');
const validar = document.querySelector('.validar');

//eventos
(() => {

    btnEncriptar.addEventListener('click', encriptarTexto);
    btnDecencriptar.addEventListener('click', decencriptarTexto);
    resultado.addEventListener('click', copiarTexto);

})()


//funciones
function encriptarTexto() {
    let texto = document.querySelector("#texto").value;
    if (removerAcentos(texto)) {
        return
    }
    let textoEncriptado = texto.replace(/e/img, 'enter');
    textoEncriptado = textoEncriptado.replace(/i/mg, 'imes');
    textoEncriptado = textoEncriptado.replace(/a/mg, 'ai');
    textoEncriptado = textoEncriptado.replace(/o/mg, 'ober');
    textoEncriptado = textoEncriptado.replace(/u/mg, 'ufat');
    mostrarHTML(textoEncriptado)
    document.querySelector("#texto").value = '';
}

function removerAcentos(texto) {
    if (texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "") !== texto) {
        const alerta = document.createElement('div');
        alerta.textContent = 'Ingrese un texto sin acentos';
        alerta.classList.add('error')
        setTimeout(() => {
            alerta.remove();
        }, 1500);
        validar.appendChild(alerta);
        return true
    };
    if (texto !== texto.toLowerCase()) {
        const alerta = document.createElement('div');
        alerta.textContent = 'Ingrese un texto sin mayusculas';
        alerta.classList.add('error')
        setTimeout(() => {
            alerta.remove();
        }, 1500);
        validar.appendChild(alerta);
        return true
    };
    return false
    /* return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); */
}

function mostrarHTML(textoEncriptado) {
    resultado.innerHTML = `
    <div class="sk-circle">
      <div class="sk-circle1 sk-child"></div>
      <div class="sk-circle2 sk-child"></div>
      <div class="sk-circle3 sk-child"></div>
      <div class="sk-circle4 sk-child"></div>
      <div class="sk-circle5 sk-child"></div>
      <div class="sk-circle6 sk-child"></div>
      <div class="sk-circle7 sk-child"></div>
      <div class="sk-circle8 sk-child"></div>
      <div class="sk-circle9 sk-child"></div>
      <div class="sk-circle10 sk-child"></div>
      <div class="sk-circle11 sk-child"></div>
      <div class="sk-circle12 sk-child"></div>
    </div>
    `
    setTimeout(() => {
        resultado.innerHTML = `
        <textarea>${textoEncriptado}</textarea>
        <button class="btnCopiar">Copiar</button>
        `
    }, 1000)
}
function copiarTexto() {
    const textoEncriptado = document.querySelector('.resultado textarea');
    textoEncriptado.select();
    document.execCommand('copy');
}


function decencriptarTexto() {
    let texto = document.querySelector("#texto").value;
    texto = texto.toLowerCase();
    let textoEncriptado = texto.replace(/enter/mg, 'e');
    textoEncriptado = textoEncriptado.replace(/imes/mg, 'i');
    textoEncriptado = textoEncriptado.replace(/ai/mg, 'a');
    textoEncriptado = textoEncriptado.replace(/ober/mg, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/mg, 'u');
    mostrarHTML(textoEncriptado)
    document.querySelector("#texto").value = '';
}