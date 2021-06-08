import React from "react"
import Arrow from "../../public/icons/arrow.svg"
import ArrowLight from "../../public/icons/arrow-white.svg"
import ArrowRed from "../../public/icons/arrow-red.svg"
import PropTypes from "prop-types"

const ArrowCallToAction = (props) => {
	return (
		<a href="/" className={`title ${props.dark ? "cta-dark" : ""}`}>
			<h4>{props.text}</h4>
			<img
				src={props.dark ? ArrowLight : props.red ? ArrowRed : Arrow}
				aria-hidden="true"
			/>
		</a>
	)
}

ArrowCallToAction.propTypes = {
	dark: PropTypes.bool,
	text: PropTypes.string,
	red: PropTypes.bool,
}

export default ArrowCallToAction
