import React from "react"
import Button from "../Button/Button"
import Divider from "../Divider/Divider"
import carouselArrows from "../../public/carousel-arrows.svg"

const Interests = () => {
	return (
		<section className="interests">
			<div className="interests-top">
				<h4>What interests you?</h4>
				<a href="">
					<h4 style={{ opacity: "50%" }}>View all</h4>
				</a>
			</div>
			<div className="interest-content">
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
		</section>
	)
}

export default Interests
