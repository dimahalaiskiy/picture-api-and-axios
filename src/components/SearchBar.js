import React from 'react';

class SearchBar extends React.Component {
	constructor() {
		super();

		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(e) {
		this.setState({ term: e.target.value });
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
			<div className='ui segment'>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div className='field'>
						<label>Image Search</label>
						<input onChange={this.onInputChange} className='' type='text' />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
