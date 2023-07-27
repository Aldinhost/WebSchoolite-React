import React from 'react'

const Docentes = ( {p1, p2, p3 , p4} ) => {
  return (
    <section className="preescolar__docentes section__padding">
    <img src="../../../src/assets/docentesPreescolar2.jpg" alt="docentes preescolar" />
  <div className="preescolar__docentes-container">
    <p> {p1} </p>
    <p> {p2} </p>
    <p> {p3} </p>

  </div>

</section>
  )
}

export default Docentes