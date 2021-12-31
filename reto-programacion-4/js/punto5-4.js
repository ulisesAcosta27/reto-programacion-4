const personas1 ={
    nombre: 'ulises', 
    apellido: 'acosta', 
    nombreUsuario: 'udAcosta', 
    id: '1857' 
};

const infoPersona = () =>{
    for(const recorrido in personas1) {
        console.log(`inforacion personas1: ${recorrido} => ${personas1[recorrido]}`);
    };
};

infoPersona();