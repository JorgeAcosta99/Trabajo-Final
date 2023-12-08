
window.onload = function(){
    tablaclientes();
}

let listaclientes = localStorage.getItem("Clientes");

listaclientes = JSON.parse(listaclientes);

const tablaclientes = () => {
    
    let miTabla = document.getElementById('miTabla')
    
    for(let i = 0; i < listaclientes.length; i++){
        let fila = document.createElement('tr');
        let celdaVehiculo = document.createElement('td');
        let celdaNombre = document.createElement('td');
        let celdaContacto = document.createElement('td');
        let celdaLocalidad = document.createElement('td');
        
        celdaVehiculo.textContent = listaclientes[i].nombrevehiculo;
        celdaNombre.textContent = listaclientes[i].nombrecompleto;
        celdaContacto.textContent = listaclientes[i].contactocliente;
        celdaLocalidad.textContent = listaclientes[i].localidad;
        
        fila.appendChild(celdaVehiculo);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaContacto);
        fila.appendChild(celdaLocalidad);
        
        miTabla.appendChild(fila);
        
    }
    
}

