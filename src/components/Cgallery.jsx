import '../components/styles/Gallery.css';

const Cgallery = (data) => {

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
        <button className="boton-producto-detalles">
          <p className="producto-masinfo"> Más detalles +</p>
        </button>
      {/* </div> */}
      </div>
    </article>)} )}
    </>
  )}

export default Cgallery;