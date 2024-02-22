import { useState } from "react";
import { useNavigate } from "react-router"; 
import '../components/styles/NewProduct.css';
import Swal from 'sweetalert2';

const NewProduct = () => {
    const navigate = useNavigate();
 const [data, setData] = useState({
    name: '',
    img: '',
    description: '',
    price: ''
 });

 const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/muebles', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        navigate('/gallery');
  
       if (!response.ok) {
        throw new Error('Error al crear el producto');
       }
        Swal.fire('Producto añadido correctamente ✅');
       
  
      } catch (error) {
        console.error('Error al crear el producto:', error);
        Swal.fire('Error al crear el producto');
      }
    };

  return (
    <>
    <div className="container-product">
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre del articulo: </label><br/>
        <input className="inputt" type="text" id="name" name='name' value={data.name} onChange={handleChange} required/><br/>
        <label htmlFor="img">Introduce URL imagen: </label><br/>
        <input className="inputt" type="text" id="img" name='img' value={data.img} onChange={handleChange} required/><br/>
        <label htmlFor="description">Describe tu producto: </label><br/>
        <textarea className="textare" placeholder="Mas información.." type="text" id="description" name='description' value={data.description} onChange={handleChange} required/><br/>
        <label htmlFor="price">Precio: </label><br/>
        <input className="inputt" type="text" id="price" name='price' value={data.price} onChange={handleChange} required/><br/>
        <button className="add-button" type="submit">Subir producto</button>
    </form>
    </div>
    </>
  )
}

export default NewProduct;