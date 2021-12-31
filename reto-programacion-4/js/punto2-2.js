const nombre = "ulises";
const apellido = "acosta";
const completeName = nombre +' '+ apellido;
const nickname = "udAcosta";

const nombrePersona = (nombreCompleto, apodo ) => {
    console.log("Mi nombre es " + nombreCompleto + ", pero prefiero que me digas " + apodo + ".")
}

nombrePersona( completeName, nickname)

