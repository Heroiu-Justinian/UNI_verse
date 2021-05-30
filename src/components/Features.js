import Feature from "./SingleFeature"
import building from "./icons/buildingIcon.svg"
import ranks from "./icons/ranksIcon.svg"
import interact from "./icons/messageIcon.svg"
import bulb from "./icons/bulbIcon.svg"
import name from "./icons/name.svg"
import ButtonWhole from "./ButtonWhole"
const Features = () =>{
    return(
        <div className="featuresContainer">
            <div className="featuresPanel">
                <img src={name} className="projectName"></img>
                <Feature icon={building} text="Gaseste oportunitati de studiu universitar"></Feature>
                <Feature icon={ranks} text="Vezi parerile si experientele altor studenti"></Feature>
                <Feature icon={interact} text="Interactioneaza cu comunitatea"></Feature>
                <Feature icon={bulb} text="Gaseste oportunitati de studiu universitar"></Feature>
                <a href="/universe"><ButtonWhole label="Incearca" type="whole"></ButtonWhole></a>
            </div>
        </div>
    )
}

export default Features