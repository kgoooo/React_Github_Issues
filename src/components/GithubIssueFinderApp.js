import React from 'react';
import FiltersBar from './FiltersBar';
import IssueList from './IssueList';
import SearchHeader from './SearchHeader';
import GithubAPI from '../api/GithubAPI';

class GithubIssueFinderApp extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			language: 'javascript',
			issueState: 'open',
			label: '',
			data: undefined
		}
	}
	handleSearch = () => {
		GithubAPI.getIssues(this.state.issueState, this.state.language, this.state.label).then((data) =>{
			this.setState(()=> ({ data }))
			console.log(data.items[0].title);		
		})
	};
	handleSubmitLabel = (label) => {
		this.setState(() => ({
			label
		}));
	};
	handleLanguageChange = (e) => {
		const language = e.target.value;
		this.setState(() => ({
			language
		}));
	};
	handleIssueStateChange = (e) => {
		const issueState = e.target.value;
		this.setState(() => ({
			issueState
		}));	
	};
	
	render(){
		return(
			<div>
				<SearchHeader 
					onSubmitLabel={this.handleSubmitLabel}
				/>
				<FiltersBar 
					onLanguageChange={this.handleLanguageChange}
					onIssueStateChange={this.handleIssueStateChange}
					onSearch={this.handleSearch}
					issueState={this.state.issueState}
				/>
				<IssueList data={this.state.data}/>
			</div>
		)
	}
}

export default GithubIssueFinderApp;