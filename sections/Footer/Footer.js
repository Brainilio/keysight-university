import React from "react"
import Button from "../../components/Button/Button"
import kslogo from "../../public/ks-logo.png"
import carouselArrows from "../../public/carousel-arrows.svg"
import socialicons from "../../public/social-icons.png"

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="footer-logo">
					<span className="body">Keysight University is an initiative of</span>
					<img src={kslogo} />
				</div>
				<div className="rest">
					<div className="small-divider" aria-hidden="true"></div>
					<div className="rest-text">
						<span className="body">
							<strong>Courses</strong>
						</span>
						<ul>
							<li>Engineering Essentials</li>
							<li>Boot Camps</li>
							<li>Masterclasses</li>
							<li>Premium Learning</li>
						</ul>
					</div>
				</div>
				<div className="rest">
					<div className="small-divider" aria-hidden="true"></div>
					<div className="rest-text">
						<span className="body">
							<strong>Courses</strong>
						</span>
						<ul>
							<li>Engineering Essentials</li>
							<li>Boot Camps</li>
							<li>Masterclasses</li>
							<li>Premium Learning</li>
						</ul>
					</div>
				</div>
				<div className="rest">
					<div className="rest-text">
						<span className="body">
							<strong>Aliquam luctus</strong>
						</span>
						<ul>
							<li>Engineering Essentials</li>
							<li>Boot Camps</li>
							<li>Masterclasses</li>
							<li>Premium Learning</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="footer-bottom-left">
					<ul className="footer-bottom-left-links">
						<li>
							Keysight University © 2020{" "}
							<div className="smaller-divider" aria-hidden="true"></div>
						</li>

						<li>Privacy policy</li>
						<li>Disclaimer</li>
						<li>Cookies</li>
					</ul>
				</div>
				<div className="footer-bottom-right">
					<img src={socialicons} />
				</div>
			</div>
		</>
	)
}

export default Footer
