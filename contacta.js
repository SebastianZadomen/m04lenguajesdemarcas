
document.getElementById("contacta").addEventListener("submit", function (event) {

    validarDatos(event);

});

function  validarDatos(event) {
    let nombre = document.getElementById("name");
    let gmail = document.getElementById("mail");
    let titulo = document.getElementById("text");
    let msg = document.getElementById("msg");

    let valido = true;
    let errores = [];
    if (!nombre.value ) {
        errores.push("-- Introduce un nombre valido.");
        valido = false;
    }
    if (nombre.value.length < 2){
        errores.push("-- El nombre introducido es muy corto.");
        valido = false;
    }
    if (!gmail.value ) {
        errores.push("-- Introduce un correo electronico valido.");
        valido = false;
    }
    if (!titulo.value || titulo.value.length < 2) {
        errores.push("-- El texto introducido es muy corto.");
        valido = false;
    }
    if (!msg.value || msg.value.length < 2 ) {
        errores.push("-- El texto introducido es muy corto.");
        valido = false;
    }
    if (!valido) {
        event.preventDefault();
        let divErrores = document.getElementById("errors");
        divErrores.innerHTML = "";
        for (let error of errores) {
            divErrores.append(error);
            divErrores.appendChild(document.createElement("br"));
        }
    }

    console.log(valido);
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('#navbar');
    const scrollY = window.scrollY;

    if (scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});