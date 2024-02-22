import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { oneMueble } from "../services/dataMuebles";
import AddToCart from "../components/AddToCart";
import '../components/styles/Detail.css'

const Detail = () => {
    const {id} = useParams();
    const  [mueble, setMueble] = useState(null);

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
        <section className="detailCard"
        key={mueble.id}>
        <h1>{mueble.name}</h1>
        <p>{mueble.description}</p>
        <p>Envío GRATIS (España Peninsular)<br/>
        Devoluciones 14 días (España Peninsular)<br/>
        Pago 100% Fácil y Seguro<br/>
        Finaciación fácil sin gastos ni intereses<br/>
        Recuperando el pasado cuidamos el futuro</p>
        <div>
        <img src={mueble.img} alt="" />
        <p>{mueble.price}$</p>
        </div>
        </section>
    ):(
        <div>Cargando...</div>
    )}
    <AddToCart/>
    </div>
)
}

export default Detail
