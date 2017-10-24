import React from 'react';
import Issue from './Issue';

const IssueList = (props) => (
	<div>
		<Issue data={props}/>
		{props.items}
	</div>
)

export default IssueList;