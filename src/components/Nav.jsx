import './styles/Nav.css';
import logo from '../assets/logo.png';

const Nav = () => {
  return (
    <>
    <nav className="navEcoPop">
        <div className="logoNav">
            <img src={logo} alt="logo" />
        </div>
        <div className="botonesNav">
            <a href="/"><button>Home</button></a>
            <a href="/gallery"><button>Galeria</button></a>
            <a href=""><button>Contacto</button></a>
            <a href="/access"><button>Sign Up</button></a>
            {/* <a href=""><button>+ Subir Producto</button></a> */}
        </div>
    </nav>
    </>
  )
}

export default Nav;