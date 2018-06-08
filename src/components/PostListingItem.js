import React, { Component } from "react";
import PropTypes from "prop-types";

class PostListingItem extends Component {
	render() {
		const { post } = this.props;
		return (
			<li>
					<div>
						<h3>{post.data.title.slice(0, 100)}</h3>
					</div>
			</li>
		);
	}
}

PostListingItem.propTypes = {
	post: PropTypes.object.isRequired
};

export default PostListingItem;
