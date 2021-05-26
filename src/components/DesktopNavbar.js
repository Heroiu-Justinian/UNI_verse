import logo from "./../logo.svg"
import styles from "../index.css";
import NavButton from "./NavButton"
import Searchbar from "./Searchbar"




const DesktopNavbar = ({showSearch}) => {
  const disp = window.screen.width > 720?true:false
  const search = showSearch? "flex" :"none";


  return (
    <div className="desktopNavbar" >
      <div style={{display:disp?"inline":"none"}}><img className="logo" src={logo} ></img></div>
      {/* could not find any other fast way than additional div wrapper */}
      <div style={{display:showSearch?"flex":"none" }} className="search-bar">
        <Searchbar  label="Cauta..."></Searchbar>
      </div>

      <NavButton first="discover" second="contact" third="community"/> 
    </div>
     );
};



export default DesktopNavbar;