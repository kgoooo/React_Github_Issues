import React from 'react';
import Issue from './Issue';

class IssueList extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				{this.props.data ? this.props.data.items.map((issue, i) =>
					<Issue
						key={this.props.data.items[i].id}
						url={this.props.data.items[i].html_url}
						title={this.props.data.items[i].title}
						issueNumber={this.props.data.items[i].number}
						createdAt={this.props.data.items[i].created_at}
						userLogin={this.props.data.items[i].user.login}
						userURL={this.props.data.items[i].user.html_url}
						comments={this.props.data.items[i].comments}
						labelsNumber={this.props.data.items[i].labels.length}
						labelsArray={this.props.data.items[i].labels}
					/> ) : <p className="pre-search">Please add your search parameters and click search to see the results!</p>}
			</div>
		)
	}
}

export default IssueList;
