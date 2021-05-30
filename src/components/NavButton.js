
import styles from "../index.css";
import disc from "./icons/discover.svg";
import cont from "./icons/contact.svg";
import comm from "./icons/community.svg";


const NavButton = ({first,second,third,buttons}) => {
    const showButtons = (buttons)?"flex":"none";
    console.log(showButtons)
        return(
        <div className="navButtons" /*style={{display:showButtons}}*/> 
            <a href="/universe">{first} </a> <img src={disc}></img> 
            <a href=".footer">{second} </a><img src={cont}></img> 
            <a href="#">{third} </a><img src={comm}></img> 
        </div>
    )
}


export default NavButton;