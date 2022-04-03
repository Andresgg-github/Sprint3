const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

// Get the input fields
var namePrimer = document.querySelector('.name_p');
var nombre = document.querySelector('.nombrecito');

var password = document.querySelector(".pasworcito");
var phone = document.querySelector('.telefoncito');


// Get the error elements
var errorName = document.getElementById('errorName');
var errorPassword = document.getElementById("errorPassword");
var errorPhone = document.getElementById('errorPhone');


//expresiones regulares
var regex = {
    nombre: /^[a-zA-Z]+$/,
    password: /^[a-z-A-Z0-9]{4,8}$/,
    email: /^[a-zA-Z][a-zA-Z0-9_-]+@[a-zA-Z]+.[a-zA-Z0-9-.]+$/,
    telefono: /\+?[\d]{9,12}$/,
    direccion: /[\w\s,.-]{5,30}$/
    
};


// Exercise 6


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();


});

const validarFormulario = (e) => {
    switch (e.target.name) {

        case 'usuario':
            validate(regex.nombre,e.target.value,'grupo__usuario','errorName','.nombrecito');
            // if (regex.nombre.test(e.target.value)) { //El mininmo length se comprueba en html 
            //     document.getElementById('grupo__usuario').classList.add('valido');
            //     document.getElementById('grupo__usuario').classList.remove('novalido');
            //     // document.getElementById('inputName').classList.remove('novalido');
            //     // document.querySelector('.nombrecito').classList.add('valido');
            //     document.querySelector('.nombrecito').style.backgroundColor = 'rgb(196, 240, 201)';
            //     document.getElementById('errorName').style.display='none';
               


            // } else {
            //     document.querySelector('.nombrecito').style.backgroundColor = 'rgb(240, 196, 196)';
            //     document.getElementById('grupo__usuario').classList.add('novalido');
            //     document.getElementById('grupo__usuario').classList.remove('valido');
            //     document.getElementById('errorName').style.display='block';
               
            // }
            break;

        case 'emiliano':
            validate(regex.email,e.target.value,'grupo__email','errorEmail','.emilio');
            // if (regex.email.test(e.target.value)) { //El mininmo length se comprueba en html 
            //     document.getElementById('grupo__email').classList.add('valido');
            //     document.getElementById('grupo__email').classList.remove('novalido');
            //     document.querySelector('.emilio').style.backgroundColor = 'rgb(196, 240, 201)';
            //     document.getElementById('errorEmail').style.display='none';

            // } else {
            //     document.querySelector('.emilio').style.backgroundColor = 'rgb(240, 196, 196)';
            //     document.getElementById('grupo__email').classList.add('novalido');
            //     document.getElementById('grupo__email').classList.remove('valido');
            //     document.getElementById('errorEmail').style.display='block';
            // }
            break;

        case 'direczione':
            validate(regex.direccion,e.target.value,'grupo__direccion','errorAddress','.direccion');
            // if (regex.direccion.test(e.target.value)) { //El mininmo length se comprueba en html 
            //     document.getElementById('grupo__direccion').classList.add('valido');
            //     document.getElementById('grupo__direccion').classList.remove('novalido');
            //     document.querySelector('.direccion').style.backgroundColor = 'rgb(196, 240, 201)';
            //     document.getElementById('errorAddress').style.display='none';

            // } else {
            //     document.querySelector('.direccion').style.backgroundColor = 'rgb(240, 196, 196)';
            //     document.getElementById('grupo__direccion').classList.add('novalido');
            //     document.getElementById('grupo__direccion').classList.remove('valido');
            //     document.getElementById('errorAddress').style.display='block';
            // }
            break;

        case 'surname':
            validate(regex.nombre,e.target.value,'grupo__surname','errorLastN','.apellidito');
            // if (regex.nombre.test(e.target.value)) { //El mininmo length se comprueba en html 
            //     document.getElementById('grupo__surname').classList.add('valido');
            //     document.getElementById('grupo__surname').classList.remove('novalido');
               
            //     document.querySelector('.apellidito').style.backgroundColor = 'rgb(196, 240, 201)';
            //     document.getElementById('errorLastN').style.display='none';

            // } else {
            //     document.querySelector('.apellidito').style.backgroundColor = 'rgb(240, 196, 196)';
            //     document.getElementById('grupo__surname').classList.add('novalido');
            //     document.getElementById('grupo__surname').classList.remove('valido');
            //     document.getElementById('errorLastN').style.display='block';
            // }
            break;

        case 'pass':
            validate(regex.password,e.target.value,'grupo__pass','errorPassword','.pasworcito');
            // if (regex.password.test(e.target.value)) { //El mininmo length se comprueba en html 
            //     document.getElementById('grupo__pass').classList.add('valido');
            //     document.getElementById('grupo__pass').classList.remove('novalido');
               
            //     document.querySelector('.pasworcito').style.backgroundColor = 'rgb(196, 240, 201)';
            //     document.getElementById('errorPassword').style.display='none';

            // } else {
            //     document.querySelector('.pasworcito').style.backgroundColor = 'rgb(240, 196, 196)';
            //     document.getElementById('grupo__pass').classList.add('novalido');
            //     document.getElementById('grupo__pass').classList.remove('valido');
            //     document.getElementById('errorPassword').style.display='block';
            // }
            break;

        case 'fone':
            validate(regex.telefono,e.target.value,'grupo__fone','errorPhone','.telefoncito');
            // if (regex.telefono.test(e.target.value)) { //El mininmo length se comprueba en html 
            //     document.getElementById('grupo__fone').classList.add('valido');
            //     document.getElementById('grupo__fone').classList.remove('novalido');
               
            //     document.querySelector('.telefoncito').style.backgroundColor = 'rgb(196, 240, 201)';
            //     document.getElementById('errorPhone').style.display='none';

            // } else {
            //     document.querySelector('.telefoncito').style.backgroundColor = 'rgb(240, 196, 196)';
            //     document.getElementById('grupo__fone').classList.add('novalido');
            //     document.getElementById('grupo__fone').classList.remove('valido');
            //     document.getElementById('errorPhone').style.display='block';
            // }
            break;
    }
}




inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


function validate(expresion,valor,id,error,clase) {

    if (expresion.test(valor)) { //El mininmo length se comprueba en html 
        document.getElementById(id).classList.add('valido');
        document.getElementById(id).classList.remove('novalido');
       
        document.querySelector(clase).style.backgroundColor = 'rgb(196, 240, 201)';
        document.getElementById(error).style.display='none';

    } else {
        document.querySelector(clase).style.backgroundColor = 'rgb(240, 196, 196)';
        document.getElementById(id).classList.add('novalido');
        document.getElementById(id).classList.remove('valido');
        document.getElementById(error).style.display='block';
    }

   

    // Validate fields entered by the user: name, phone, password, and email


};