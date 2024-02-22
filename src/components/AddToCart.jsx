import React from "react"
import './styles/AddToCart.css'
import cartIcon from '../assets/cartIcon.svg';

const AddToCart = () => {

return (
    <>
    <button className="add-to-cart" type="button">
    <img src={cartIcon} className="cart-icon" alt="cart-icon"/>
    Añadir al carrito 
    </button>
    </>
)

}

export default AddToCart 