const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.color = "#ff0095";
    mensaje.classList.add("opaca");
    mensaje.style.fontSize = "45px"; // Tamaño de letra más grande
    mensaje.style.fontWeight = "bold"; // Texto resaltado
    mensaje.style.backgroundImage = "url('Imagenes/ALIEN.png')"; // Cambia esto a la ruta de tu imagen
    mensaje.style.backgroundSize = "contain";
    mensaje.style.backgroundRepeat = "no-repeat";
    mensaje.style.backgroundPosition = "center";// Limpiar el texto del mensaje
}
//Definicion de la funcion
//Toma el parametro stringEncriptado
function encriptar(stringEncriptado){
    //se cre aun array con subarrays
    let matrizCodigo =  [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }

    return stringEncriptado;
} 

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "url('Imagenes/Ojo.png')"; // Cambia esto a la ruta de tu imagen inicial
    mensaje.style.backgroundSize = "contain";
    mensaje.style.backgroundRepeat = "no-repeat";
    mensaje.style.backgroundPosition = "center";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo =  [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }

    return stringDesencriptado;
} 


