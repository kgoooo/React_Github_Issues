import React from 'react';
import GithubIssueFinderApp from './GithubIssueFinderApp';

const FiltersBar = (props) => (
	<div className="filters-wrapper">
		<div className="openCloseWrapper">
				<button 
					onClick={props.onIssueStateChange}
					value="open"
					className={props.issueState === "open" ? 'btn btnActive open' : 'btn open'}
				>
					Open
				</button>
				<button
					onClick={props.onIssueStateChange}
					value="closed"
					className={props.issueState === "closed" ? 'btn btnActive closed' : 'btn closed'}
				>
					Closed
				</button>
			</div>
			<div>
				<button className="btn language">Language:</button>
				<select name="language" onChange={props.onLanguageChange} className="btn">
					<option value="javascript">JavaScript</option>
					<option value="go">Go</option>
					<option value="ruby">Ruby</option>
					<option value="python">Python</option>
					<option value="java">Java</option>
				</select>
				<button onClick={props.onSearch} className="btn btnActive search">Search</button>
			</div>
		</div>
)


export default FiltersBar;