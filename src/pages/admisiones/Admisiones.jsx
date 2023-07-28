import { useState } from "react";
import Footer from "../../components/footer/Footer";
import NavbarFix from "../../components/navbar/Navbar";
import Requisitos from "../../components/requisitos/Requisitos";
import FormGeneral from "../../components/formGral/FormGral";

// import './admisiones.scss';

const Admisiones = () => {
  const [preescolar, setPreescolar] = useState(false);
  const [primaria, setPrimaria] = useState(false);
  const [secundaria, setSecundaria] = useState(false);
  const [preparatoria, setPreparatoria] = useState(false);

  const handleButtonPreescolar = () => {
    const element = document.querySelector("#acord");
    element.classList.add("slide-top");
    console.log("Desde HandleButton preescolar");
    setPreescolar(true);
    setPrimaria(false);
    setSecundaria(false);
    setPreparatoria(false);
    if (preescolar) {
      element.classList.remove("slide-top");
      setPreescolar(false);
      return;
    }
  };
  const handleButtonPrimaria = () => {
    const element = document.querySelector("#acord");
    element.classList.add("slide-top");
    console.log("Desde HandleButton Primaria");
    setPreescolar(false);
    setSecundaria(false);
    setPreparatoria(false);
    setPrimaria(true);
    if (primaria) {
      element.classList.remove("slide-top");
      setPrimaria(false);
      return;
    }
  };
  const handleButtonSecundaria = () => {
    const element = document.querySelector("#acord");
    element.classList.add("slide-top");
    console.log("Desde HandleButton Secundaria");
    setPreescolar(false);
    setPrimaria(false);
    setSecundaria(true);
    setPreparatoria(false);
    if (secundaria) {
      element.classList.remove("slide-top");
      setSecundaria(false);
      return;
    }
  };
  const handleButtonPreparatoria = () => {
    const element = document.querySelector("#acord");
    element.classList.add("slide-top"); 
    setPreescolar(false);
    setPrimaria(false);
    setSecundaria(false);
    setPreparatoria(true);
    if (preparatoria) {
      element.classList.remove("slide-top");
      setPreparatoria(false);
      return;
    }
  };

  return (
    <>
      <NavbarFix />
      <section className="admisiones__hero">
        <div className="admisiones__hero-image">
          <img
            src="../../../src/assets/admisiones-head.jpg"
            alt="admisiones portada"
          />
        </div>

      </section>

      <section className="admisiones__content">
        <div className="admsiones__card">
          <div className="admision__layout"></div>
          <h4>Conoce nuestro proceso de admision por nivel</h4>
        </div>

        <div className="admisiones__left">
          <p>
            Agenda una cita para conocer las instalaciones y platicar sobre
            nuestras actividades académicas y formativas así como los servicios
            de apoyo que ponemos a disposición de los alumnos.
          </p>
        </div>

        <div className="admisiones__acordeon">
          <div className="admisiones__acordeon-buttons">
            <button onClick={handleButtonPreescolar}>Preescolar</button>
            <button onClick={handleButtonPrimaria}>Primaria</button>
            <button onClick={handleButtonSecundaria}>Secundaria</button>
            <button onClick={handleButtonPreparatoria}>Preparatoria</button>
          </div>

          <section className="preescolar__requisitos section__padding" id="acord">
            <div className="admisiones__acordeon-container">
              {preescolar ? (
                <Requisitos>
                  <div className="preescolar__requisitos-alumno">
                    <p>Alumno:</p>
                    <ul>
                      <li>Constancia de no adeudo</li>
                      <li>
                        3 fotografías infantiles, de frente a color con blusa o
                        camisa blanca
                      </li>
                      <li>Acta de nacimiento (2 copias)</li>
                      <li>CURP del alumno (2 copias)</li>
                      <li>Examen médico</li>
                    </ul>
                  </div>
                  <div className="preescolar__requisitos-padre">
                    <p>Padres:</p>
                    <ul>
                      <li>2 copias de la CURP de ambos padres</li>
                      <li>2 copias de la credencial de elector al 200%</li>
                      <li>
                        2 copias del comprobante de domicilio del último mes
                        (agua, teléfono y/o predio)
                      </li>
                    </ul>
                  </div>
                  <div className="requisitos__wolfie">
                    <img
                      src="../../src/assets/wolfie-sticker 6.png"
                      alt="wolfie"
                    />
                  </div>
                </Requisitos>
              ) : (
                ""
              )}

              {primaria ? (
                <Requisitos>
                  <div className="preescolar__requisitos-alumno">
                    <p>Alumno:</p>
                    <ul>
                      <li>Promedio mínimo 8.5</li>
                      <li>Constancia de no adeudo</li>
                      <li>Carta de buena conducta</li>
                      <li>
                        3 fotografías infantiles, de frente a color con blusa o
                        camisa blanca
                      </li>
                      <li>Acta de nacimiento (2 copias)</li>
                      <li>CURP del alumno (2 copias)</li>
                      <li>Última boleta del año que cursó (2 Copias)</li>
                      <li>Examen médico</li>
                    </ul>
                  </div>
                  <div className="preescolar__requisitos-padre">
                    <p>Padres:</p>
                    <ul>
                      <li>2 copias de la CURP de ambos padres</li>
                      <li>2 copias de la credencial de elector al 200%</li>
                      <li>
                        2 copias del comprobante de domicilio del último mes
                        (agua, teléfono y/o predio)
                      </li>
                    </ul>
                  </div>
                  <div className="requisitos__wolfie">
                    <img
                      src="../../src/assets/wolfie-sticker 6.png"
                      alt="wolfie"
                    />
                  </div>
                </Requisitos>
              ) : (
                ""
              )}

              {secundaria ? (
                <Requisitos>
                  <div className="preescolar__requisitos-alumno">
                    <p>Alumno:</p>
                    <ul>
                      <li>Promedio mínimo 8.5</li>
                      <li>Constancia de no adeudo</li>
                      <li>Carta de buena conducta</li>
                      <li>
                        3 fotografías infantiles, de frente a color con blusa o
                        camisa blanca
                      </li>
                      <li>Acta de nacimiento (2 copias)</li>
                      <li>CURP del alumno (2 copias)</li>
                      <li>Certificado de Primaria (2 Copias)</li>
                      <li>
                        Última boleta del año que cursó (2 Copias) (En caso de
                        2° y 3° de Secundaria)
                      </li>
                      <li>Examen médico</li>
                    </ul>
                  </div>
                  <div className="preescolar__requisitos-padre">
                    <p>Padres:</p>
                    <ul>
                      <li>2 copias de la CURP de ambos padres</li>
                      <li>2 copias de la credencial de elector al 200%</li>
                      <li>
                        2 copias del comprobante de domicilio del último mes
                        (agua, teléfono y/o predio)
                      </li>
                    </ul>
                  </div>
                  <div className="requisitos__wolfie">
                    <img
                      src="../../src/assets/wolfie-sticker 6.png"
                      alt="wolfie"
                    />
                  </div>
                </Requisitos>
              ) : (
                ""
              )}

              {preparatoria ? (
                <Requisitos>
                  <div className="preescolar__requisitos-alumno">
                    <p>Alumno:</p>
                    <ul>
                      <li>Promedio mínimo 8.5</li>
                      <li>Constancia de no adeudo</li>
                      <li>Carta de buena conducta</li>
                      <li>
                        3 fotografías infantiles, de frente a color con blusa o
                        camisa blanca
                      </li>
                      <li>Acta de nacimiento (2 copias)</li>
                      <li>CURP del alumno (2 copias)</li>
                      <li>Certificado de Primaria (2 Copias)</li>
                      <li>Certificado de Secundaria (2 Copias)</li>
                      <li>
                        Última boleta del año que cursó (2 Copias) (En caso de
                        2° y 3° de Secundaria)
                      </li>
                      <li>Examen médico</li>
                    </ul>
                  </div>
                  <div className="preescolar__requisitos-padre">
                    <p>Padres:</p>
                    <ul>
                      <li>2 copias de la CURP de ambos padres</li>
                      <li>2 copias de la credencial de elector al 200%</li>
                      <li>
                        2 copias del comprobante de domicilio del último mes
                        (agua, teléfono y/o predio)
                      </li>
                    </ul>
                  </div>
                  <div className="requisitos__wolfie">
                    <img
                      src="../../src/assets/wolfie-sticker 6.png"
                      alt="wolfie"
                    />
                  </div>
                </Requisitos>
              ) : (
                ""
              )}
            </div>
          </section>
        </div>

        <FormGeneral />
      </section>
      <Footer />
    </>
  );
};

export default Admisiones;
