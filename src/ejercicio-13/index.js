// Escribe tu código aquí:
function contadorClosures(){
    let cont=0
    return function(){
        cont ++
        return cont
    }
}
 const incremento=contadorClosures()
 console.log(incremento())
 console.log(incremento())