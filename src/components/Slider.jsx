import React from 'react'
import hero from "../assets/images-slider/hero.png"
import hero2 from "../assets/images-slider/hero-2.png"
import hero3 from "../assets/images-slider/hero-3.png"
import hero4 from "../assets/images-slider/hero-4.png"
import '../components/styles/Slider.css'

const Slider = () => {
  return (
    <div>
      <div id="container-slider">
  
        <section className="section-slider">
        <div className='slider'>
        <a name="img_1">
        <img
            src={hero}
          />
        </a>
        <a name="img_2">
        <img
            src={hero2}
          />
        </a>
        <a name="img_3">
        <img
            src={hero3}
          />
        </a>
        <a name="img_4">
        <img
            src={hero4}
          />
        </a>
      </div>
      
      {/* <div className="elipse"{{background: radial-gradient(ellipse 80% 80% at 50% -20%,#7877c64d,#fff0); position: absolute; top: 0; width: 100%; height: 100%; left:0; z-index: -1}}></div> */}
      
      <ul className="markers">
        <li><a href="#img_1"></a></li>
        <li><a href="#img_2"></a></li>
        <li><a href="#img_3"></a></li>
        <li><a href="#img_4"></a></li>
      </ul>
      
      </section>
    </div>
    </div>
  )
}

export default Slider
