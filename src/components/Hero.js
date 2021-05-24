import {Container,Row,Col} from "react-bootstrap"
import disc from "./illustration/discover.png"
import hologram from "./illustration/unigram.png"
import learn from "./illustration/learn.png"
import connect from "./illustration/connect.png"
import nasture from "./icons/nasture.svg"
import logo from "./../logo.svg"
const Hero = ({first,second,third})=>{
    if(window.screen.width > 1100){
        return(
                <div className="hero">
                    <img src={disc}></img>
                    <img src={learn} className="learn"></img>
                    <img src={connect}></img>
                </div>
            )

    }
    else{
        return(
            <div className ="hero" style={{flexDirection:"column"}}>
                <img className="bigLogo" src={logo}></img>
                <div className="mobileHero">
                    <img src={hologram} style={{margin:0 }}></img>
                    <div className="mobileHeroText">
                        <div className="bullet">
                            <img src={nasture}></img> <p>{first}</p>
                        </div>
                        <div className="bullet">
                            <p>{second}</p> <img src={nasture}></img> 
                        </div>
                        <div className="bullet">
                            <img src={nasture}></img> <p>{third}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Hero