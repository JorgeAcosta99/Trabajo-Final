
let nombrevehiculo, nombrecompleto, contactocliente, localidad, pform;

let listaclientes = [];

const datos = () => {
    nombrevehiculo = document.getElementById('nombrevehiculo').value;
    nombrecompleto = document.getElementById('nombrecompleto').value;
    contactocliente = document.getElementById('contactocliente').value;
    localidad = document.getElementById('localidad').value
    pform = document.getElementById('pform');
}

const cargarDatos = () => {

    datos();

    let cliente = {
        nombrevehiculo, 
        nombrecompleto, 
        contactocliente, 
        localidad
    }
    console.log(cliente)

    listaclientes.push(cliente);
    localStorage.setItem("Clientes", JSON.stringify(listaclientes));

    pform.reset();
}