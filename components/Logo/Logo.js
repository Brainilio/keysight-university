import React from "react"
import Picture from "../../public/icons/kulogo.svg"
import PictureLight from "../../public/images/ku-logo-white.webp"
import PropTypes from "prop-types"

const Logo = (props) => {
	return (
		<img
			src={props.light ? PictureLight : Picture}
			width={props.width && props.width}
		/>
	)
}

Logo.propTypes = {
	light: PropTypes.bool,
	width: PropTypes.string,
}

export default Logo
