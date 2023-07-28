import NavbarFix from "../../../components/navbar/Navbar"
import Docentes from "../../../components/docentes/Docentes"
import Requisitos from "../../../components/requisitos/Requisitos"
import FormGeneral from "../../../components/formGral/FormGral"
import Footer from "../../../components/footer/Footer"

const Preparatoria = () => {

  const textList = {
    p1: 'En el Instituto Cultural Azteca, nuestra experiencia académica es la clave del éxito, ya que reconocemos que las bases pedagógicas sólidas son el cimiento fundamental para alcanzar el éxito educativo.',
    p2: 'Nuestro enfoque se basa en una combinación equilibrada de teoría y práctica, fomentando la participación activa.',
    p3: 'También brindamos a los estudiantes, las herramientas y habilidades necesarias para los desafíos que implica el mundo tecnológico actual, por lo tanto, integramos el uso de las TIC al programa educativo, para que los estudiantes puedan alfabetizarse digitalmente y estén preparados para afrontar cualquier tipo de problemática en su trayectoria escolar, académica y personal.'
  }

  return (
    <>
      <NavbarFix/>
          <section className="preescolar__hero">
          <div className="preescolar__hero-image">
            <img src="../../../src/assets/prepa.jpg" alt="preescolar portada"/>
          </div>
        </section>

        <div className="docentes__intro">
          <div className="docentes__intro-left">
            <h2>Docentes</h2>
            <p>Nuestro equipo docente está conformado por profesionistas con amplia experiencia en el ámbito educativo, además de que se encuentran siempre en constante actualización y para su desarrollo tenemos:</p>
          </div>
          <ul className="docentes__intro-right">
            <li className="docentes__intro-item">Programa de capacitación docente.</li>
            <li className="docentes__intro-item">Formación basada en principios éticos.</li>
            <li className="docentes__intro-item">Manual de convivencia ICA.</li>
            <li className="docentes__intro-item">Detección de posibles barreras de aprendizaje en alumnos.</li>
            <li className="docentes__intro-item">Acompañamiento a padres de familia con estrategias para el desarrollo de sus hijos (Escuela para padres).</li>
          </ul>

        </div>

        <Docentes
          p1={textList.p1}
          p2={textList.p2}
          p3={textList.p3}
          p4={textList.p4}
        />


        <section className="preescolar__galery-container section__padding">
          <h2>Galería</h2>
          <div class="preescolar__galery">
            <img src="../../../src/assets/img4.png" alt="imagen galeria"/>
            <img src="../../../src/assets/img5.png" alt="imagen galeria"/>
            <img src="../../../src/assets/img3.jpg" alt="imagen galeria"/>
            <img src="../../../src/assets/img6.jpg" alt="imagen galeria"/>
          </div>
        </section>

        <div className="noticias__separator"></div>

        <div className="preescolar__admisiones">
          <h2>Admisiones</h2>
        </div>

        <div className="preescolar__btn">
            <a className="btn-general" href="/admisiones" >Admisiones</a>
        </div>

        <Footer/>
    </>
  )
}

export default Preparatoria