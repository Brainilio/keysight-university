import React from "react"
import PropTypes from "prop-types"

const NavigationItem = (props) => {
	return (
		<a className="nav-item-button" href="/">
			<img src={props.icon} alt="navigation item" />
		</a>
	)
}

NavigationItem.propTypes = {
	icon: PropTypes.string.isRequired,
}

export default NavigationItem
