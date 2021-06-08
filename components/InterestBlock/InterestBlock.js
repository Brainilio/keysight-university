import React from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button"
import Divider from "../Divider/Divider"

const InterestBlock = (props) => {
	return (
		<div className="interest-block">
			<div className="interest-block-content">
				<h3>{props.title}</h3>
				<Button secondary />
			</div>
			<Divider small />
		</div>
	)
}

InterestBlock.propTypes = {
	title: PropTypes.string.isRequired,
}

export default InterestBlock
