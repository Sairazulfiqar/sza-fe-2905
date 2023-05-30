let temporal = 0;
let operacion = '';
var input = document.getElementById('inputID');

function add(num) {
if (num == 0) {
    if (input.value [input.value.length - 1] != '0' || input.value.length > 1) {
        input.value = input.value + num;
    }
} else if (num == '.') {
    if (input.value [input.value.length - 1] != '.' && input.value != '') {
        input.value = input.value + num;
    }
} else {
    input.value = input.value + num;
}
}

function operador(operador) {
    operacion = operador;
    temporal = input.value;
    input.value = '';
}

function igual() {
    if (operacion != '') {
        input.value = eval(temporal + operacion + input.value);
    }
}

function inverso() {
  input.value = input.value * -1;
}

function porciento() {
    input = input.value / 100;
}

function cuadrado() {
  input.value = input.value ** 2;
}

function cubo() {
  input.value = input.value ** 3;
}

function raiz() {
  input.value = input.value ** 0.5;
}

function pi() {
    input = 3.14596;
}

function cleanInput() {
    if (input.value != '') {
        input.value = '';
} else {
    temporal = 0;
    operacion = '';
    }
}

function memoryplus() {
    memory = memory + input.value;
    input.value = ''
}