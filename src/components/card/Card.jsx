
const Card = ({image, paragraph }) =>{


    return(
        <>
            <div className="card__containerZoom card__Zoom">
                <img src={image} alt="imagen zoom" className="card__containerZoom-img"/>
                <div className="card__zoom-info">
                    <h1 className="text-center">{paragraph}</h1>
                </div>
            </div>
        </>
    )
}

export default Card;