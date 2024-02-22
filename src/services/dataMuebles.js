
export const dataMuebles = async () =>{
    const response = await fetch('http://localhost:3000/muebles');
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    const result = await response.json();
    return result;
}

export const oneMueble = async (id) =>{
    const response = await fetch(`http://localhost:3000/muebles/${id}`);
    const data = await response.json();
    return data;
}

export const deleteProduct = async (id) => {
  await fetch(`http://localhost:3000/muebles/${id}`, {method:"DELETE"}
  ).then(response => {
      if (response.ok) {
        const confirmDelete = window.confirm("¿Estás seguro que deseas eliminar el producto?"); 
        if (confirmDelete){
           alert('Eliminado correctamente');
        }
      }});
} 