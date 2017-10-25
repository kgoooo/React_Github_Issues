import React from 'react';
import Issue from './Issue';
import GithubIssueFinderApp from './GithubIssueFinderApp';

// const IssueList = (props) => (
// 	<div>
// 		<Issue data={props}/>
// 	</div>
// )

// export default IssueList;

class IssueList extends React.Component{
	constructor(props){
		super(props)
	}
	mapIssuesToList = (props) => {
		for(var i = 0; i < 5; i++){
			const title = this.props.data.items[i].title;
			const issueNumber = this.props.data.items[i].number;
			const createdAt = this.props.data.items[i].created_at;
			const userLogin = this.props.data.items[i].user.login;
			const comments = this.props.data.items[i].comments;
			console.log("title: " + title + " - # " + issueNumber);
		}
	}
	render(){
		return(
			<div>
				<button onClick={this.mapIssuesToList} >CLICK</button>
				<Issue data={this.props} />
			</div>
		)
	}
}

export default IssueList;