import { aniadirCliente } from "./clienteManager.js";

let clientesArray = [];

function nuevoAniadirCliente() {
    event.preventDefault();
    console.log(document.querySelector('#nombre').value);
    const cliente = {
        nombre: document.querySelector('#nombre').value,
        DNI: document.querySelector('#DNI').value,
        telefono: document.querySelector('#telefono').value,
        direccion: document.querySelector('#direccion').value,
    };

    const mensaje = aniadirCliente(cliente);
    document.querySelector('#mensaje').innerHTML = mensaje;
    document.forms[0].reset;
}

window.nuevoAniadirCliente = nuevoAniadirCliente;
