


const SingleFeature =({icon,text})=>{
    return(
        <div className="feature">
            <img src={icon} alt="icon"></img>
            <p>{text}</p>
        </div>
        
    )
}

export default SingleFeature;