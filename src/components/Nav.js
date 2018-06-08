import React, { Component } from "react";
import PropTypes from "prop-types";
import { logo } from "../assets/index";

class Nav extends Component {
	render() {
		return (
			<nav className="uk-navbar-container" uk-navbar>
			    <div className="uk-navbar-left">

			        <ul className="uk-navbar-nav">
			            <li className="uk-active"><a href="#">Active</a></li>
			            <li><a href="#">Item</a></li>
			        </ul>

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
