const readlineSync = require('readline-sync');
let numeroDia= readlineSync.question("Por favor, un dia de la semana en formato numerico:");
switch (Number(numeroDia)) {
    case 1:
        console.log("Hoy es lunes");
        break;
    case 2:
        console.log("Hoy es martes");
        break;
    case 3:
        console.log("Hoy es miércoles");
        break;
    case 4:
        console.log("Hoy es jueves");
        break;
    case 5:
        console.log("Hoy es viernes")
        break;
    case 6:
        console.log("Hoy es sábado")
        break;
    case 7:
        console.log("Hoy es domingo")
        break;
    default:
        console.log("Número inválido")
        break;
}