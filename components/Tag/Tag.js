import React from "react"
import PropTypes from "prop-types"

const Tag = (props) => {
	return (
		<div
			className={`tag-box ${
				props.secondary ? "secondary" : props.tertiary ? "tertiary" : ""
			} ${props.active ? "tag-active" : ""}`}
			style={{
				width: props.width && props.width,
			}}
		>
			<span className="tag">{props.text}</span>
		</div>
	)
}

Tag.propTypes = {
	secondary: PropTypes.bool,
	tertiary: PropTypes.bool,
	active: PropTypes.bool,
	text: PropTypes.string.isRequired,
	width: PropTypes.string,
}

export default Tag
