const logingformJ = document.querySelector('#logingformJ')
logingformJ.addEventListener('submit', (e)=>{
    e.preventDefault()
const mailJ = document.querySelector('#mailJ').value
const passwordJ = document.querySelector('#passwordJ').value
const users = JSON.parse(localStorage.getItem('users')) || []
const validUser = users.find(user => user.email === mailJ && user.password === passwordJ)
if(!validUser){
    return alert('Usuario y/o Contraseña incorrectos!')
}
alert(`Bienvenido ${validUser.name}`)
window.location.href = 'index.html'


})