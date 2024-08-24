document.addEventListener("DOMContentLoaded", function() {
    //datos
    const formulario = document.getElementById("formulario") ;
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const contraseña = document.getElementById("contraseña");
  
   //errores 
   const errorNombre = document.getElementById("errorNombre");
   const errorCorreo = document.getElementById("errorCorreo");
   const errorContraseña = document.getElementById("errorContraseña");

   formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío predeterminado
    let hayErrores = false;

    // Validación del nombre
    if (nombre.value.trim() === "") {
        errorNombre.style.display = "block";
        hayErrores = true;
    } else {
        errorNombre.style.display = "none";
    }

    // Validación del correo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo.value)) {
      errorCorreo.style.display = "block";
      hayErrores = true;
    } else {
      errorCorreo.style.display = "none";
    }

    // Validación de la contraseña
    if (contraseña.value.length < 8) {
      errorContraseña.style.display = "block";
      hayErrores = true;
    } else {
      errorContraseña.style.display = "none";
    }

    // Si no hay errores, se puede enviar el formulario
    if (!hayErrores) {
      formulario.submit();
    }

   });

    // Validación en tiempo real mientras se escribe
  nombre.addEventListener("input", function() {
    if (nombre.value.trim() === "") {
      errorNombre.style.display = "block";
    } else {
      errorNombre.style.display = "none";
    }
  });

  correo.addEventListener("input", function() {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo.value)) {
      errorCorreo.style.display = "block";
    } else {
      errorCorreo.style.display = "none";
    }
  });

  contraseña.addEventListener("input", function() {
    if (contraseña.value.length < 8) {
      errorContraseña.style.display = "block";
    } else {
      errorContraseña.style.display = "none";
    }
  });
});