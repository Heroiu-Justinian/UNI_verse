import newsPreview from "./images/newsPreview.png"
import forward from "./icons/gotoButton.svg"

const NewsCard =({title,date,description})=>{
	return(
		<div className="newsCard">
			<div className="newsPreview">
				<img src={newsPreview}></img>	
			</div>	
			<div className="lowerNewsCard">
				<h3 className="date">4 Aprilie 2021</h3>
				<h2 className="newsCardTitle">Sum Title</h2>
				<p className="newsCardDescription">Lorem ipsum dolor matan kur Deserunt deserunt ex cupidatat commodo aliqua consectetur eiusmod cillum esse aute aliquip et. Exercitation qui ad duis esse voluptate excepteur nisi aute sunt adipisicing commodo culpa Lorem occaecat. Esse Lorem pariatur consequat consequat. Minim commodo ut fugiat elit in nostrud nisi consequat aliqua. Deserunt aliqua sint laborum culpa esse voluptate anim in proident. Ad ullamco sunt velit esse laborum commodo mollit labore nostrud laboris reprehenderit aliquip. Officia eiusmod culpa fugiat consequat aliqua.</p>
				<img src={forward}></img>
			</div>
		</div>
	)
}


export default NewsCard