import React from "react"
import Button from "../../components/Button/Button"
import carouselArrows from "../../public/icons/carousel-arrows.svg"
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper"
import InterestBlock from "../../components/InterestBlock/InterestBlock"

const Interests = () => {
	return (
		<SectionWrapper title="What interests you?">
			<div className="interest-row">
				<div className="mechanical">
					<div className="mechanical-content">
						<h3 style={{ color: "white" }}>Mechanical</h3>
						<Button />
					</div>
				</div>
				<div className="right-row">
					<InterestBlock title="5G" />
					<InterestBlock title="Robotic" />
					<InterestBlock title="Aerospace" />
					<div className="carousel-arrows">
						<img src={carouselArrows} alt="carousel arrows" />
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}

export default Interests
