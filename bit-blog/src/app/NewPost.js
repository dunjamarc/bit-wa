import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import createPost from '../services/newPostService.js';

class NewPost extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			textareaValue: ''
		};
	}

	handleChange = (event) => {
		if (event.target.id === 'input_text') {
			this.setState({
				inputValue: event.target.value
			});
		} else {
			this.setState({
				textareaValue: event.target.value
			});
		}
	}

	handleClick= event => {
		const obj = {userId: 11,
			title: this.state.inputValue,
			body: this.state.textareaValue
		}
		createPost.fetchCreatePost(obj)
		.then(data => {
			window.location.hash = '#/home';
		});
	
	}


	render() {

		return (
			<div className="container">
				<h4>NEW POST</h4>
				<form className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<p>Title</p>
							<input onChange={this.handleChange} id="input_text" type="text" data-length="10" value={this.state.inputValue} />
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<p>Content</p>
							<textarea onChange={this.handleChange} id="textarea1" rows="10" className="materialize-textarea" data-length="120" value={this.state.textareaValue}></textarea>
						</div>
					</div>
					<Link to='/home' className="waves-effect waves-light btn">Cancel</Link>
					<a onClick={this.handleClick} className="waves-effect waves-light btn">Save</a>
				</form>
			</div>
		)
	}
}

export default NewPost;