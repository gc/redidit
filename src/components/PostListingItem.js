import React, { Component } from "react";
import PropTypes from "prop-types";

class PostListingItem extends Component {
	render() {
		const { post } = this.props;
		const imageURL = (post.data.preview && post.data.preview.images[0].source.url) || false;
		const postURL = `https://www.reddit.com${post.data.permalink}`;

		console.log(post.data)
		return (
			<div className="col">
				<div className="card m-3" style={{width: '18rem'}}>
					{imageURL && <img className="card-img-top img-responsive" src={imageURL} alt="Card image cap"/>}
					<div className="card-body">
						<a href={postURL}><h5 className="card-title">{post.data.title}</h5></a>
						<p className="card-text">Posted by /u/{post.data.author}</p>
					</div>
				</div>
			</div>
		);
	}
}

PostListingItem.propTypes = {
	post: PropTypes.object.isRequired
};

export default PostListingItem;
