import Gallery from '../components/Gallery';
import { useState, useEffect } from 'react';
import { dataMuebles } from '../services/dataMuebles'; 
import '../components/styles/Home.css';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await dataMuebles();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);  //cuando se monta, se ejecuta


  return (
    <>
    {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
        <main className="fondo">
        <h1 className="titulo-pagina-productos">MUEBLES RESTAURADOS A MANO CON AMOR</h1>
        <h2 className="subtitulo-pagina-productos">Dales una segunda vida y cuida tu planeta</h2>

        <section className='itemContent'>
         <Gallery data = {data}/>
        </section>
        </main>
        </>
      )}
   
    </>
  )
}

export default Home