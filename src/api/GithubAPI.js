import axios from 'axios';

// const GITHUB_API_URL = 'https://api.github.com/issues/'
// const GITHUB_ISSUE_LABEL_URL = `https://api.github.com/search/issues?q=state:${issueState}+language:${language}`
// const GITHUB_VUEJS_ISSUE_URL = 'https://api.github.com/repos/vuejs/vue/issues'

module.exports = {
	getIssues: (issueState, language) => {
		// const encodedSearch = encodeURIComponent(filterTerm);
		const requestURL = `https://api.github.com/search/issues?q=state:${issueState}+language:${language}`

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