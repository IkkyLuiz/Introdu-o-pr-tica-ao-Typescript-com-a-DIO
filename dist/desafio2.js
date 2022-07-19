"use strict";
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho || (Trabalho = {}));
let pessoa1 = {
    nome: 'isabela',
    idade: 29,
    profissao: Trabalho.Atriz
};
let pessoa2 = {
    nome: 'heleno',
    idade: 19,
    profissao: Trabalho.Padeiro
};
let pessoa3 = {
    nome: 'beatriz',
    idade: 32,
    profissao: Trabalho.Atriz
};
let pessoa4 = {
    nome: "luiz",
    idade: 19,
    profissao: Trabalho.Padeiro
};
