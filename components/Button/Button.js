import React from "react"
import PropTypes from "prop-types"

const Button = (props) => {
	return (
		<button className={`button tag ${props.secondary ? "secondary" : ""}`}>
			FOLLOW
		</button>
	)
}

Button.propTypes = {
	secondary: PropTypes.bool,
}

export default Button
