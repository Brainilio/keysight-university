import React from "react"

const Button = (props) => {
	return (
		<button className={`button tag ${props.secondary ? "secondary" : ""}`}>
			FOLLOW
		</button>
	)
}

export default Button
