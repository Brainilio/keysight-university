import React from "react"
import PropTypes from "prop-types"
import Image from "next/image"

const NavigationItem = (props) => {
	return (
		<a className="nav-item-button" href="/">
			<Image
				src={props.icon}
				alt="navigation item"
				width="24px"
				height="24px"
			/>
		</a>
	)
}

NavigationItem.propTypes = {
	icon: PropTypes.string.isRequired,
}

export default NavigationItem
