import style from "./../index.css"
import search from "./icons/search.svg"


const Searchbar = ({label})=>{
    return(
        <div className="search-bar">
                <img src={search}></img>
                <input  type="search" placheholder ="Search..."></input>
        </div>

    )
}

export default Searchbar