let clientes = [];

export function aniadirCliente(cliente) {
    clientes.push(cliente);

}


export function modificarCliente(){
    indice = clientes.indexOf(cliente.DNI)
    clientes[indice] = cliente;
}

export function eliminarCliente(dni){
    indice = clientes.indexOf(clientes.DNI) 
    clientes.splice(indice);
}


export function leerCliente(dni){
    return clientes.find(cliente => clientes.DNI)
}

export function mostrarTodosLosCliente(){
    return clientes;
}