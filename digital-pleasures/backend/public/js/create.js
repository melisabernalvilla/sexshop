window.addEventListener('load', () => {
    let formulario = document.querySelector('#formulario'); // Obtiene el formulario con el id "formulario"

    let nombre = document.querySelector('#nombre'); // Obtiene el campo de entrada con el id "nombre"
    let descripcion = document.querySelector('#descripción'); // Obtiene el campo de entrada con el id "descripción"
    let precio = document.querySelector('#precio'); // Obtiene el campo de entrada con el id "precio"
    let stock = document.querySelector('#stock'); // Obtiene el campo de entrada con el id "stock"
    let categorias = document.querySelector('#categorias'); // Obtiene el campo de selección con el id "categorias"
    let fotos = document.querySelector('#inputarchivo'); // Obtiene el campo de entrada de tipo archivo con el id "inputarchivo"
    let fecha = document.querySelector('#fecha'); // Obtiene el campo de entrada de tipo fecha con el id "fecha"
    let mayorEdad = document.querySelector('#mayorEdad'); // Obtiene el campo de verificación de mayor edad con el id "mayorEdad"

    let sumar = document.querySelector('#sumar'); // Obtiene el botón de envío con el id "sumar"

    let fechaActual = new Date();
    let fechaHoy = fechaActual.getFullYear() + '-' + String(fechaActual.getMonth() + 1).padStart(2, '0') + '-' + String(fechaActual.getDate()).padStart(2, '0'); // Calcula la fecha actual en el formato "YYYY-MM-DD"


    formulario.addEventListener('submit', function (event) { // Agrega un manejador de eventos cuando se envía el formulario
        let error = false; // Variable para rastrear errores en la validación

        // Validación para el campo "nombre"
        if (nombre.value.length == 0) {
            error = true;
            nombre.previousElementSibling.innerHTML = 'Por favor ingrese el nombre de su producto.'; // Muestra un mensaje de error
        } else if (nombre.value.length < 6) {
            error = true;
            nombre.previousElementSibling.innerHTML = 'El nombre del producto debe tener más de 6 caracteres.'; // Muestra un mensaje de error
        } else {
            nombre.previousElementSibling.innerHTML = ''; // Borra el mensaje de error si no hay problemas
        } 

        // Validación para el campo "descripción"
        if (descripcion.value.length == 0) {
            error = true;
            descripcion.previousElementSibling.innerHTML = 'Por favor ingrese una descripción.'; // Muestra un mensaje de error
        } else if (descripcion.value.length <= 20) {
            error = true;
            descripcion.previousElementSibling.innerHTML = 'La descripción del producto debe tener más de 20 caracteres.'; // Muestra un mensaje de error
        } else {
            descripcion.previousElementSibling.innerHTML = ''; // Borra el mensaje de error si no hay problemas
        }

        // Validación para el campo "precio"
        if (precio.value < 1) {
            error = true;
            precio.previousElementSibling.innerHTML = 'El Articulo no puede ser gratuito.'; // Muestra un mensaje de error
        } else {
            precio.previousElementSibling.innerHTML = ''; // Borra el mensaje de error si no hay problemas
        }

        // Validación para el campo "Stock"
        if (stock.value < 1) {
            error = true;
            stock.previousElementSibling.innerHTML = 'Tiene que contar al menos con 1 unidad.'; // Muestra un mensaje de error
        } else {
            stock.previousElementSibling.innerHTML = ''; // Borra el mensaje de error si no hay problemas
        }



        // Validación para el campo "fotos"
        if (fotos.value == '') {
            error = true;
            fotos.previousElementSibling.innerHTML = 'Por favor ingrese una foto.';
        } else if (!/\.(jpg|jpeg|png|gif)$/i.test(fotos.value)) {
            error = true;
            fotos.previousElementSibling.innerHTML = 'El formato de la imagen no es válido. Solo se permiten archivos JPG, JPEG, PNG o GIF.';
        } else {
            fotos.previousElementSibling.innerHTML = '';
        }

        //Valifación para el campo "Fecha"        
        fecha.max = fechaHoy; // Establece la fecha máxima en el campo de fecha como la fecha actual
        console.log(fecha.value);
        if (!fecha.value) {
            error = true;
            fecha.previousElementSibling.innerHTML = 'Por favor la fecha de creacion del producto no puede estar vacia.'; // Muestra un mensaje de error
        } else {
            fecha.previousElementSibling.innerHTML = ''; // Borra el mensaje de error si no hay problemas
        }


        if (error) event.preventDefault(); // Evita que el formulario se envíe si hay errores de validación.
    });
});
