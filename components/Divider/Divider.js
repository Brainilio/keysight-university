import React from "react"

const Divider = (props) => {
	return (
		<div
			className={props.small ? "small-divider" : "vertical-divider"}
			aria-hidden="true"
		></div>
	)
}

export default Divider
