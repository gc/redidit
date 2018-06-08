import React, { Component } from "react";
import PropTypes from "prop-types";
import PostListingItem from "./PostListingItem";

class PostListing extends Component {
	render() {
		const { posts } = this.props;
		return (
				<div className="row">
						{posts.map(post => <PostListingItem post={post} key={post.data.name} />)}
				</div>
		);
	}
}

PostListing.propTypes = {
	posts: PropTypes.array.isRequired
};

export default PostListing;
