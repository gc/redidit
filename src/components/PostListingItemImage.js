import React, { Component } from "react";
import PropTypes from "prop-types";

class PostListingItemImage extends Component {
	render() {
		const { post } = this.props;
		const imageURL = (post.data.preview && post.data.preview.images[0].source.url) || false;
		const imageClass = `card-img-top img-responsive ${post.data.over_18 && this.props.hideNSFW ? 'nsfwImage' : ''}`

		let imgTag;
		const { url } = post.data;
		if (url.startsWith('https://gfycat.com/')) {
			const id = url.split('gfycat.com/')[1];
			imgTag = (
					<video className={imageClass} src={`https://giant.gfycat.com/${id}.webm`} controls="true"></video>
			)
		} else if (url.includes('imgur.com/' && url.includes('gifv')) ) {
			const id = url.split('imgur.com/')[1].split(".")[0]
			console.log(id)
			imgTag = (
				<video className={imageClass}>
						<source src={`http://i.imgur.com/${id}.webm`} type="video/webm"/>
				</video>
			)
		} else {
			imgTag = (<img className={imageClass} src={imageURL} alt="Card image cap" />);
		}

		return (
					<div style={{overflow: 'hidden'}}>
						<a href={url} target="_blank">
							{imgTag}
						</a>
					</div>
		);
	}
}

PostListingItemImage.propTypes = {
	post: PropTypes.object.isRequired
};

export default PostListingItemImage;
