function nombreCompleto(nombre,apellido){
    return nombre+" "+apellido
}
const persona = new Object();
persona.nombre = "Juan";
persona.apellido = "Martinez";
persona.edad = 45;
persona.ultimoLogin = Date();
persona.vivo = true;
persona.nombreCompleto = nombreCompleto(persona.nombre,persona.apellido);
for(let propiedad in persona){
    console.log(`${propiedad} : ${persona[propiedad]}`)
}
