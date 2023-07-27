import React from "react";

const NoticiasCard = () => {

    const datos = [
            {
                image: "../../src/assets/noticias1.jpg",
                title: 'Titulo 1',
                description: 'Sapien porttitor facilisi tortor diam turpis magna pretium dis, vehicula urna eleifend quisque curabitur dictum cubilia.'
            },
            {
                image: '../../src/assets/noticias2.jpg',
                title: 'Titulo 2',
                description: 'Sapien porttitor facilisi tortor diam turpis magna pretium dis, vehicula urna eleifend quisque curabitur dictum cubilia.'
            },
            {
                image: '../../src/assets/noticias3.jpg',
                title: 'Titulo 3',
                description: 'Sapien porttitor facilisi tortor diam turpis magna pretium dis, vehicula urna eleifend quisque curabitur dictum cubilia.'
            },
            {
                image: '../../src/assets/noticias4.jpg',
                title: 'Titulo 4',
                description: 'Sapien porttitor facilisi tortor diam turpis magna pretium dis, vehicula urna eleifend quisque curabitur dictum cubilia.'
            },
    ]

    return(
        <>  
            {
                datos.map((item,index)=>{
                    return(
  
                        <div key={index} className="card__example-container">
                        <div className="card__example-body">
                            <div className="card__example-image">
                                        <img src={item.image} alt="image prueba" />
                            </div>
                            <div className="card__example-text">
                                <p> {item.title} </p>
                            </div>
                        </div>
                      </div>
                    )
                })
            }

        </>
    )
}


export default NoticiasCard;








// {
//     (data) ? (
//         data.map((item,index)=>{
//             return(
//                 <div key={index} className="noticias__card">
//                     <img src={item.full_picture} alt="publication image" />
//                     <div className="title">
//                         <h3>{item.message}</h3>
//                     </div>
//                 </div>
//             )
//         })
//     ) : ''
// }