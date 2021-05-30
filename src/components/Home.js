import styles from "./../index.css"
import DesktopNavbar from "./DesktopNavbar"
import Hero from "./Hero"
import ScrollBtn from "./ScrollBtn"
import Features from "./Features"
import Contribute from "./Contribute"
import Footer from "./Footer"
const Home =() =>{
    const scrollDown=()=>{
        window.scrollTo(0,1100)
    }


    return(
    <div className="container-fluid">
            <DesktopNavbar showSearch={false} showButtons="true"/>
            <Hero first="discover" second="learn" third="connect"></Hero>
            <ScrollBtn action = {scrollDown}></ScrollBtn> 
            <Features></Features>
            <Contribute></Contribute>
            <Footer></Footer>
    </div>
    )
}

export default Home
 