'use stric';
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario");
    const passwordInput = document.getElementById("exampleInputPassword1");

    form.addEventListener("submit", function(event) {
        const password = passwordInput.value;

        // Verificar la longitud de la contraseña
        if (password.length > 10) {
            alert("La contraseña no debe ser mayor de 10 caracteres");
            event.preventDefault();
            return;
        }

        // Contar la cantidad de números en la contraseña
        const numCount = (password.match(/\d/g) || []).length;

        // Verificar mínimo y máximo de números
        if (numCount < 1 || numCount > 2) {
            alert("La contraseña debe contener mínimo 1 número y máximo 2 números");
            event.preventDefault();
            return;
        }

        // Verificar la presencia de un caracter especial
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
            alert("La contraseña debe contener al menos un caracter especial");
            event.preventDefault();
            return;
        }
    });
});