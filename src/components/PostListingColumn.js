import React, { Component } from "react";
import PropTypes from "prop-types";
import PostListingItem from "./PostListingItem";

class PostListingColumn extends Component {
	render() {
		const { posts } = this.props;
		return (
				<div className="d-flex flex-column justify-content-sm-start">
						{posts.map(post => <PostListingItem post={post} hideNSFW={this.props.hideNSFW} key={post.data.id} />)}
				</div>
		);
	}
}

PostListingColumn.propTypes = {
	posts: PropTypes.array.isRequired
};

export default PostListingColumn;
