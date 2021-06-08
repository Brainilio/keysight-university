import React from "react"
import PropTypes from "prop-types"
import ArrowCallToAction from "../ArrowCallToAction/ArrowCallToAction"

const LongCardWithBackground = (props) => {
	return (
		<div
			className="card-with-image-at-bottom"
			style={{
				background: `url(${props.background}) center/cover`,
				backgroundImage: props.greyBackground ? "#ecebf0" : "",
			}}
		>
			<div className="card-top">
				<span className="body">{props.topText}</span>
				<h3>{props.headline}</h3>
				<ArrowCallToAction red={props.redArrow} />
			</div>
		</div>
	)
}
LongCardWithBackground.propTypes = {
	background: PropTypes.string.isRequired,
	topText: PropTypes.string,
	headline: PropTypes.string,
	redArrow: PropTypes.bool,
	greyBackground: PropTypes.bool,
}

export default LongCardWithBackground
