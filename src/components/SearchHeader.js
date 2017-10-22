//trying to get the input to register properly in GIFA, and update there,  
//Currently works on updating state in its own component...

import React from 'react';
import GithubAPI from '../api/GithubAPI'

// class SearchHeader extends React.Component{
// 	constructor(props){
// 		super(props)

// 		this.state = {
// 			label: ''
// 		}
// 	}
// 	handleOnChange = (e) => {
// 		this.setState({ label: e.target.value })
// 		console.log(this.state);
// 	}
// 	handleLabelSubmit = (e) => {
// 		e.preventDefault();
// 		console.log('submitted: ' + this.state.label);
// 	}
// 	render(){
// 		return(
// 			<div className="header-container">
// 				<div>
// 					<h1 className="header">Github Issues Finder</h1>
// 				</div>
// 				<form onClick={this.handleLabelSubmit}>
// 					<button >Add Label</button>
// 					<input onChange={this.handleOnChange} type="text" value={this.state.label} placeholder="Add labels here"/>
// 				</form>
// 			</div>
// 		)
// 	}
// }


class SearchHeader extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			label: ''
		}
	}
	handleOnChange = (e) => {
		this.setState({ label: e.target.value })
		// console.log(this.state);
	}
	handleLabelSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmitLabel(this.state.label)
		// console.log('submitted: ' + this.state.label);
	}
	render(){
		return(
			<div className="header-container">
				<div>
					<h1 className="header">Github Issues Finder</h1>
				</div>
				<form onClick={this.handleLabelSubmit}>
					<button >Add Label</button>
					<input onChange={this.handleOnChange} type="text" value={this.state.label} placeholder="Add labels here"/>
				</form>
			</div>
		)
	}
}

	

export default SearchHeader;