import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import PrivacyNotice from "./Privacy";

const Footer = () =>{

    const copyright = new Date();
    const update = copyright.getFullYear();
    

    return(
        <>
            <div className="footer__container">
                <div className="logo__container">
                    <div className="imgLogo__container">
                        <img src="../src/assets/logo_ica_noText.png" alt="logo ica" />
                    </div>
                    <p>Calle Nezahualcóyotl N°15, Ciudad Azteca, 1ra. Secc. Ecatepec de Morelos, Estado de México. C.P. 55120</p>
                    <div className="footer__privacyNotice">
                        <PrivacyNotice/>
                    </div>
                </div>
                <div className="content__container">
                    <div className="content__contact">

                        <div>
                            <h3>Teléfonos</h3>
                            <ul>
                                <li> <a href="tel: +525557741539">55 57 74 15 39</a></li>
                                <li> <a href="tel: +525557741070">55 57 74 10 70</a></li>
                            </ul>
                        </div>

                        <div className="margin__bottom">
                            <h3>Correo Electrónico</h3>
                            <a className="footer__mail-link" href="mailto:enlace@institutoculturalazteca.com?Subject=Me%20gustaría%20obtener%20información" target="_blank">
                            enlace@institutoculturalazteca.com
                            </a>
                        </div>
                    </div>
                    <div className="Footer__maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.9618379862554!2d-99.03982372491147!3d19.54325188175999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f026beb5709f%3A0xf225dcc9f9db38da!2sInstituto%20Cultural%20Azteca!5e0!3m2!1ses-419!2smx!4v1686708137354!5m2!1ses-419!2smx" style={{width: '89%', height: '202px', border:0, borderRadius: '3px'}} allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="content__links">
                        <a href="../../pages/admisiones/admisiones.html">Admisiones</a>
                    </div>

                    <div className="footer__social">
                        <h3>Síguenos: </h3>
                        <div className="footer__social-icons">
                            <a href="https://m.me/icazteca/" target="_blank"><FaFacebook /></a>
                            <a href="https://www.instagram.com/icazteca/" target="_blank"><FaInstagram/></a>
                            <a href="https://www.youtube.com/@institutoculturalazteca4506" target="_blank"><FaYoutube/></a>
                            <a href="https://wa.me/525615657942?text=Buen%20d%C3%ADa,%20me%20gustaria%20obtener%20informaci%C3%B3n" target="_blank"><FaWhatsapp/></a>
                        </div>
                    </div>


                </div>
            </div>

            <div className="footer__copyrights">
               <p><span>Instituto Cultural Azteca</span> | Copyright ©{ update } Derechos reservados.</p>
            </div>
            
        </>
    )
}

export default Footer;