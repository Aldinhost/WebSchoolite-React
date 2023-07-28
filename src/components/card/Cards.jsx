
import Card from "../card/Card";

const Cards = () => {

    const images = {
        preescolar: "../../src/assets/oferta-peescolar.jpg",
        primaria: "../../src/assets/oferta-primaria.jpg",
        secundaria: "../../src/assets/oferta-secundaria.jpg",
        preparatoria: "../../src/assets/oferta-prepa.jpg",
        universidad: "../../src/assets/universidad.webp",
        ingles: "../../src/assets/oferta-ingles.jpg"
    }


    return(
        <>
            <a className="" href="/preescolar">
                <Card
                image={images.preescolar}
                paragraph= {'Preescolar'}  
                />
            </a>
            <a className="" href="/primaria">
                <Card
                image={images.primaria}
                paragraph= {'Primaria'}    
                />
            </a>
            <a className="" href="/secundaria">
                <Card
                image={images.secundaria}
                paragraph= {'Secundaria'}
                />
            </a>
            <a className="" href="/preparatoria">
                <Card
                image={images.preparatoria}
                paragraph= {'Preparatoria'}
                />
            </a>
            <a className="" href="/universidad">
                <Card
                image={images.universidad}
                paragraph= {'Universidad'}
                />
            </a>
            <a className="" href="/ingles">
                <Card
                image={images.ingles}
                paragraph= {'Inglés'}
                />
            </a>
        </>
    )
}

export default Cards;