import React from "react"
import ArrowCallToAction from "../../components/ArrowCallToAction/ArrowCallToAction"

const SuitsBest = () => {
	return (
		<div className="suits-best-banner">
			<div className="suits-best-left">
				<h2 style={{ opacity: "50%" }}>Need help?</h2>
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
