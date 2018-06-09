import React, { Component } from "react";
import PostListing from "./components/PostListing";
import Nav from "./components/Nav";

class App extends Component {
	state = {
		posts: [],
		hideNSFW: localStorage.getItem('hideNSFW')
	};

	componentDidMount() {
		this.fetchPostsFor('all');
	}

	fetchPostsFor(subreddit, sort = 'hot') {
		fetch(`https://www.reddit.com/r/${subreddit}/${sort}/.json?limit=50`)
			.then(res => res.json())
			.then(data => {
				this.setState({ posts: data.data.children });
			});
	}

	nsfwFilter() {
		console.log('nsfwFilter: ', !this.state.hideNSFW)
		localStorage.setItem('hideNSFW', !this.state.hideNSFW);
		this.setState({ hideNSFW: !this.state.hideNSFW})
	}

	render() {
		return (
			<div>
				<Nav fetchPostsFor={this.fetchPostsFor.bind(this)} hideNSFW={this.state.hideNSFW} nsfwFilter={this.nsfwFilter.bind(this)} />
				{this.state.posts &&
					<PostListing posts={this.state.posts} updateListing={this.fetchPostsFor} hideNSFW={this.state.hideNSFW} />
				}
			</div>
		);
	}
}

export default App;
