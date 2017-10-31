import React from 'react';
import Issue from './Issue';

class IssueList extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const data = this.props.data
		return(
			<div>
				{data ? data.items.map((issue, i) =>
					<Issue
						key={data.items[i].id}
						url={data.items[i].html_url}
						title={data.items[i].title}
						issueNumber={data.items[i].number}
						createdAt={data.items[i].created_at}
						userLogin={data.items[i].user.login}
						userURL={data.items[i].user.html_url}
						comments={data.items[i].comments}
						labelsNumber={data.items[i].labels.length}
						labelsArray={data.items[i].labels}
					/> ) : <p className="pre-search">Please add your search parameters and click search to see the results!</p>}
			</div>
		)
	}
}

export default IssueList;
