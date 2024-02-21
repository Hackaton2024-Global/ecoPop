import './styles/Footer.css';
import visa from '../assets/Visa.svg'; 
import maestro from '../assets/Maestro.svg';
import dinner from '../assets/DinersClub.svg';
import pay from '../assets/PayPal.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <>
    <footer className="footerEcoPop">
        <div className="footerIzq">
            <div>
                <h3 className="siguenos">Síguenos</h3>
            </div>
            <div className="footerIzqRedes">
                <div><i className="bi bi-twitter-x"></i></div>
                <div><i className="bi bi-instagram"></i></div>
                <div><i className="bi bi-facebook"></i></div>
                <div><i className="bi bi-amazon"></i></div>
                <div><i className="bi bi-whatsapp"></i></div>
            </div>
        </div>
        <div className="footerCen">
            <div className="textoInteres">
                <h3>Datos de interés</h3>
            </div>
            <div className="footerCenEnlaces">
                <a href=""><button>Aviso Legal</button></a>
                <a href=""><button>Formas de Pago</button></a>
                <a href=""><button>Políticas de Privacidad</button></a>
                <a href=""><button>Condiciones de Envío</button></a>
                <a href=""><button>Plazos de Entrega</button></a>
            </div>
        </div>
        <div className="footerDer">
            <div className="textoPago">
                <h3>Métodos de Pago</h3>
                <h4>Tel: 945 568 389</h4>
                <h4>Móvil: 633 705 770</h4>
            </div>
            <div className="metodoPago">
                <img src={visa} alt="img-visa" />
                <img src={maestro} alt="img-maestro"/>
                <img src={dinner} alt=""/>
                <img src={pay} alt=""/>
                <img src={visa} alt=""/>
            </div>
        </div>
    </footer>
    <div className="legal"><p>© 2024, EcoPop - Todos los derechos reservados</p></div>
    </>
  )
}

export default Footer