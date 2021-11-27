// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }else{
                    RegistrarPersona();
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

function RegistrarPersona(){
    //alert('Todo esta correctamente');
    let nombres = document.querySelector('#txtNombres').value;
    let apellidos = document.querySelector('#txtApellidos').value;
    let correo = document.querySelector('#txtCorreo').value;
    let celular = document.querySelector('#txtCelular').value;
}