import React, { Component } from "react";
import PostListing from "./components/PostListing";
import Nav from "./components/Nav";

class App extends Component {
	state = {
		posts: []
	};

	componentDidMount() {
		fetch(`https://www.reddit.com/r/all/.json`)
			.then(res => res.json())
			.then(data => {
				this.setState({ posts: data.data.children });
			});
	}

	render() {
		return (
			<div>
				<Nav />
				{this.state.posts && <PostListing posts={this.state.posts} />}
			</div>
		);
	}
}

export default App;
