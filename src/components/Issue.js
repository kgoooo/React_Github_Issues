import React from 'react';
import moment from 'moment';


const Issue = (props) => {
	const now = moment(Date.now());
	const created = moment(Date.parse(props.createdAt));
	const daysSinceCreated = created.from(now)
	return (
		<div className="issue-wrapper">
			<div>
				<a href={props.url}><h3>{props.title}</h3></a>
			</div>
			<div className="issue-details-wrapper">
				<div className="issue-details">
					<p className="issue-P">Issue #{props.issueNumber}</p>
					<p>Created {daysSinceCreated}</p>
					<p>by:<strong><a href={props.userURL} className="user-link"> {props.userLogin} </a></strong></p>
				</div>
				<div>
					<p className="comments">{props.comments} Comments</p>
				</div>
			</div>
			<div>
				{props.labelsNumber !== 1 ? <p className="labels">{props.labelsNumber} Labels</p> :
					<p className="labels">{props.labelsNumber} Label</p>}
				<div className="label-color-div">
					{props.labelsArray.length > 0 ? props.labelsArray.map((label, i) =>
						<p
							key={props.labelsArray[i].id}
							className="label-color"
							style={{background: '#' + props.labelsArray[i].color}}
						>{props.labelsArray[i].name}</p>) : null}
				</div>
			</div>
		</div>
	);
}

export default Issue;