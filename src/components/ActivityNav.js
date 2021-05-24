import styles from "./../universe.css"


const ActivityNav = ({first,second,third})=>{
    return(
            <ul className="activityNav">
                <li className="actvityNavButton"><a href="#">{first}</a></li>
                <li className="actvityNavButton"><a href="#">{second}</a></li>
                <li className="actvityNavButton"><a href="#">{third}</a></li>
            </ul>
   )
}


export default ActivityNav;