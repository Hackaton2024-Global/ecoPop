 import Cgallery from "../components/Cgallery";
 import { useState, useEffect } from 'react';
import { dataMuebles } from "../services/dataMuebles"; 

const Gallery = () => {
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
         <Cgallery data = {data}/>
        </section> 
        )} 
  </>
  )
}

export default Gallery;