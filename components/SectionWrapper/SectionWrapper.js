import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { fadeIn } from "../../utils/_animations"

const SectionWrapper = (props) => {
	const sectionwrapper = useRef(null)
	useEffect(() => {
		fadeIn(sectionwrapper.current, false)
	}, [])
	return (
		<section className="section-wrapper" ref={sectionwrapper}>
			<div className="section-wrapper-top">
				<h4>{props.title}</h4>

				{!props.hideViewAll && (
					<a href="/">
						<h4 style={{ opacity: "50%" }}>View all</h4>
					</a>
				)}
			</div>
			<div className="section-wrapper-content">{props.children}</div>
		</section>
	)
}

SectionWrapper.propTypes = {
	title: PropTypes.string.isRequired,
	hideViewAll: PropTypes.bool,
}

export default SectionWrapper
