
import Card from "../card/Card";

const Cards = () => {

    const images = {
        preescolar: "../../src/assets/preescolarCard.jpg",
        primaria: "../../src/assets/primaria.jpg",
        secundaria: "../../src/assets/secundaria.jpg",
        preparatoria: "../../src/assets/prepa.jpg",
        universidad: "../../src/assets/universidad.jpg",
        ingles: "../../src/assets/ingles.jpg"
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