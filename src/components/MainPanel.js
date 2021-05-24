import ActivityNav from "./ActivityNav"
import UniSection from "./UniSection"
const MainPanel = () =>{
        return(
            <div className="panel">
                <div className="uniPanel">
                    <ActivityNav first="universitati" second="internshipuri" third="voluntariat"></ActivityNav>
                    <UniSection></UniSection>
                </div>
            </div>
        )
}


export default MainPanel