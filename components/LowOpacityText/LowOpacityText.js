import React from "react"
import PropTypes from "prop-types"

const LowOpacityText = (props) => {
	return props.bigText ? (
		<h2 style={{ opacity: "50%" }}>{props.children}</h2>
	) : (
		<h3 style={{ opacity: "50%" }}>{props.children}</h3>
	)
}

LowOpacityText.propTypes = {
	bigText: PropTypes.bool,
}

export default LowOpacityText
