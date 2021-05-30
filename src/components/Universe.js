import DesktopNavbar from "./DesktopNavbar"
import Hero from "./Hero"
import ScrollBtn from "./ScrollBtn"
import MainPanel from "./MainPanel"
import Footer from "./Footer"
const Universe =()=>{
 return(
     <div>
        <DesktopNavbar showSearch="true" showButtons="false"></DesktopNavbar>
        <MainPanel></MainPanel>
        <Footer></Footer>
     </div>
 )   
}


export default Universe