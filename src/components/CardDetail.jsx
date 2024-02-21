import React from "react";
import AddToCart from "./AddToCart.jsx"

const CardDetail = () => {
    return (
    <>
    <div className="detailCard">
        <h1>Titulo mueble</h1>
        <p>Descripción</p>
        <div>
        <img src="" alt="" />
        <p>Precio</p>
        </div>
    </div>
    <AddToCart/>
    </>
    )
}

export default CardDetail