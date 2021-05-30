import contactIcon from "./icons/contact.svg"
import githubIcon from "./icons/github.svg"
import patreonIcon from "./icons/patreon.svg"

const Footer =()=>{
    return(
        <div className = "footer">
            <div className="footerSection">
                <div className="footerSectionTitle"><p>contact</p> <img src={contactIcon}></img></div>
                <div className="footerSectionBody">
                    <div className="footerSectionElement">
                        <p>Email</p> <a>alacritymlc@gmail.com</a>

                    </div>
                    <div className="footerSectionElement">
                        <p>Instagram</p> <a>@team_alacrity</a>
                    </div>
                </div>
            </div>
            <div className="footerSection">
                <div className="footerSectionTitle"><p>contribuie</p></div>
                <div className="footerSectionBody">
                    <div className="footerSectionElement">
                        <img src={githubIcon}></img><p>Github</p> <a href="https://github.com/Heroiu-Justinian/UNI_verse">UNI_verse</a>
                    </div>
                    <div className="footerSectionElement">
                        <img src={patreonIcon}></img><p>Patreon</p> <a>AlacrITy Patreon</a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer