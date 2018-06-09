import React, { Component } from "react";
import PropTypes from "prop-types";

class Nav extends Component {
	state = {
		subreddit: 'all'
	}

	handleSubmit = (event) => {
		console.log('handleSubmit')
		this.updatePostListing(this.state.subreddit);
		event.preventDefault();
	}

	updatePostListing(subreddit, type) {
		console.log('updatePostListing')
		this.props.fetchPostsFor(this.state.subreddit, type);
	}

	handleChange = (event) => {
		console.log('handleChange')
		this.setState({subreddit: event.target.value})
	}

	sortTypes = (arr) => {
		return arr.map(sort => {
			return (
				<li className="nav-item mr-3" key={sort}>
					<button type="button" className="btn btn-secondary btn-sm" onClick={() => this.updatePostListing(this.state.subreddit, sort)}>
						{sort}
					</button>
				</li>
			)
		})
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			  <a className="navbar-brand" href="/">Redidit!</a>
			  <button className="navbar-toggler" type="button">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      {this.sortTypes(['hot', 'new', 'rising', 'controversial', 'top', 'gilded'])}
			    </ul>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<button type="button" className="btn btn-sm btn-danger">
							<input type="checkbox" className="p-5" onChange={this.props.nsfwFilter} checked={this.props.hideNSFW} /> NSFW Filter
							</button>
					</div>
			    <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit.bind(this)}>
			      <input className="form-control mr-sm-2" type="text" onChange={this.handleChange.bind(this)} placeholder="Subreddit"/>
			      <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
			    </form>
			  </div>

			</nav>
		);
	}
}

/*
Nav.propTypes = {
	posts: PropTypes.array.isRequired
};
*/
export default Nav;
