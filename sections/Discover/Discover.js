import React from "react"
import ArrowCallToAction from "../../components/ArrowCallToAction/ArrowCallToAction"
import Grid from "../../components/Grid/Grid"
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper"
import img1 from "../../public/discover1.svg"
import img2 from "../../public/discover2.svg"
import img3 from "../../public/discover3.svg"

const Discover = () => {
	return (
		<SectionWrapper title="Discover our program">
			<Grid>
				<div className="discover-card">
					<div
						className="discover-card-header"
						style={{
							background: `url(${img1}) center/cover`,
						}}
					>
						<span className="body">Program</span>
					</div>
					<div className="discover-card-body">
						<div className="title-two-colors">
							<h3 style={{ opacity: "50%" }}>10 courses</h3>
							<h3>Become junior engineer</h3>
						</div>
						<ArrowCallToAction red />
					</div>
				</div>
				<div className="discover-card">
					<div
						className="discover-card-header"
						style={{
							background: `url(${img2}) center/cover`,
						}}
					>
						<span className="body">Program</span>
					</div>
					<div className="discover-card-body">
						<div className="title-two-colors">
							<h3 style={{ opacity: "50%" }}>12 courses</h3>
							<h3>Become junior engineer</h3>
						</div>
						<ArrowCallToAction red />
					</div>
				</div>
				<div className="discover-card">
					<div
						className="discover-card-header"
						style={{
							background: `url(${img3}) center/cover`,
						}}
					>
						<span className="body">Program</span>
					</div>
					<div className="discover-card-body">
						<div className="title-two-colors">
							<h3 style={{ opacity: "50%" }}>8 courses</h3>
							<h3>Become junior engineer</h3>
						</div>
						<ArrowCallToAction red />
					</div>
				</div>
			</Grid>
		</SectionWrapper>
	)
}

export default Discover
