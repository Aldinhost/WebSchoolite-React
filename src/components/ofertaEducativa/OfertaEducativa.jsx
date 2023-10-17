/* eslint-disable react/no-unescaped-entities */
import Cards from "../card/Cards";

const OfertaEducativa = () => {

    return(
        <>
            <section className="ofertaEducativa__container">
            <div className="ofertaEducativa__intro">
                <h2 className="oferta__title">Oferta Educativa</h2>
                <p className="oferta__paragraph">"Proporcionamos una Educación Integral y de calidad, basada en los valores universales y en los principios de la educación individual."</p>
            </div>
                <div className="cards__container">
                    <Cards/>
                </div>
            </section>
        </>  
    )
}

export default OfertaEducativa;