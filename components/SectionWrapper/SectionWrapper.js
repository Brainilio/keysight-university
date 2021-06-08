import React from "react"
import PropTypes from "prop-types"

const SectionWrapper = (props) => {
	return (
		<section className="section-wrapper">
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
