"use strict";
let anyEstadeVolta;
anyEstadeVolta = 3;
anyEstadeVolta = 'teste';
anyEstadeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstadeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
let stringTeste2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
