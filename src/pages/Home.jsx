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
        <section className='itemContent'>
         <Gallery data = {data}/>
        </section>
      )}
   
    </>
  )
}

export default Home