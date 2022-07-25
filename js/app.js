const imagenes = document.querySelectorAll('.propiedad__imagen');

window.addEventListener('scroll', (e) => {
    const scroll = this.scrollY / -20;

    imagenes.forEach((imagen) => {
        imagen.style.backgroundPositionY = `${scroll}px`;
    });
});