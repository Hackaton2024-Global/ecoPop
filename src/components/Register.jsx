import '../components/styles/styles.css';
import Swal from 'sweetalert2';
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
      Swal.fire('Por favor, completa todos los campos');
      return;
    }
    
    Swal.fire(`Bienvenido a EcoPop, ${name}`);
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