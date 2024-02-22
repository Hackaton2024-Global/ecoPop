import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { oneMueble } from "../services/dataMuebles";
import '../components/styles/Detail.css'
import cartIcon from '../assets/cartIcon.svg';
import Swal from 'sweetalert2';

const Detail = () => {
    const {id} = useParams();
    const  [mueble, setMueble] = useState(null);


    const handleClick = () => {
        Swal.fire(`¡Añadido a la cesta!
                 Llevas ${mueble.price}€`);
      };

    useEffect(()=>{
        const  fetchData = async() => {
            const response = await oneMueble(id);
            setMueble(response);
        }
        fetchData();
    } ,[id]);

return (
    <div>
    {mueble?(
        <main>
            <section className="section-1"
            key={mueble.id}>
                <div>
                <h1 className="furniture-name">{mueble.name}</h1>
                <p className="furniture-description">{mueble.description}</p>
                <p className="shipping-text">Envío GRATIS (España Peninsular)<br/>
                Devoluciones 14 días (España Peninsular)<br/>
                Pago 100% Fácil y Seguro<br/>
                Finaciación fácil sin gastos ni intereses<br/>
                Recuperando el pasado cuidamos el futuro</p>
                
                <div className="furniture-price">
                <p className="price">{mueble.price}€</p>
                <p className="iva">Impuestos incluidos</p>
                </div>
                <div className="add-cart-bt">
                <button className="add-to-cart" type="button" onClick={handleClick}>
                 <img src={cartIcon} className="cart-icon" alt="cart-icon" />
                </button>
                </div>
                </div>
                
                <div>
                <img className="detail-img" src={mueble.img} alt="mueble vintage"/>
                </div>
                </section>
        </main>
    ):(
        <div>Cargando...</div>
    )}
    </div>
)
}

export default Detail
