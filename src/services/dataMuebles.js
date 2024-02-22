
export const dataMuebles = async () =>{
    const response = await fetch('http://localhost:3000/muebles');
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    const result = await response.json();
    return result;
}