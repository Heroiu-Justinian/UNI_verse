import Card from "./Card"
import face from "./images/upb.png"

const UniSection =()=>{
    const importAll =(name)=>{
        let images = {};
        name.keys().map((item,index) => {images[item.replace("./","")] = name(item);})
    }

    return(
        <section>
            <Card uniName="Universitatea Politehnica Bucuresti" image={face}
             first="Pozitie uniRank : #3"
             second="Pozitie UNI_verse: #2"
             third="Rating"
             > </Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </section>
    )
}
export default UniSection