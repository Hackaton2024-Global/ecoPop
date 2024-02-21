import './styles/Gallery.css';

const Gallery = (data) => {
  return (
    <>
    {data.data.map((mueble) => {
    return (<div className="carta-modelo" key={mueble.id}>
      <img src={mueble.img} alt="" className="producto-imagen" />
      <h3 className="producto-titulo">{mueble.name}</h3>
      {/* <div className="producto-info-basico"> */}
        <button className="boton-producto-agregar">
          <p className="producto-precio"><i className="fa-solid fa-cart-shopping"></i>{mueble.price}</p>
        </button>
        {/* <button className="boton-producto-detalles">
          <p className="producto-masinfo"> Más detalles </p>
        </button> */}
      {/* </div> */}
    </div>)} )}
    </>
  )}

export default Gallery;