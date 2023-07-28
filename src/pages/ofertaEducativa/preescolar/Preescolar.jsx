import NavbarFix from "../../../components/navbar/Navbar";
import FormGeneral from "../../../components/formGral/FormGral";
import Docentes from "../../../components/docentes/Docentes";
import Requisitos from "../../../components/requisitos/Requisitos";
import Footer from "../../../components/footer/Footer";


const Preescolar = ({navbarWhite}) => {

  const textList = {
    p1: '“En el Instituto Cultural Azteca,  el aprendizaje es una experiencia divertida y académicamente enriquecedora para nuestros alumnos de preescolar. "',
    p2: 'Nuestro enfoque educativo de nivel preescolar se basa en el juego y la exploración, permitiendo a los niños desarrollar habilidades y conocimientos, a través de actividades lúdicas mientras se divierten, en un ambiente completamente seguro.',
    p3: 'La seguridad de nuestros alumnos es una prioridad, contamos con instalaciones seguras y un equipo altamente capacitado para garantizar el bienestar de nuestros alumnos en todo momento.',
    p4: 'También nos enorgullece ofrecer un programa de inglés de alta calidad desde el nivel preescolar, con lo que los más pequeños comienzan a desarrollar sus habilidades en una segunda lengua.',
    image: '../../src/assets/cuadrito-preescolar.jpg'
  }

  const handleImage = () =>{
    console.log('It Works!')
  }
  return (
    <>
          <NavbarFix/>
          <section className="preescolar__hero">
          <div className="preescolar__hero-image">
            <img src="../../src/assets/headerprimaria.jpg" alt="preescolar portada"/>
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
            <img className='showPicture' src="../../../src/assets/preescolar-galeria1.jpg" alt="imagen galeria" onClick={handleImage}/>
            <img src="../../../src/assets/preescolar-galeria2.jpg" alt="imagen galeria"/>
            <img src="../../../src/assets/preescolar-galeria3.jpg" alt="imagen galeria"/>
            <img src="../../../src/assets/preescolar-galeria4.jpg" alt="imagen galeria"/>
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

export default Preescolar;