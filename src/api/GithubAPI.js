import axios from 'axios';

module.exports = {
	getIssues: (issueState, language, label) => {
		// const encodedSearch = encodeURIComponent(filterTerm);
		const requestURL = `https://api.github.com/search/issues?q=state:${issueState}+language:${language}+label:${label}`

		return axios.get(requestURL).then((res) => {
			console.log(res);
			if(!res.data){
				throw new Error('No issues at this time');
			}
			else {
				return res.data
			}
		}, (err) => {
			throw new Error('No issues found!')
		})
	}
}