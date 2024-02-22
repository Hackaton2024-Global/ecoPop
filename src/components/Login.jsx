import { useState } from 'react';
import '../components/styles/styles.css';
// import { login } from '../services/login';
import { useNavigate } from 'react-router'; 
import Swal from 'sweetalert2';


const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        mailJ: '',
        nameJ: '',
        lastnameJ: '',
        telefonoJ: '',
        passwordJ: '',
    })

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setData((data) => ({
          ...data,
          [id]: type === 'checkbox' ? checked : value,
        }));
      };

      const handleSubmit = (e) =>{
        e.preventDefault();
        Swal.fire('Se ha registrado correctamente ✅');
        navigate('/');
      }


  return (
    <>
        <main className="pageAcceso2J"> 
        <div className="tituloPageAcceso2">
            <h1 className="tituloAcceso2J">Ingrese sus datos para iniciar sesión</h1>
        </div>
        <div className="formulario2J">
            <form id="registroFormJ" onSubmit={handleSubmit}>

            <input type="text" id="mailJ" required placeholder="Ingrese su Email" value={data.mailJ} onChange={handleChange} />
            <input type="text" id="nameJ" required placeholder="Nombre" value={data.nameJ} onChange={handleChange} />
            <input type="text" id="lastnameJ" required placeholder="Apellido" value={data.lastnameJ} onChange={handleChange}/>
            <input type="text" id="telefonoJ" required placeholder="Número Telefónico" value={data.telefonoJ} onChange={handleChange}/>
            <input type="password" id="passwordJ" required placeholder="Crear Contraseña" value={data.passwordJ} onChange={handleChange}/>
            <div className="btnRegistrarLogin">
            <input className="registrateJ" type="submit" value="Registrar" />
            </div>
            </form>
        </div>
            <div className="politicaPage2J">
                <label><input type="checkbox" required id="checkboxPage2J" /> 
                Acepto la política de privacidad</label>  
            </div>
                <div className="botonLoginExterno">
                    <p>Si tienes una cuenta Inicia Sesión: </p>
                    <a href="/access"><button className="registrateJ">Iniciar Sesión</button></a>
                </div>
        </main> 

            </>
  )
}

export default Login;



