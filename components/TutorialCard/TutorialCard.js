import React from "react"
import PropTypes from "prop-types"
import Tag from "../Tag/Tag"
import LowOpacityText from "../LowOpacityText/LowOpacityText"

const TutorialCard = (props) => {
	return (
		<div
			className={`tutorial-card ${props.isInGrid ? "inspired-tut" : ""} ${
				props.dark ? "dark" : ""
			}`}
			style={{
				backgroundImage: `url(${props.background})`,
			}}
		>
			<div className="tutorial-card-footer">
				<Tag tertiary text="01:20" width="65px" />
				<LowOpacityText>{props.headlineFirst}</LowOpacityText>
				<h3>{props.headlineSecond}</h3>
			</div>
		</div>
	)
}

TutorialCard.propTypes = {
	background: PropTypes.string.isRequired,
	headlineFirst: PropTypes.string.isRequired,
	headlineSecond: PropTypes.string.isRequired,
	isInGrid: PropTypes.bool,
	dark: PropTypes.bool,
}

export default TutorialCard
