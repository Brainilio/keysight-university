import React from "react"

const SectionWrapper = (props) => {
	return (
		<section className="section-wrapper">
			<div className="section-wrapper-top">
				<h4>{props.title}</h4>

				<a href="">
					<h4 style={{ opacity: "50%" }}>View all</h4>
				</a>
			</div>
			<div className="section-wrapper-content">{props.children}</div>
		</section>
	)
}

export default SectionWrapper
