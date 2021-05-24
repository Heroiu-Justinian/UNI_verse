import plus from "./icons/plus.svg"


const ButtonWhole = ({label,type})=>{
    return(
               <button className={"button "+type}>{label}</button>
    )
}

export default ButtonWhole