import React from "react"
import ArrowCallToAction from "../ArrowCallToAction/ArrowCallToAction"
import PlayButtonLight from "../../public/icons/play-button-light.svg"
import PlayButtonDark from "../../public/icons/play-button-dark.svg"

const StartCourse = (props) => {
	return (
		<div className="start-course">
			<div className="start-course-left">
				<img src={props.dark ? PlayButtonDark : PlayButtonLight} />
			</div>
			<div className="start-course-right">
				<ArrowCallToAction dark={props.dark} text="Start course now" />
			</div>
		</div>
	)
}

export default StartCourse
