// import Cgallery from '../components/Cgallery';
import Gallery from '../pages/Gallery';
import { useState, useEffect } from 'react';
import { dataMuebles } from '../services/dataMuebles'; 
import '../components/styles/Home.css';
import Slider from '../components/Slider';
import '../../src/index.css';

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
  }, []);  


  return (
    <>
    {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
        <section className="buscar">
          <input type="text" placeholder="¿Qué estas buscando?" /><button className="buscarE">Buscar</button>
        </section>
        <Slider />
        <section className='itemContent'>
         <Gallery data = {data}/>
        </section>
        </>
      )}
   
    </>
  )
}

export default Home