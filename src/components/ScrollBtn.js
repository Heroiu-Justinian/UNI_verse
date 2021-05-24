import btn from "./icons/scroll.svg"


const ScrollBtn=({action})=>{
        return(
        <div className="scroll">
           <button onClick={action}><img src={btn} ></img></button> 
            <p>See more</p>
        </div>
        
    )
}
export default ScrollBtn 