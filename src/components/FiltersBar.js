import React from 'react';
import GithubIssueFinderApp from './GithubIssueFinderApp';

// class FiltersBar extends React.Component{
// 	constructor(props){
// 		super(props)
// 	}
// 	onLanguageChange = (e) => {
// 		const language = e.target.value;
// 		Git.handleLanguageChange(language)
// 	}
// 	render(){
// 		return(
// 			<div className="filters-wrapper">
// 					<div>
// 						<button>Open</button>
// 						<button>Closed</button>
// 					</div>
// 					<div>
// 						<button>Language:</button>
// 						<select name="language" onChange={this.onLanguageChange}>
// 							<option value="javascript">JavaScript</option>
// 							<option value="go">Go</option>
// 							<option value="ruby">Ruby</option>
// 							<option value="python">Python</option>
// 							<option value="java">Java</option>
// 						</select>
// 					</div>
// 				</div>
// 		)
// 	}
// }


const FiltersBar = (props) => (
		<div className="filters-wrapper">
			<div className="openCloseWrapper">
				<button 
					onClick={props.onIssueStateChange} value="open" className="btn btnActive">Open</button>
				<button onClick={props.onIssueStateChange} value="closed" className="btn">Closed</button>
			</div>
			<div>
				<button className="btn">Language:</button>
				<select name="language" onChange={props.onLanguageChange}>
					<option value="javascript">JavaScript</option>
					<option value="go">Go</option>
					<option value="ruby">Ruby</option>
					<option value="python">Python</option>
					<option value="java">Java</option>
				</select>
				<button onClick={props.onSearch}>Search</button>
			</div>
		</div>
)


export default FiltersBar;