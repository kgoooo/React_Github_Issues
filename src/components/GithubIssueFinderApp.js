import React from 'react';
import FiltersBar from './FiltersBar'
import IssueList from './IssueList'
import SearchHeader from './SearchHeader'

class GithubIssueFinderApp extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			language: 'javascript',
			issueState: 'open',
			label: ''
		}
	}
	handleSubmitLabel = (label) => {
		this.setState(() => ({
			label
		}))
		console.log(this.state);
	}
	handleLanguageChange = (e) => {
		const language = e.target.value;
		this.setState(() => ({
			language
		}))
		console.log(this.state)
	}
	//THIS is not finisheed yet necissarilly
	handleIssueStateChange = (e) => {
		const issueState = e.target.value;
		this.setState(() => ({
			issueState
		}))
		console.log(this.state);		
	}
	render(){
		return(
			<div>
				<SearchHeader 
					onSubmitLabel={this.handleSubmitLabel}
				/>
				<FiltersBar 
					onLanguageChange={this.handleLanguageChange}
					onIssueStateChange={this.handleIssueStateChange}
				/>
				<IssueList />
			</div>
		)
	}
}

export default GithubIssueFinderApp;