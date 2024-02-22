const registroFormJ = document.querySelector('#registroFormJ')
registroFormJ.addEventListener('submit',(e)=>{
    e.preventDefault()

const mailJ = document.querySelector('#mailJ').value
const nameJ = document.querySelector('#nameJ').value
const lastnameJ = document.querySelector('#lastnameJ').value
const telefonoJ = document.querySelector('#telefonoJ').value
const passwordJ = document.querySelector('#passwordJ').value

const users = JSON.parse(localStorage.getItem('users')) || []
const usersRegister = users.find(user => user.email === mailJ)

if(usersRegister){
    return alert('El usuario ya esta registrado!')
}

users.push({email: mailJ, name: nameJ, lastname: lastnameJ, telefono: telefonoJ, password: passwordJ})
localStorage.setItem('users',JSON.stringify(users))
alert('Registro exitoso!')
window.location.href = 'acceso.html'

//////RE DERECCION A LOGING/////

})