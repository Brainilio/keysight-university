import React from "react"
import Arrow from "../../public/arrow.svg"
import ArrowLight from "../../public/arrow-white.svg"
import ArrowRed from "../../public/arrow-red.svg"

const ArrowCallToAction = (props) => {
	return (
		<a href="" className={`title ${props.dark ? "cta-dark" : ""}`}>
			<h4>{props.text}</h4>
			<img src={props.dark ? ArrowLight : props.red ? ArrowRed : Arrow} />
		</a>
	)
}

export default ArrowCallToAction
