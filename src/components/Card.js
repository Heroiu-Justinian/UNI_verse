import nasture from "./icons/nasture.svg"
import ButtonWhole from "./ButtonWhole"



const Card = ({uniName,image,first,second,third})=>{
    return(
        <div className="cardContainer">
                <h2>{uniName}</h2>
                <div className="lowerCardContainer">
                    <img src={image} alt="lasamaanpacecuwarningumati" className="previewImg"></img>
                    <div className="ranks">
                         <div >
                            <img src={nasture}></img> <p>{first}</p>
                        </div>
                        <div >
                           <img src={nasture}></img>   <p>{second}</p> 
                        </div>
                        <div >
                            <img src={nasture}></img> <p>{third}</p>
                        </div>
                    </div>
                    {/* <ButtonHollow></ButtonHollow> */}
                    <div className="buttonSection">
                            <ButtonWhole label="descriere" type="whole"></ButtonWhole>
                            <ButtonWhole label="descriere" type="hollow"></ButtonWhole>
                    </div>
                                   </div>
        </div>
    )
}

export default Card