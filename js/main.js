/* User del admin */
let ceo = {
    user: 'admin@gmail.com',
    pass: 'admin'
}


function login() {   
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (email == "" || password == "") { 
        alert("Por favor ingrese un usuario y contraseña")
    } 

    if (ceo.user == email && ceo.pass == password){
        location.href = "../pages/cargardatos.html"
    }
    else{
        alert("Usuario o contraseña incorrecta")
    }
}

