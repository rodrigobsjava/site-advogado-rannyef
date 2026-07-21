document.addEventListener('DOMContentLoaded', () => {
    // Código JavaScript aqui
    const $burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    $burgers.forEach(element => {
        element.addEventListener('click', () => {
            const target = document.getElementById(element.dataset.target);
            element.classList.toggle('is-active');
            target.classList.toggle('is-active');
        });
    });
});