import './styles/Nav.css';
import logo from '../assets/logo.png';
import '../../src/index.css';

const Nav = () => {
  return (
    <>
    <nav className="navEcoPop">
        <div className="logoNav">
            <img src={logo} alt="logo" />
        </div>
        <div className="botonesNav">
            <a href="/"><button>Inicio</button></a>
            <a href="/gallery"><button>Galeria</button></a>
            <a href="/contact"><button>Contacto</button></a>
            <a href="/product"><button>+ Subir Producto</button></a>
            <a href="/access"><button>Acceso</button></a>
        </div>
    </nav>
    </>
  )
}

export default Nav;