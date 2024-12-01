window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

document.querySelectorAll('.cuadro').forEach(function(cuadro) {
    cuadro.addEventListener('click', function() {
        cuadro.classList.toggle('activo');
    });
});

document.querySelectorAll('.cuadro').forEach(function(cuadro) {
    cuadro.addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('nav-activada');
    });
});