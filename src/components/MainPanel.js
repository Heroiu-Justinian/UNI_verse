import ActivityNav from "./ActivityNav"
import UniSection from "./UniSection"
import NewsSection from "./NewsSection"
const MainPanel = () =>{
        return(
            <div className="panel">
                <div className="uniPanel">
                    <ActivityNav first="universitati" second="internshipuri" third="voluntariat"></ActivityNav>
                    <UniSection></UniSection>
                </div>
                <div className="newsPanel">
                    <h2>Noutati</h2>
                    <NewsSection></NewsSection>
                </div>
            </div>
        )
}


export default MainPanel