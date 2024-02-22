import hero from "../assets/images-slider/hero.png"
import hero2 from "../assets/images-slider/hero-2.png"
import hero3 from "../assets/images-slider/hero-3.png"
import hero4 from "../assets/images-slider/hero-4.png"
import '../components/styles/Slider.css'

const Slider = () => {
  return (
    
      <article id="container-slider">
        <p className="lema">EcoPop, donde la Sostenibilidad encuentra su Estilo</p>
        <section className="section-slider">
        <div className='slider'>
        

        <a className="a-img" name="img_1">
        <img className='img-slider' src={hero}
          />
        </a>
        <a className="a-img" name="img_2">
        <img className='img-slider' src={hero2}
          />
        </a>
        <a className="a-img" name="img_3">
        <img className='img-slider' src={hero3}
          />
        </a>
        <a className="a-img" name="img_4">
        <img className='img-slider' src={hero4}
          />
        </a>
      </div>
      
      <div style={{background: 'radial-gradient(ellipse at 50% -20%, #7877c64d, #fff0)', position: 'absolute', top: 0, width: '100%', height: '100%', left: 0, zIndex: -1}}></div>
      
      <ul className="markers">
        <li><a className="a-img" href="#img_1"></a></li>
        <li><a className="a-img" href="#img_2"></a></li>
        <li><a className="a-img" href="#img_3"></a></li>
        <li><a className="a-img" href="#img_4"></a></li>
      </ul>
    
      </section>
     </article>  
   
  )
}

export default Slider
