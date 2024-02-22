import '../components/styles/styles.css';

// const Register = () => {

//   return (
//     <>
//     <main className="pageAccesoJ">
//         <h1 className="tituloAccesoJ">¡HOLA!</h1>
//         <p className="parrafoAccesoJ">Bienvenid@s a EcoPop</p>
//         <div className="AccesoUsuarioJ">
//             <form id="logingformJ">
//                 <input type="text" id="mailJ" required placeholder="Correo electrónico" />
//                 <input type="password" id="passwordJ" required placeholder="Contraseña" />
//                 <input className="registrateJ" type="submit" value="Ingresar" />
//             </form>
//         </div>
//         <div className="contenedorDeBotonesJ">
//             <a href="acceso2.html"><span>Si no tienes una cuenta: </span> <button className="registrateJ">Regístrate</button></a>
//         </div>
//     </main>
//     </>
//   )
// }

// export default Register

import { useState } from 'react';
import { useNavigate } from 'react-router'; 

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

  
    if (!email || !password) {
      alert('Por favor, completa todos los campos');
      return;
    }
    
    alert('Cuenta creada correctamente');
    alert(`Bienvenido ${name}`)
    navigate('/'); 

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <main className="pageAccesoJ">
        <h1 className="tituloAccesoJ">¡HOLA!</h1>
        <p className="parrafoAccesoJ">Bienvenid@s a EcoPop</p>
        <div className="AccesoUsuarioJ">
          <form id="logingformJ" onSubmit={handleFormSubmit}>
            <input type="text" id='name' required placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" id="mailJ" required placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" id="passwordJ" required placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input className="registrateJ" type="submit" value="Registrar" />
          </form>
        </div>
        <div className="contenedorDeBotonesJ">
        <span>Si no tienes una cuenta: </span>{' '}
          <a href="/signup">
            <button className="registrateJ">Regístrate</button>
          </a>
        </div>
      </main>
    </>
  );
};

export default Register;