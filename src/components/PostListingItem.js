import React, { Component } from "react";
import PropTypes from "prop-types";
import PostListingItemImage from "./PostListingItemImage";

class PostListingItem extends Component {
	render() {
		const { post } = this.props;
		const postURL = `https://www.reddit.com${post.data.permalink}`;
		const hasImage = (post.data.preview && !post.data.preview.images[0].source.url.includes('&amp;') && post.data.preview.images[0].source.url) || (post.data.url && post.data.url.startsWith('https://gfycat.com')) || false;

		return (
				<div className="card m-3" style={{width: '18rem', height: 'max-content'}}>
					<div className="card-body">
						<a href={postURL}><h5 className="card-title">{post.data.title.slice(0, 150)}</h5></a>
						{hasImage && <PostListingItemImage post={post} hideNSFW={this.props.hideNSFW} />}
						<p className="card-text post-footer mt-3">Posted by /u/{post.data.author} in /r/{post.data.subreddit}</p>
					</div>
				</div>
		);
	}
}

PostListingItem.propTypes = {
	post: PropTypes.object.isRequired
};

export default PostListingItem;
