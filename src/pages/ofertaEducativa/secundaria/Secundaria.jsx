import NavbarFix from "../../../components/navbar/Navbar"
import Docentes from "../../../components/docentes/Docentes"
import Footer from "../../../components/footer/Footer"

const Secundaria = () => {
  const textList = {
    p1: 'En el Instituto Cultural Azteca, nuestro objetivo es brindar una formación sólida, fomentando el desarrollo personal, académico y artístico de nuestros alumnos, en un ambiente de aprendizaje donde puedan desarrollar su potencial al máximo.',
    p2: 'Buscamos motivar y despertar el interés de nuestros estudiantes, mediante una metodología de trabajo dinámica que inspire compromiso y disciplina, al tiempo que fomentamos la creatividad y habilidades prácticas.',
    p3: 'También promovemos valores fundamentales como el respeto, la responsabilidad y la solidaridad. Queremos formar ciudadanos comprometidos y conscientes de su entorno.',
    p4: '¡Te invitamos a formar parte de nuestra comunidad educativa en el Instituto Cultural Azteca! ',
    image: '../../../src/assets/secundaria.webp'
  }

  return (
    <>
      <NavbarFix/>
          <section className="preescolar__hero">
          <div className="preescolar__hero-image">
            <img src="../../../src/assets/secundaria.webp" alt="preescolar portada"/>
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
          image={textList.image}
        />


        <section className="preescolar__galery-container section__padding">
          <h2>Galería</h2>
          <div className="preescolar__galery">
            <img src="../../../src/assets/secu-galeria1.jpg" alt="imagen galeria"/>
            <img src="../../../src/assets/ingles.webp" alt="imagen galeria"/>
            <img src="../../../src/assets/secundaria.webp" alt="imagen galeria"/>
            <img src="../../../src/assets/secu-galeria4.jpg" alt="imagen galeria"/>
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

export default Secundaria