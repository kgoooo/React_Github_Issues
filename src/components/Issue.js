import React from 'react';

// const Issue = (props) => (
// 	<div className="issue-wrapper">
// 		<div>
// 			{props.data.data ? <h4>{props.data.data.items[0].title}</h4> : <h4>Title</h4>}
// 		</div>
// 		<div className="issue-details-wrapper">
// 			<div className="issue-details">
// 				{props.data.data ? <p>Issue #{props.data.data.items[0].number}</p> : <p>Issue #999</p>}
// 				{props.data.data ? <p>Created at {props.data.data.items[0].created_at}</p> : <p>Created at 2017-10-25T02:24:25Z</p>}
// 				{props.data.data ? <p><strong>Username: {props.data.data.items[0].user.login}</strong></p> : <p><strong>Username</strong></p>}				
				
// 			</div>
// 			<div>
// 				{props.data.data ? <p>{props.data.data.items[0].comments} Comments</p> : <p>Comments: 69</p>}			
// 			</div>
// 		</div>
// 		<div>
// 			{props.data.data ? <p>{props.data.data.items[0].labels.length} Labels</p> : <p>22 Labels</p>}			
// 		</div>
// 	</div>
// )

// export default Issue;

const Issue = (props) => (
	<div className="issue-wrapper">
		<div>
			{props.data.data ? <h4>{props.data.data.items[0].title}</h4> : <h4>Title</h4>}
		</div>
		<div className="issue-details-wrapper">
			<div className="issue-details">
				{props.data.data ? <p>Issue #{props.data.data.items[0].number}</p> : <p>Issue #999</p>}
				{props.data.data ? <p>Created at {props.data.data.items[0].created_at}</p> : <p>Created at 2017-10-25T02:24:25Z</p>}
				{props.data.data ? <p><strong>Username: {props.data.data.items[0].user.login}</strong></p> : <p><strong>Username</strong></p>}

			</div>
			<div>
				{props.data.data ? <p>{props.data.data.items[0].comments} Comments</p> : <p>Comments: 69</p>}
			</div>
		</div>
		<div>
			{props.data.data ? <p>{props.data.data.items[0].labels.length} Labels</p> : <p>22 Labels</p>}
		</div>
	</div>
)

export default Issue;