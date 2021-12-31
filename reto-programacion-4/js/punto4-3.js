

let incorrecto = true;

while (incorrecto) {
    const respuesta = prompt('¿cuanto es 2 + 2?');
    if(respuesta == 4){
        incorrecto = false;
        console.log('felicidades la respuesta es correcta')
    }
}
