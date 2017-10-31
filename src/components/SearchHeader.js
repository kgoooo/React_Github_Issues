import React from 'react';
import GithubAPI from '../api/GithubAPI'

class SearchHeader extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			label: ''
		}
	}
	handleOnChange = (e) => {
		this.setState({ label: e.target.value })
	}
	handleLabelSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmitLabel(this.state.label)
	}
	render(){
		return(
			<div className="header-container">
				<div>
					<h1 className="header">Github Issues Finder</h1>
				</div>
				<form onClick={this.handleLabelSubmit}>
					<button className="btn btnActive">Add Label</button>
					<input onChange={this.handleOnChange} type="text" value={this.state.label} placeholder="Add labels here"/>
				</form>
			</div>
		)
	}
}

export default SearchHeader;