import React from 'react';

const Issue = (props) => (
	<div className="issue-wrapper">
		<div>
			<h4>Title</h4>
		</div>
		<div className="issue-details-wrapper">
			<div className="issue-details">
				<p>Issue #349</p>
				<p>Created 39 days ago</p>
				<p><strong>Username</strong></p>
			</div>
			<div>
				<p>20 Comments +</p>
			</div>
		</div>
	</div>
)

export default Issue;