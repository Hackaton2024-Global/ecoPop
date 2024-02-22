import './styles/Gallery.css';
import { useNavigate } from 'react-router';

const Gallery = (data) => {
  const navigate = useNavigate();

  return (
    <>
      {data.data?.map((mueble) => {
    return (<article className="carta-modelo" key={mueble.id}>
      <div className="contenedor-productos">
      <img src={mueble.img} alt="" className="producto-imagen" />
      <h3 className="producto-titulo">{mueble.name}</h3>
      {/* <div className="producto-info-basico"> */}
        <button className="boton-producto-agregar">
          <p className="producto-precio"><i className="fa-solid fa-cart-shopping"></i>{mueble.price}</p>
        </button>
        <button className="boton-producto-detalles" onClick={()=>navigate(`/detail/${mueble.id}`)}>
           Más detalles +
        </button>
      {/* </div> */}
      </div>
    </article>)} )}
    </>
  )}

export default Cgallery;