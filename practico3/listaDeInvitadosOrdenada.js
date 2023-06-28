let personas=['Jose', 'Maria', 'Juan', 'Andres', 'Lionel', 'Sofia', 'Leandro', 'Emilia'];
let rechazados=[]
let admitidos=[]
for (let i=0; i<personas.length;i++){
    if (personas[i]=='Jose'||personas[i]=='Sofia') {
        rechazados.push(personas[i]);
    } else {
        admitidos.push(personas[i]);
    }
}
let admitidosOrdenados=admitidos.sort();
console.log('La lista ordenada de invitados admitidos es');
for (let i=0; i<admitidosOrdenados.length;i++) {
    console.log(admitidosOrdenados[i]);
}
let rechazadosOrdenados=rechazados.sort();
console.log('La lista ordenada de invitados rechazados es');
for (let i=0; i<rechazadosOrdenados.length;i++) {
    console.log(rechazadosOrdenados[i]);
}