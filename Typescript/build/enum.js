"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
const d = new Date();
var cores;
(function (cores) {
    cores["vermelho"] = "#FF0000";
    cores["verde"] = "#00FF00";
    cores["azul"] = "#0000FF";
    cores["amarelo"] = "#FFFF00";
    cores["roxo"] = "#800080";
})(cores || (cores = {}));
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["admin"] = 0] = "admin";
    tipoUsuario[tipoUsuario["user"] = 1] = "user";
    tipoUsuario[tipoUsuario["author"] = 2] = "author";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.admin);
