
window.addEventListener('load', () => {
    let formulario = document.querySelector('#formulario');



    let nombre = document.querySelector('#nombre')
    let apellido = document.querySelector('#apellido')
    let fechaNacimiento = document.querySelector('#fechaNacimiento')
    let paisNacimiento = document.querySelector('#paisNacimiento')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let confirmPassword = document.querySelector('#confirmPassword')
    let fotoUsuario = document.querySelector('#fotoUsuario')


    const edadReal = (fecha) => {

        const fechaActual = new Date()
        const anioActual = parseInt(fechaActual.getFullYear())
        const mesActual = parseInt(fechaActual.getMonth()) + 1
        const diaActual = parseInt(fechaActual.getDate())


        const fechaValor = fecha.value;
        const fechaComponentes = fechaValor.split('-');

        const anioNacimiento = parseInt(fechaComponentes[0]);
        const mesNacimiento = parseInt(fechaComponentes[1]);
        const diaNacimiento = parseInt(fechaComponentes[2]);

        let edad = anioActual - anioNacimiento
        if (mesActual < mesNacimiento) {
            edad--
        } else if (mesActual === mesNacimiento) {
            if (diaActual < diaNacimiento) {
                edad--
            }
        }
        return edad

    };

    function correoReal(correo) {
        // Utilizamos una expresión regular para verificar el formato
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(correo);
      }

    console.log('El Script Funciona')


    formulario.addEventListener('submit', function (event) {

        let error = false



        if (nombre.value.length == 0) {
            error = true
            nombre.previousElementSibling.innerHTML = 'Por Favor ingrese el nombre de su profucto.'
        } else nombre.previousElementSibling.innerHTML = ''


        if (apellido.value.length == 0) {
            error = true
            apellido.previousElementSibling.innerHTML = 'Por Favor ingrese un Apellido'
        } else apellido.previousElementSibling.innerHTML = ''


        let edad = edadReal(fechaNacimiento)
        if (!edad) {
            error = true
            fechaNacimiento.previousElementSibling.innerHTML = 'Debes ingresar una fecha de nacimiento'
        } else if (edad < 18) {
            fechaNacimiento.previousElementSibling.innerHTML = 'Lo siento, pero debes ser mayor a 18 años'
        } else fechaNacimiento.previousElementSibling.innerHTML = ''


        if (paisNacimiento.value.length == 0) {
            error = true
            paisNacimiento.previousElementSibling.innerHTML = 'Debe indicar su pais de nacimiento'
        } else paisNacimiento.previousElementSibling.innerHTML = ''

        let correo = correoReal(email)
        if (email.value.length == 0) {
            error = true
            email.previousElementSibling.innerHTML = 'Por Favor ingrese su email'
        } else if (correo) {
            email.previousElementSibling.innerHTML = 'La direccion del correo debe ser real'
        } else email.previousElementSibling.innerHTML = ''

        const passLength = password.value.length
        if (passLength == 0) {
            error = true
            password.previousElementSibling.innerHTML = 'Por Favor ingrese una contraseña'
        } else if (passLength < 6) {
            error = true
            password.previousElementSibling.innerHTML = 'La contraseña debe tener 6 caracteres o mas'
        }else password.previousElementSibling.innerHTML = ''


        if (password.value !== confirmPassword.value) {
            error = true
            confirmPassword.previousElementSibling.innerHTML = 'Las Contraseñas deben coincidir'
        } else confirmPassword.previousElementSibling.innerHTML = null




        if (fotoUsuario.value == '') {
            error = true;
            fotoUsuario.previousElementSibling.innerHTML = 'Por favor ingrese una foto.';
        } else if (!/\.(jpg|jpeg|png|gif)$/i.test(fotoUsuario.value)) {
            error = true;
            fotoUsuario.previousElementSibling.innerHTML = 'El formato de la imagen no es válido. Solo se permiten archivos JPG, JPEG, PNG o GIF.';
        } else {
            fotoUsuario.previousElementSibling.innerHTML = '';
        }



        if (error) event.preventDefault()
    })


});