
// Declaración de variables
let resultado = "";
let resultadoAnterior = "";
let numActual = "";
let num1 = "";
let num2 = "";
let operador = ""; // Almacena el operador aritmético
let memoria = 0;

// Funciones de la calculadora

// Agregar un dígito al numero total
function agregarNum(digito) {
    numActual = String(numActual) + String(digito);
}

function agregarDecimal() {
    if (!numActual.includes(".")) {
        numActual = String(numActual) + ".";
    }
}

function agregarOperador(op) {
    if (numActual !== "") {
        num1 = numActual;
        operador = op;
        mostrarOperador();
    } else if (resultado !== "") {
        num1 = resultado;
        operador = op;
        mostrarOperador();
    }
}

function mostrarOperador() {
    numActual = operador;
}

// Borrar un dígito al número total
function borrarNum() {
    numActual = numActual.slice(0, -1);
    actualizarPantalla();
}

// Limpia el número actual
function limpiar() {
    num1 = "";
    num2 = "";
    operador = "";
    resultado = "";
    resultadoAnterior = "";
    memoria = 0;
    numActual = ""; //Limpia el número asignando directamente un String vacío
    actualizarPantalla();
}

// Realiza la operación matemática
function operar() {

    resultadoAnterior = resultado; // Para guardar el resultado anterior
    num1 = parseFloat(num1);
    num2 = parseFloat(numActual);

    // Código para eliminar el signo de la cadena del número actual
    // para evitar errores de conversión
    if (numActual[0] == "+" || numActual[0] == "-" || numActual[0] == "*" || numActual[0] == "/" || numActual[0] == "%") {
        num2 = Number(String(numActual).slice(1));
    }

    switch (operador) {
        case "+": resultado = num1 + num2; break;
        case "-": resultado = num1 - num2; break;
        case "*": resultado = num1 * num2; break;
        case "/": resultado = num2 !== 0 ? num1 / num2 : "Error"; break;
        case "%": resultado = num1 % num2; break;
        case "m+": resultado += memoria; break;
        case "m-": resultado -= memoria; break;
    }

    num1 = resultado;
    numActual = "";
    actualizarPantalla();
}

function guardarMemoria() {
    if (numActual !== "") {
        memoria = parseFloat(numActual);
    } else {
        memoria = parseFloat(resultado);
    }
}

// Escribe el resultado en pantalla
function actualizarPantalla() {

    //Pantalla de resultados
    const pantalla1 = document.querySelector(".resultado");
    pantalla1.innerText = String(numActual !== "" ? numActual : resultado);

    // Pantalla de memoria
    const pantalla2 = document.querySelector(".memoria-pantalla");
    pantalla2.innerText = String("M= " + memoria);

    //Pantalla resultado anterior
    const pantalla3 = document.querySelector(".resultado-anterior");
    pantalla3.innerText = String("Resultado anterior= " + resultadoAnterior);

}

function click() {
    const uno = document.getElementById("1");
    const dos = document.getElementById("2");
    const tres = document.getElementById("3");
    const cuatro = document.getElementById("4");
    const cinco = document.getElementById("5");
    const seis = document.getElementById("6");
    const siete = document.getElementById("7");
    const ocho = document.getElementById("8");
    const nueve = document.getElementById("9");
    const cero = document.getElementById("0");
    const decimal = document.getElementById("decimal");
    const sumar = document.getElementById("sumar");
    const restar = document.getElementById("restar");
    const multiplicar = document.getElementById("multiplicar");
    const dividir = document.getElementById("dividir");
    const modulo = document.getElementById("modulo");
    const igual = document.getElementById("igual");
    const limpiarBtn = document.getElementById("limpiar");
    const borrarBtn = document.getElementById("borrar");
    const memoriaPantalla = document.getElementById("memoria");
    const memoriaMas = document.getElementById("m+");
    const memoriaMenos = document.getElementById("m-");

    uno.addEventListener("click", function () { agregarNum(1); actualizarPantalla(); });
    dos.addEventListener("click", function () { agregarNum(2); actualizarPantalla(); });
    tres.addEventListener("click", function () { agregarNum(3); actualizarPantalla(); });
    cuatro.addEventListener("click", function () { agregarNum(4); actualizarPantalla(); });
    cinco.addEventListener("click", function () { agregarNum(5); actualizarPantalla(); });
    seis.addEventListener("click", function () { agregarNum(6); actualizarPantalla(); });
    siete.addEventListener("click", function () { agregarNum(7); actualizarPantalla(); });
    ocho.addEventListener("click", function () { agregarNum(8); actualizarPantalla(); });
    nueve.addEventListener("click", function () { agregarNum(9); actualizarPantalla(); });
    cero.addEventListener("click", function () { agregarNum(0); actualizarPantalla(); });
    decimal.addEventListener("click", function () { agregarNum("."); actualizarPantalla(); });
    sumar.addEventListener("click", function () { agregarOperador("+"); actualizarPantalla(); });
    restar.addEventListener("click", function () { agregarOperador("-"); actualizarPantalla(); });
    multiplicar.addEventListener("click", function () { agregarOperador("*"); actualizarPantalla(); });
    dividir.addEventListener("click", function () { agregarOperador("/"); actualizarPantalla(); });
    modulo.addEventListener("click", function () { agregarOperador("%"); actualizarPantalla(); });
    igual.addEventListener("click", function () { operar(); });
    limpiarBtn.addEventListener("click", function () { limpiar(); actualizarPantalla(); });
    borrarBtn.addEventListener("click", function () { borrarNum(); actualizarPantalla(); });
    memoriaPantalla.addEventListener("click", function () { guardarMemoria(); actualizarPantalla(); });
    memoriaMas.addEventListener("click", function () { agregarOperador("m+"); operar(); actualizarPantalla(); });
    memoriaMenos.addEventListener("click", function () { agregarOperador("m-"); operar(); actualizarPantalla(); });
}

click();