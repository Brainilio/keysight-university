import React from "react"
import PropTypes from "prop-types"
import ArrowCallToAction from "../ArrowCallToAction/ArrowCallToAction"
import LowOpacityText from "../LowOpacityText/LowOpacityText"

const DiscoverCard = (props) => {
	return (
		<div className="discover-card">
			<div
				className="discover-card-header"
				style={{
					background: `url(${props.image}) center/cover`,
				}}
			>
				<span className="body">Program</span>
			</div>
			<div className="discover-card-body">
				<div className="title-two-colors">
					<LowOpacityText>{props.headlineFirst}</LowOpacityText>
					<h3>{props.headlineSecond}</h3>
				</div>
				<ArrowCallToAction red />
			</div>
		</div>
	)
}

DiscoverCard.propTypes = {
	image: PropTypes.string.isRequired,
	headlineFirst: PropTypes.string.isRequired,
	headlineSecond: PropTypes.string.isRequired,
}

export default DiscoverCard
