import React from "react"
import Button from "../../components/Button/Button"
import carouselArrows from "../../public/carousel-arrows.svg"
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper"

const Interests = () => {
	return (
		<SectionWrapper title="What interests you?">
			<div className="interest-row">
				<div className="mechanical">
					<div>
						<h3 style={{ color: "white" }}>Mechanical</h3>
						<Button />
					</div>
				</div>
				<div className="right-row">
					<div className="rest">
						<div>
							<h3>5G</h3>
							<Button secondary />
						</div>
						<div className="small-divider" aria-hidden="true"></div>
					</div>
					<div className="rest">
						<div>
							<h3>Robotic</h3>
							<Button secondary />
						</div>
						<div className="small-divider" aria-hidden="true"></div>
					</div>
					<div className="rest">
						<div>
							<h3>Aerospace</h3>
							<Button secondary />
						</div>
						<div className="small-divider" aria-hidden="true"></div>
					</div>
					<div className="carousel-arrows">
						<img src={carouselArrows} />
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}

export default Interests
