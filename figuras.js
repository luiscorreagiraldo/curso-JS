// Código del cuadrado//
console.group('Cuadrado');


function perimetrocuadrado (lado){
    return lado * 4;
}


function areacuadrado (lado){
    return lado*lado
}
console.groupEnd()



console.group('Triángulo')
function perimetrotriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areatriangulo (base,altura){
    return (base * altura) / 2;}

console.groupEnd()




console.group('Circulo')
function diametrocirculo(radio){
    return radio*2
}
const PI = Math.PI;


function perimetrocirculo (radio){
    const diametro = diametrocirculo(radio);
    return diametro * PI;
}
function areacirculo(radio){
 return (radio*radio) * PI;
}
console.groupEnd()