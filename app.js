//TODO: Que es Node?
//* Es un entorno que nos permite ejecutar codigo javascript sin necesidad del navegador web
//* Interactua con el sistema operativo(archivos y red)
//* usa javascript como servidor
//* nos permite utilizar js como backend
//* utiliza el motor v8 mismo que ocupa google chrome(Dispone de pilas de llamadas, que va agregando las diferentes tareas que vamos colocando en nuestro codigo)
//* WINDOW NO EXISTE EN NODE solo en el navegador
//! ENSEÑAR COOMO CAMBIAR O DEFINIR TERMINAL EN VS CODE (BASH)
//Todo: Descargar node // node -v // consola node(se puede pasar js) // podemos salir de esa consola con ctrl + C // comand + c

//Normalmente colocamos el codigo de node en funciones, mas adelante podemos exportarla e importarla

console.log('Holaa')

//!Ejercicio 1

//*BREAK 10 MIN TEMPORIZADOR 

//todo: NPM ES UN SISTEMA DE GESTION DE PAQUETES POR DEFECTO PARA NODE.js , el cual nos permite la instalacion de librerias para nuestro js


//* Como iniciar un proyecto en Node?
//npm init o npm init -y

//* Explicar que es el archivo package.json 

//* Como instalar modulos en node // -g // Nodemon 
// Para mac se ocupa la palabra sudo antes, ya que nos permite instalarlo como administrador
// para verficar si un paquete esta instalado  es nombre del paquete -v

//*BREAK 10 MIN TEMPORIZADOR

//!Ejercicio 2

//TODO: como usar subir un repositorio a github usando librerias en node

//GIT INIT 
//GIT REMOTE ADD ORIGIN HTTPS://
//NO SE SUBE NODE_MODULES
/* CREAMOS ARCHIVO .GITIGNORE, Y ESPECIFICO QUE CARPETA IGNORARE */
//GIT ADD, GIT COMMIT , GIT PUSH ORIGIN NAMEbRANCH(SI TENEMOS VARIAS RAMAS ), GIT PUSH

//TODO: IMPORTAR Y EXPORTAR UN ARCHIVO JAVASCRIPT

// SOLO SE PUEDE HACER UN MODULE.EXPORT POR ARCHIVO , PERO SI QUIERO EXPORTAR MAS COSAS DE UN ARCHIVO OCUPO {}
// EN EL IMPORT , YO PUEDO DESTRUCTURAR UN ARCHIVO
// EXPORTAR TAMBEIN FUNCIONES Y ARRAYS

const usuarios = require('./usuarios');
//Desctructuracion de objetos
let { nombre, apellido, saludar, listaDeCompras, sumar } = usuarios;

console.log(usuarios)
console.log(`Bienvenido ${nombre + ' ' + apellido}`);
saludar()
console.log(listaDeCompras[1])

sumar(7, 8);
//* BREAK 10MIN Temporizador

