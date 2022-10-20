let nombre = 'Paulo';
let apellido = 'Maldonado';
let edad = 28;
let correo = 'paulo@gmail.com';

function saludar() {
    console.log('Holaaaa')
}

const sumar = (valor1, valor2) => console.log(`La suma entre ${valor1} y ${valor2} es: ${valor1 + valor2}`);

let listaDeCompras = ["Apio", "Carne", "Pollo", "Pepino", "Zanahoria"];

module.exports = { nombre, apellido, edad, correo, saludar, listaDeCompras, sumar };
