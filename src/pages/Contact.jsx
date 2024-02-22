import '../components/styles/Contact.css';
import { useState } from 'react'; 
import Swal from 'sweetalert2';

const Contact = () => {
    const initData ={
        name: '',
        email: '',
        phone: '',
        message: ''
    }

    const [data, setData] = useState(initData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({...data,[name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire('Lo hemos recibido, en breves momentos nos pondremos en contacto con ud.');
        setData(initData);
    }
    

    return (
        <>
        <section>
            <form className="container-form" onSubmit={handleSubmit}>
                <h1 className="form-title">Contacta con nosotros</h1>
                
                <label htmlFor="name">Nombre</label>
                <input type="text" className="inp" name="name" required value={data.name} onChange={handleChange}/>
                
                <label htmlFor="phone">Telefono</label>
                <input type="text" className="inp" name="phone" required value={data.phone} onChange={handleChange}/>
                
                <label htmlFor="email">Email</label>
                <input type="email" className="inp" name="email" required value={data.email} onChange={handleChange}/><br/>
                
                
                <textarea htmlFor="message" cols="35" rows="4" placeholder='Escribenos tu duda...'
                 className="inp" name="message" value={data.message} onChange={handleChange}>Mensaje</textarea><br/>
                
                <button type="submit" className="send-button">Enviar</button>
            </form>
        </section>
        </>
    )
}

export default Contact