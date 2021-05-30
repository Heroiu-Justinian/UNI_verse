import graph from "./illustration/ToTheMoon.png"
import foss from "./images/foss.png"

const Contribute =()=>{
    return(
        <div className="contribute">
            <h1>contribuie,invata si obtine experienta</h1>
            <div className="contribLower">
                <img src={graph} className="graph"></img>
                            <div className="foss">
                                <img src={foss}></img>
                                <p>
                                Echipa AlacrITy este suporter al miscarii FOSS (Free and Open Source Software).
                                Contribuie cu cod <a href="https://github.com/Heroiu-Justinian/UNI_verse">AICI</a>
                                </p>
                            </div>
            </div>
            <p>Contribuind la proiect ai sansa de a dobandi experienta in folosirea tehnologiilor web, experienta pe care o poti mentiona in CV si care va face diferenta in momentul angajarii</p>
        </div>
    )
}

export default Contribute