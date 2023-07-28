import './Recorrido360.scss'


const Recorrido360 = () => {

    const markImgLab = document.querySelector('#markImgLab');
    const markImgPre = document.querySelector('#markImgPre');
    const markImgAud = document.querySelector('#markImgAud');
    const markImgSec = document.querySelector('#markImgSec');
    const markImgpatioPre = document.querySelector('#markImgpatioPre');
    const markImgTerraza = document.querySelector('#markImgTerraza');
    const nameParagraph = document.querySelector('#nameParagraph');
    const nameParagraph2 = document.querySelector('#nameParagraph2');
    const nameParagraph3 = document.querySelector('#nameParagraph3');
    const nameParagraph4 = document.querySelector('#nameParagraph4');
    const nameParagraph5 = document.querySelector('#nameParagraph5');
    const nameParagraph6 = document.querySelector('#nameParagraph6');
    const pz1 = document.querySelector('#pz1');
    const pz2 = document.querySelector('#pz2');
    const pz3 = document.querySelector('#pz3');
    const pz4 = document.querySelector('#pz4');
    const pz5 = document.querySelector('#pz5');

    const handleMouseOverL = () => {
        nameParagraph.classList.remove('hiddeMarkParagraph')
        nameParagraph.classList.add('showMarkParagraph');
        pz1.classList.add('pz1Movement');
    };
    const handleMouseOutL = () => {
        nameParagraph.classList.remove('showMarkParagraph')
        nameParagraph.classList.add('hiddeMarkParagraph');
        pz1.classList.remove('pz1Movement');
    };
    const handleMouseOverP = () => {
        nameParagraph2.classList.remove('hiddeMarkParagraph');
        nameParagraph2.classList.add('showMarkParagraph');
        pz2.classList.add('pz2Movement');
        pz3.classList.add('pz3Movement');
    };
    const handleMouseOutP = () => {
        nameParagraph2.classList.remove('showMarkParagraph');
        nameParagraph2.classList.add('hiddeMarkParagraph');
        pz2.classList.remove('pz2Movement');
        pz3.classList.remove('pz3Movement');
    };
    const handleMouseOverA = () => {
        nameParagraph3.classList.remove('hiddeMarkParagraph');
        nameParagraph3.classList.add('showMarkParagraph');
        pz4.classList.add('pz4Movement');
    };
    const handleMouseOutA = () => {
        nameParagraph3.classList.remove('showMarkParagraph');
        nameParagraph3.classList.add('hiddeMarkParagraph');
        pz4.classList.remove('pz4Movement');
    };
    const handleMouseOverS = () => {
        nameParagraph4.classList.remove('hiddeMarkParagraph');
        nameParagraph4.classList.add('showMarkParagraph');
        pz5.classList.add('pz5Movement');
    };
    const handleMouseOutS = () => {
        nameParagraph4.classList.remove('showMarkParagraph');
        nameParagraph4.classList.add('hiddeMarkParagraph');
        pz5.classList.remove('pz5Movement');
    };
    const handleMouseOverT = () => {
        nameParagraph5.classList.remove('hiddeMarkParagraph');
        nameParagraph5.classList.add('showMarkParagraph');
    };
    const handleMouseOutT = () => {
        nameParagraph5.classList.remove('showMarkParagraph');
        nameParagraph5.classList.add('hiddeMarkParagraph');
    };
    const handleMouseOverPP = () => {
        nameParagraph6.classList.remove('hiddeMarkParagraph');
        nameParagraph6.classList.add('showMarkParagraph');
    };
    const handleMouseOutPP = () => {
        nameParagraph6.classList.remove('showMarkParagraph');
        nameParagraph6.classList.add('hiddeMarkParagraph');
    };


    return(
        <>
        <div className="map__container" id="mapaIca">

            <h1>ICA<span>360°</span></h1>
            <h3>Mapa</h3>
            <section className="listMark__container">
                <a href="#">1. Preescolar</a>
                <a href="#">2. Laboratorio</a>
                <a href="#">3. auditorio</a>
                <a href="#">4. Secundaria</a>
                <a href="#">5. Terraza</a>
                <a href="#">6. Patio Preescolar</a>
            </section>
            
            <a href="../../pages/Recorrido/recorrido.html">
                <div className="marker location__lab">
                    <p className="hiddeMarkParagraph" id="nameParagraph">Laboratorio</p>
                    <div id="markImgLab" className="mark__img" onMouseOver={handleMouseOverL} onMouseOut={handleMouseOutL}>
                        <img src="../../src/assets/markSpot.png" alt="mark spot" />
                    </div>
                </div>
            </a>
            <a href="recorrido.html">
                <div className="marker location__preescolar">
                    <p className="hiddeMarkParagraph" id="nameParagraph2">Preescolar</p>
                    <div id="markImgPre" className="mark__img" onMouseOver={handleMouseOverP} onMouseOut={handleMouseOutP}>
                        <img src="../../src/assets/markSpot.png" alt="mark spot" />
                    </div>
                </div>
            </a>
            <a href="recorrido.html">
                <div className="marker location__auditorio">
                <p className="hiddeMarkParagraph" id="nameParagraph3">Auditorio</p>
                <div id="markImgAud" className="mark__img" onMouseOver={handleMouseOverA} onMouseOut={handleMouseOutA}>
                    <img src="../../src/assets/markSpot.png" alt="mark spot" />
                </div>
                </div>
            </a>
            <a href="recorrido.html">
                <div className="marker location__secundaria">
                <p className="hiddeMarkParagraph" id="nameParagraph4">Secundaria</p>
                <div id="markImgSec" className="mark__img" onMouseOver={handleMouseOverS} onMouseOut={handleMouseOutS}>
                    <img src="../../src/assets/markSpot.png" alt="mark spot" />
                </div>
                </div>
            </a>
            <a href="recorrido.html">
                <div className="marker location__terraza">
                <p className="hiddeMarkParagraph" id="nameParagraph5">Terraza</p>
                <div id="markImgTerraza" className="mark__img" onMouseOver={handleMouseOverT} onMouseOut={handleMouseOutT}>
                    <img src="../../src/assets/markSpot.png" alt="mark spot" />
                </div>
                </div>
            </a>
            <a href="recorrido.html">
                <div className="marker location__prePatio">
                <p className="hiddeMarkParagraph" id="nameParagraph6">Patio preescolar</p>
                <div id="markImgpatioPre" className="mark__img" onMouseOver={handleMouseOverPP} onMouseOut={handleMouseOutPP}>
                    <img src="../../src/assets/markSpot.png" alt="mark spot" />
                </div>
                </div>
            </a>
            
            <img className="lab_techo" src="../../src/assets/lab_techo_edif3.png" alt="techo edif3" id="pz1"/>
            <img className="pre_pared" src="../../src/assets/pared_edif3.png" alt="pared edif3" id="pz2"/>
            <img className="pre_pared2" src="../../src/assets/pared2_edif3.png" alt="pared edif3" id="pz3"/>
            <img className="auditorio" src="../../src/assets/techo_edif1.png" alt="auditorio" id="pz4"/>
            <img className="terraza" src="../../src/assets/terraza_edif2.png" alt="terraza" id="pz5"/>

        </div>
    </>
    )
}


export default Recorrido360;