import React, { useEffect, useRef } from "react"
import ArrowCallToAction from "../../components/ArrowCallToAction/ArrowCallToAction"
import LowOpacityText from "../../components/LowOpacityText/LowOpacityText"
import { fadeIn } from "../../utils/_animations"

const SuitsBest = () => {
	const suitsbest = useRef(null)
	useEffect(() => {
		fadeIn(suitsbest.current, false)
	}, [])
	return (
		<div className="suits-best-banner" ref={suitsbest}>
			<div className="suits-best-left">
				<LowOpacityText bigText>Need help?</LowOpacityText>
				<h2>Not sure about which course suits you the best?</h2>
			</div>
			<div className="suits-best-right">
				<p className="body">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
					suscipit at purus in cursus. Proin gravida quis ex a tincidunt.
					Quisque pretium suscipit finibus.
				</p>
				<ArrowCallToAction text="Do the test" red />
			</div>
		</div>
	)
}

export default SuitsBest
