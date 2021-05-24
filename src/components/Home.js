import styles from "./../index.css"
import DesktopNavbar from "./DesktopNavbar"
import Hero from "./Hero"
import ScrollBtn from "./ScrollBtn"


const Home =() =>{
    const scrollDown=()=>{
        window.scrollTo(0,1000)
    }


    return(
    <div className="container-fluid">
            <DesktopNavbar showSearch={false}/>
            <Hero first="discover" second="learn" third="connect"></Hero>
            <ScrollBtn action = {scrollDown}></ScrollBtn> 
    </div>
    )
}

export default Home
 