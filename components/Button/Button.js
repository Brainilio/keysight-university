import React from "react"
import PropTypes from "prop-types"

const Button = (props) => {
	return (
		<button
			aria-label="Follow"
			className={`button tag ${props.secondary ? "secondary" : ""}`}
		>
			FOLLOW
		</button>
	)
}

Button.propTypes = {
	secondary: PropTypes.bool,
}

export default Button
