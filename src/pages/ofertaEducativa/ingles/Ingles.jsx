import Docentes from "../../../components/docentes/Docentes"
import Footer from "../../../components/footer/Footer"
import NavbarFix from "../../../components/navbar/Navbar"

const Ingles = () => {

  const textList = {
    p1: 'Contamos con un equipo de profesionales altamente capacitados y apasionados por la enseñanza del inglés. ',
    p2: 'Nuestros docentes poseen una amplia experiencia y utilizan metodologías innovadoras que se adaptan a las necesidades individuales de cada alumno.',
    image: '../../../src/assets/cuadrito-ingles.jpg'
  }

  return (
    <>
      <NavbarFix/>
          <section class="preescolar__hero">
          <div class="preescolar__hero-image">
            <img src="../../../src/assets/ingles.jpg" alt="preescolar portada"/>
          </div>
          <h1 class="preescolar__hero-title">Inglés</h1>
          <div class="preescolar__hero-layout"></div>
        </section>
        <div className="ingles__content">
          <h3>El inglés como segunda lengua, es indispensable para los lideres del futuro.</h3>
          <p className="">El programa de enseñanza de inglés como lengua extranjera, tiene como base el marco de competencias para la vida de Cambridge que abarca seis áreas:</p>
          <ul className="ingles__content">
            <li>Pensamiento creativo</li>
            <li>Pensamiento crítico</li>
            <li>Learning to learn</li>
            <li>Communication</li>
            <li>Collaboration</li>
            <li>Social responsibilities</li>
          </ul>

          <p>En el <span>Instituto Cultural Azteca</span>, brindamos las habilidades necesarias para comunicarse en inglés de manera eficiente, nuestros egresados cuentan con una <span>excelente pronunciación</span>, lo que les permite expresarse con confianza en cualquier contexto, estamos convencidos de que una buena dicción es clave para una comunicación efectiva, por lo que nos dedicamos a perfeccionar dicha habilidad.</p>
        </div>



        <Docentes
          p1={textList.p1}
          p2={textList.p2}
          image={textList.image}
        />
        
        <section className="ingles__trips section__padding">
          <div className="ingles__trips-container">
            <h3>INTERNATIONAL SCHOOL TRIPS</h3>
            <p>“En el Instituto Cultural Azteca, creamos un ambiente de aprendizaje estimulante por lo que hemos implementado intercambios culturales al extranjero para nuestros estudiantes, con el fin de tener experiencias internacionales que ayuden a la práctica del idioma.</p>

            <p>Esta formación en una segunda lengua permitirá que nuestros alumnos destaquen en cualquier carrera profesional y que puedan disfrutar de experiencias únicas a nivel internacional. </p>

            <p>¡Únete a nosotros, forma parte de los lideres del futuro!</p>
          </div>
          <img src="../../../src/assets/docentesPreescolar2.jpg" alt="docentes preescolar" />

</section>

        <section class="preescolar__galery-container section__padding">
          <h2>Galería</h2>
          <div class="preescolar__galery">
            <img src="../../../src/assets/ingles-galeria2.jpg" alt="imagen galeria"/>
            <img src="../../../src/assets/img5.png" alt="imagen galeria"/>
            <img src="../../../src/assets/ingles-galeria3.jpg" alt="imagen galeria"/>
            <img src="../../../src/assets/ingles-galeria4.jpg" alt="imagen galeria"/>
          </div>
        </section>

    <Footer/>
    </>
  )
}

export default Ingles