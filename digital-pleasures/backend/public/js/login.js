window.addEventListener('load', () => {
    let formulario = document.querySelector('#formulario');


    let email = document.querySelector('#username')
    let password = document.querySelector('#password')

    function correoReal(correo) {
        // Utilizamos una expresión regular para verificar el formato
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(correo);
      }

    console.log('El Script Funciona')

    formulario.addEventListener('submit', function (event) {

        let error = false
        let correo = correoReal(email)
        if (email.value.length == 0) {
            error = true
            email.previousElementSibling.innerHTML = 'Por Favor ingrese su email'
        } else if (correo) {
            email.previousElementSibling.innerHTML = 'La direccion del correo debe ser real'
        } else email.previousElementSibling.innerHTML = ''
            error = true
            email.previousElementSibling.innerHTML = 'Por Favor ingrese su email'
        })

        let passLength = password.value.length
        if (passLength == 0) {
            error = true
            password.previousElementSibling.innerHTML = 'Por Favor ingrese una contraseña'
        } else if (passLength < 6) {
            error = true
            password.previousElementSibling.innerHTML = 'La contraseña debe tener 6 caracteres o mas'
        }else password.previousElementSibling.innerHTML = ''


        if (error) event.preventDefault()
    })


