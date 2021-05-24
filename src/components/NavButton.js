
import styles from "../index.css";
import disc from "./icons/discover.svg";
import cont from "./icons/contact.svg";
import comm from "./icons/community.svg";


const NavButton = ({first,second,third}) => {
        return(
        <div className="navButtons"> 
            <a href="#">{first} </a> <img src={disc}></img> 
            <a href="#">{second} </a><img src={cont}></img> 
            <a href="#">{third} </a><img src={comm}></img> 
        </div>
    )
}


export default NavButton;