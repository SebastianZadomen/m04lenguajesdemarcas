window.addEventListener('scroll', function () {
    const navbar = document.querySelector('#navbar');
    const scrollY = window.scrollY;
    const stickyThreshold = 200; // Distancia a la que se activa el sticky (en píxeles)

    if (scrollY > stickyThreshold) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
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