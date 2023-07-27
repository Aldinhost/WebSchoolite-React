import { useState } from "react"
import Portada from "../../components/portada/Portada"
import ImageSlider from "../../components/carousel/Carousel"
import OfertaEducativa from "../../components/ofertaEducativa/OfertaEducativa"
import Noticias from "../../components/noticias/Noticias"
import Recorrido360 from "../../components/recorrido360/Recorrido360"
import Footer from "../../components/footer/Footer"
import { SliderData } from "../../components/carousel/SliderData"
import NavbarFix from "../../components/navbar/Navbar"

const Home = () => {

const [navbarWhite, setNavbarWhite] = useState(false);


const navFixed = () => {
  if(window.scrollY >= 80){
    setNavbarWhite(true);
  }else{
    setNavbarWhite(false);
  }
  
}

window.addEventListener('scroll', navFixed);

  return (
    <>
    <header>
    <NavbarFix 
      navbarWhite={navbarWhite}
    />
    </header>

    <main>
        <Portada/>

        <ImageSlider
          slides={SliderData}
        />
        <section className="oferta__bg">
          <OfertaEducativa/>
        </section>
      </main>

      <section>
        <Noticias/>
      </section>
      <div className="noticias__separator"></div>
      <section >
      
      <section className="ingles__docentes section__padding">
          <div className="ingles__docentes-container">
            <p>“La seguridad de nuestros alumnos es una prioridad, contamos con
              instalaciones seguras y un equipo altamente capacitado para garantizar
              el bienestar de nuestros alumnos en todo momento."</p>
          </div>
        </section>

      <h2 className='recorrido__title'>Recorre nuestras Instalaciones...</h2>
        <Recorrido360/>
      </section>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Home