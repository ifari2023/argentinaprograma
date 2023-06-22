const readlineSync = require('readline-sync');
let mesNumero= readlineSync.question("Por favor, ingrese un mes(en formato numerico):");
let meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let cantidadDeDias;
if (mesNumero==2){
    cantidadDeDias=28;
}else if(mesNumero==4||mesNumero==6||mesNumero==9||mesNumero==11){
    cantidadDeDias=30;
}else{
    cantidadDeDias=31;
}
console.log('La cantidad de dias del mes de %s',meses[mesNumero-1],'es',cantidadDeDias);