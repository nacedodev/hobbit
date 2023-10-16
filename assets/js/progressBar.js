// script.js
const bar = document.getElementById('myProgressBar');
let isAnimating = false;

export function progressBar(duration) {
    if (isAnimating) return; // Evita iniciar una nueva animación si ya está en progreso
    isAnimating = true;

    bar.style.animation = 'none'; // Desactiva la animación para reiniciar inmediatamente al 0%
    bar.style.width = '0'; // Reinicia la barra de progreso al 0%

    // Retrasa un breve momento para asegurarse de que la reinicialización se refleje
    setTimeout(() => {
        bar.style.animation = `fillProgressBar ${duration / 1000}s linear`; // Reactiva la animación
        bar.style.width = '100%'; // Establece el ancho al 100% para iniciar la animación
    }, 10);

    setTimeout(() => {
        isAnimating = false;
    }, duration);
}

