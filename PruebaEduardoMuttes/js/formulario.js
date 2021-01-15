
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    departamento: /^(Artigas|Canelones|Montevideo|Salto)/,
    localidad: /^(Artigas|Bella\sUnión|Canelones|Santa\sLucía|Montevideo|Salto|Daymán|Arapey)/,
    ci: /^[0-9]/
}

const campos = {
    nombre: false,
    apellido: false,
    email: false,
    ci: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo_nombre').classList.remove('formulario_grupo_incorrecto');
                document.querySelector('#grupo_nombre .formulario_error').classList.remove('formulario_error_active');
                campos['nombre'] = true;
            } else {
                document.getElementById('grupo_nombre').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_nombre .formulario_error').classList.add('formulario_error_active');
                campos['nombre'] = false;
            }
        break;
        case "apellido":
            if(expresiones.apellido.test(e.target.value)){
                document.getElementById('grupo_apellido').classList.remove('formulario_grupo_incorrecto');
                document.querySelector('#grupo_apellido .formulario_error').classList.remove('formulario_error_active');
                campos['apellido'] = true;
            } else {
                document.getElementById('grupo_apellido').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_apellido .formulario_error').classList.add('formulario_error_active');
                campos['apellido'] = false;
            }
         
        break;
        case "email":
            if(expresiones.email.test(e.target.value)){
                document.getElementById('grupo_email').classList.remove('formulario_grupo_incorrecto');
                document.querySelector('#grupo_email .formulario_error').classList.remove('formulario_error_active');
                campos['email'] = true;
            } else {
                document.getElementById('grupo_email').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_email .formulario_error').classList.add('formulario_error_active');
                campos['email'] = false;
            }
         
        break;
        case "departamento":
            if(expresiones.departamento.test(e.target.value)){
                document.getElementById('grupo_departamento').classList.remove('formulario_grupo_incorrecto');
                document.querySelector('#grupo_departamento .formulario_error').classList.remove('formulario_error_active');
                campos['departamento'] = true;
            } else {
                document.getElementById('grupo_departamento').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_departamento .formulario_error').classList.add('formulario_error_active');
                campos['departamento'] = false;
            }
         
        break;
        case "localidad":
            if(expresiones.localidad.test(e.target.value)){
                document.getElementById('grupo_localidad').classList.remove('formulario_grupo_incorrecto');
                document.querySelector('#grupo_localidad .formulario_error').classList.remove('formulario_error_active');
                campos['localidad'] = true;
            } else {
                document.getElementById('grupo_localidad').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_localidad .formulario_error').classList.add('formulario_error_active');
                campos['localidad'] = false;
            }
        break;
        case "ci":
            if(expresiones.ci.test(e.target.value)){
                document.getElementById('grupo_ci').classList.remove('formulario_grupo_incorrecto');
                document.querySelector('#grupo_ci .formulario_error').classList.remove('formulario_error_active');
                campos['ci'] = true;
            } else {
                document.getElementById('grupo_ci').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_ci .formulario_error').classList.add('formulario_error_active');
                campos['ci'] = false;
            }
        break;     
        
    }
};


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
    input.addEventListener('onfocus', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
const terminos = document.getElementById('terminos');
    if(campos.nombre && campos.apellido && campos.email && campos.ci && terminos.checked) {
        formulario.reset();

        document.getElementById('formulario_mensaje_exito').classList.add('formulario_mensaje_exito_active')
        setTimeout(() => {
            document.getElementById('formulario_mensaje_exito').classList.remove('formulario_mensaje_exito_active')

        }, 5000);
    } else {
        document.getElementById('formulario_mensaje').classList.add('formulario_mensaje_active');
        setTimeout(() => {
            document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje_active')

        }, 5000);
    }
});