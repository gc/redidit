import React, { Component } from "react";
import PropTypes from "prop-types";
import PostListingColumn from "./PostListingColumn";

class PostListing extends Component {
	chunk(entries, chunkSize) {
		if (!Array.isArray(entries)) throw new TypeError('entries is not an array.');
		if (!Number.isInteger(chunkSize)) throw new TypeError('chunkSize is not an integer.');
		const clone = entries.slice();
		const chunks = [];
		while (clone.length) chunks.push(clone.splice(0, chunkSize));
		return chunks;
	}
	render() {
		const { posts } = this.props;
		return (
				<div className="d-flex justify-content-around flex-wrap mt-3">
					{this.chunk(posts, 3).map(arr => <PostListingColumn posts={arr} hideNSFW={this.props.hideNSFW} key={arr[0].data.id + arr[1].data.id} />)}
				</div>
		);
	}
}

PostListing.propTypes = {
	posts: PropTypes.array.isRequired
};

export default PostListing;
