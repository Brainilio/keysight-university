import React from "react"

const Tag = (props) => {
	return (
		<div
			className={`tag-box ${props.secondary ? "secondary" : ""} ${
				props.active ? "tag-active" : ""
			}`}
		>
			<span className="tag">{props.text}</span>
		</div>
	)
}

export default Tag
