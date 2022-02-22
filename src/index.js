import cipher from './cipher.js';

//Eventos para mostrar y ocultar mis secciones.
const mainScreen = document.getElementById("main-screen");

const hideEncrypt = document.getElementById("mainScreen-cipher");
hideEncrypt.classList.add("oculto");

const encryptBtn = document.getElementById("enterMainCipher");
encryptBtn.addEventListener("click", () => {
    mainScreen.classList.add("oculto");
    mainScreen.innerHTML = hideEncrypt.classList.remove("oculto");
});

const hideDecrypt = document.getElementById("mainDescipher");
hideDecrypt.classList.add("oculto");

const decryptBtn = document.getElementById("enterMainDescipher");
decryptBtn.addEventListener("click", () => {
    mainScreen.classList.add("oculto");
    mainScreen.innerHTML = hideDecrypt.classList.remove("oculto")
});

const hideHelp = document.getElementById("help-section");
hideHelp.classList.add("oculto");

const helpBtn = document.getElementById("help-main");
helpBtn.addEventListener("click", () => {
    mainScreen.classList.add("oculto").innerHTML = hideHelp.classList.remove("oculto");
});

const nav1Btn = document.getElementById("nav-link1");
nav1Btn.addEventListener("click", () => {
    mainScreen.classList.add("oculto");
    hideEncrypt.classList.remove("oculto");
    hideDecrypt.classList.add("oculto");
    hideHelp.classList.add("oculto");
});


const nav2Btn = document.getElementById("nav-link2");
nav2Btn.addEventListener("click", () => {
    mainScreen.classList.add("oculto");
    hideEncrypt.classList.add("oculto");
    hideDecrypt.classList.remove("oculto");
    hideHelp.classList.add("oculto");
});

const nav3Btn = document.getElementById("nav-link3");
nav3Btn.addEventListener("click", () => {
    mainScreen.classList.add("oculto");
    hideEncrypt.classList.add("oculto");
    hideDecrypt.classList.add("oculto");
    hideHelp.classList.remove("oculto");
});

//Función para que corra Cifrar
const runCipher = document.getElementById("enterCipher");
runCipher.addEventListener("click", () => {
    let number = document.getElementById("key").value;
    let offset = parseInt(number);
    let text = document.getElementById("cipherText").value;
    let string = text.toUpperCase();
    const resultCipher = cipher.encode (offset, string);
    let msg = document.getElementById("encodedText");
    msg.innerText = resultCipher;
});

//Para limpiar pantalla Cifrar
const cleanCipher = document.getElementById("clean");
cleanCipher.addEventListener("click", () => {
    let number = document.getElementById("key");
    let text = document.getElementById("cipherText");
    let msg = document.getElementById("encodedText");
    number.value = ""
    text.value = ""
    msg.innerText = ""
})

//Función para que corra descifrar
const runDescipher = document.getElementById("enter-descipher");
runDescipher.addEventListener("click", () => {
    let number = document.getElementById("keyNumber").value;
    let offset = parseInt(number);
    let text = document.getElementById("textDescipher").value;
    let string = text.toUpperCase();
    const resultDescipher = cipher.decode (offset, string);
    let msg2 = document.getElementById("decodedText");
    msg2.innerText = resultDescipher;
});

//Para limpiar pantalla Descifrar
const cleanDescipher = document.getElementById("cleaner");
cleanDescipher.addEventListener("click", () => {
    let number = document.getElementById("keyNumber");
    let text = document.getElementById("textDescipher");
    let msg = document.getElementById("decodedText");
    number.value = ""
    text.value = ""
    msg.innerText = ""
})

