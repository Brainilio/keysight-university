import React from "react"
import Picture from "../../public/icons/kulogo.svg"
import PictureLight from "../../public/images/ku-logo-white.webp"
import PropTypes from "prop-types"
import Image from "next/image"

const Logo = (props) => {
	return (
		<Image
			src={props.light ? PictureLight : Picture}
			width={props.width && props.width}
			height={props.height && props.height}
			alt="logo"
		/>
	)
}

Logo.propTypes = {
	light: PropTypes.bool,
	width: PropTypes.string,
	height: PropTypes.string,
}

export default Logo
