import NavbarFix from "../../components/navbar/Navbar";
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiMail } from "react-icons/fi";
import Footer from "../../components/footer/Footer";


const Contacto = () => {
  localStorage.setItem
  return (
    <>
      <NavbarFix />
      <section className="contacto__hero">
        <div className="contacto__hero-image">
          <img src="../../../src/assets/contactus.jpg" alt="contacto portada" />
        </div>
        <h1 className="contacto__hero-title">Contacto</h1>
        <div className="contacto__hero-layout"></div>
      </section>

      <div className="contacto__layout">
        <div className="contacto__title">
          <h2>Contáctenos en cualquiera de los siguientes medios.</h2>
          <p>Para nosotros será un placer atenderle.</p>
        </div>
        <div className="contacto__cards">
        <a className="contacto__cardContact whatsapp" href="https://wa.me/525615657942?text=Buen%20día,%20me%20gustaria%20obtener%20información" target="_blank">
          <div className="">
            <h4>WhatsApp</h4>
            <div className="contacto__cardContact-icon">
              <FaWhatsapp/>
            </div>
          </div>
        </a>
        <a className="contacto__cardContact email" href="mailto:ica.contacto@gmail.com?Subject=Me%20gustaría%20obtener%20información" target="_blank">
          <div>
            <h4>Email</h4>
            <div className="contacto__cardContact-icon">
              <FiMail/>
            </div>
          </div>
        </a>
        <a className="contacto__cardContact facebook" href="https://m.me/icazteca/" target="_blank">
          <div>
            <h4>Facebook</h4>
            <div className="contacto__cardContact-icon">
              <FaFacebookF/>
            </div>
          </div>
        </a>
        <a className="contacto__cardContact instagram" href="https://www.instagram.com/icazteca/" target="_blank">
          <div>
            <h4>Instagram</h4>
            <div className="contacto__cardContact-icon">
              <FaInstagram/>
            </div>
          </div>
        </a>

        </div>

      </div>

      <Footer/>
    </>
  );
};

export default Contacto;
