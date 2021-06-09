import React, { useEffect, useRef } from "react"
import Button from "../../components/Button/Button"
import carouselArrows from "../../public/icons/carousel-arrows.svg"
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper"
import InterestBlock from "../../components/InterestBlock/InterestBlock"
import { fromRightIn } from "../../utils/_animations"

const Interests = () => {
	const interestRow = useRef(null)

	useEffect(() => {
		fromRightIn(interestRow.current, true)
	}, [])

	return (
		<SectionWrapper title="What interests you?">
			<div className="interest-row" ref={interestRow}>
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
