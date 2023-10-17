import Footer from "../../components/footer/Footer";
import NavbarFix from "../../components/navbar/Navbar";
 

const Nosotros = () => {
  return (
    <>
      <NavbarFix />
      <section className="nosotros__hero">
        <div className="nosotros__hero-image">
        <img
            src="../../../src/assets/nosotros-head.jpg"
            alt="admisiones portada"
          />
        </div>
      </section>

      <section className="nosotros__historia">
        <div className="nosotros__historia-bg">
          <div className="nosotros__historia-bg_image">
            <img src="../../src/assets/logo_ica_noText.png" alt="escudo ica" />
          </div>
          <h2>Instituto Cultural Azteca</h2>

          <div className="nosotros__history">
            <div className="nosotros__history-text">
              <h3>Historia</h3>
              <p>
                El <span>Instituto Cultural Azteca</span> fue fundado en 1972 y
                en el año 2012 se reestructuró tanto en infraestructura como en
                sus programas académicos, lo que lo ha posicionado como una de
                las escuelas con mayor demanda en la zona por el servicio
                educativo y la calidad académica que brinda.
              </p>

              <p>
                Somos una institución privada con{" "}
                <span>50 años de experiencia</span>. Impartimos los niveles de
                Preescolar, Primaria y Secundaria, estamos incorporados a SEIEM.
                Nuestra institución se encuentra en Ciudad Azteca Oriente en el
                municipio de Ecatepec, Estado de México.
              </p>

              <p>
                Tenemos una población de 421 alumnos y una plantilla de
                aproximadamente 50 colaboradores entre profesores,
                administrativos, personal de servicio y directores.
              </p>
            </div>

            <div className="nosotros__history-image">
              <img src="../../src/assets/history.webp" alt="history ica" />
            </div>
          </div>

          <div className="nosotros__mision">
            <div className="nosotros__mision-image">
              <img src="../../src/assets/mision.webp" alt="mision ica" />
            </div>
            <div className="nosotros__mision-text">
              <h3>Misión</h3>
              <p>
                Proporcionar una <span>Educación Integral y de calidad</span>,
                basada en los{" "}
                <span>
                  valores universales y en los Principios de la educación
                  individual y comunitaria
                </span>
                , desarrollando en el educando habilidades intelectuales,
                socioafectivas y éticas que contribuyan a su formación humana y
                le permitan desarrollarse plenamente ante las exigencias de un
                mundo cambiante.
              </p>
            </div>
          </div>

          <div className="nosotros__vision">
            <div className="nosotros__vision-text">
              <h3>Visión</h3>
              <p>
                Ser la{" "}
                <span>Institución Bilingüe líder en educación integral</span> en
                todos sus niveles escolares, estando a la vanguardia en los
                sistemas y métodos de enseñanza; que fomente en sus integrantes
                una cultura de calidad y de desarrollo como personas íntegras,
                convencidas y comprometidas con la filosofía institucional y el{" "}
                <span>educar para la excelencia humana</span>.
              </p>
            </div>

            <div className="nosotros__vision-image">
              <img src="../../src/assets/vision.webp" alt="vision ica" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Nosotros;
