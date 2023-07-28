import { useState } from "react"
import Docentes from "../../../components/docentes/Docentes"
import NavbarFix from "../../../components/navbar/Navbar"
import Requisitos from "../../../components/requisitos/Requisitos"
import FormGeneral from "../../../components/formGral/FormGral"
import Footer from "../../../components/footer/Footer"


const Primaria = () => {

  const textList = {
    p1: 'Sabemos que la educación primaria sienta las bases para el éxito. Por eso, nos esforzamos en ofrecer un ambiente estimulante, inclusivo y de calidad que promueva el crecimiento de los estudiantes en todo momento.',
    p2: '¡Nuestro nivel primaria es el lugar perfecto para que los niños crezcan y se desarrollen académica e integralmente!.',
    p3: 'Con más de cinco décadas de experiencia, nuestra metodología está enfocada en desarrollo de habilidades intelectuales la participación activa, el pensamiento crítico y la creatividad.',
    p4: '¡Únete no pierdas la oportunidad de brindar a tus hijos una educación de excelencia, donde formamos a los líderes del mañana!.',
    image: '../../../src/assets/cuadrito-primaria.jpg'
  }

  return (
    <>
      <NavbarFix/>
          <section class="preescolar__hero">
          <div class="preescolar__hero-image">
            <img src="../../../src/assets/primaria-head-.jpg" alt="preescolar portada"/>
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

        <section class="preescolar__galery-container section__padding">
          <h2>Galería</h2>
          <div class="preescolar__galery">
            <img src="../../../src/assets/primaria-galeria-1.jpg" alt="imagen galeria"/>
            <img src="../../../src/assets/primaria-galeria-2.jpg" alt="imagen galeria"/>
            <img src="../../../src/assets/primaria-galeria-3.jpg" alt="imagen galeria"/>
            <img src="../../../src/assets/primaria-galeria-4.jpg" alt="imagen galeria"/>
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

export default Primaria