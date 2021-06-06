import React from "react"
import Grid from "../../components/Grid/Grid"
import Card from "../../components/Card/Card"
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper"
import Picture from "../../public/picture-random.svg"
import guyPicture from "../../public/avatar-guy.svg"
import background from "../../public/background-card-1.svg"
import machine from "../../public/machine.png"
import ArrowCallToAction from "../../components/ArrowCallToAction/ArrowCallToAction"

const OthersWatching = () => {
	return (
		<SectionWrapper title="Others are watching">
			<Grid>
				<div className="others-watching-grid-left">
					<Card
						topText="Engineering Essentials"
						picture={Picture}
						headlineFirst="Full course"
						headlineSecond="Signal Analyzer Fundamentals"
						tags={[
							{
								active: true,
								text: "10 Modules",
							},
							{
								active: false,
								text: "Beginner",
							},
							{
								active: false,
								text: "Basic Skills",
							},
						]}
					/>
					<div
						className="card-with-background"
						style={{ background: `url(${background}) center/cover` }}
					>
						<div className="card-body">
							<h3>Digital Oscilloscope</h3>
						</div>
						<div className="card-footer">
							<ArrowCallToAction dark text="Learn More" />
						</div>
					</div>
				</div>
				<div className="others-watching-grid-middle">
					<div className="card-with-image-bottom">
						<div className="card-top">
							<span className="body">Quick tutorials</span>
							<h3>How to build</h3>
							<ArrowCallToAction />
						</div>
					</div>
				</div>
				<div className="others-watching-grid-right">
					<Card
						dark
						topText="5G Engineering"
						picture={guyPicture}
						headlineFirst="Full course"
						headlineSecond="5G The basics"
						tags={[
							{
								active: true,
								text: "10 Modules",
							},
							{
								active: false,
								text: "Engineering basics",
							},
							{
								active: false,
								text: "5g Essentials",
							},
						]}
					/>
					<Card
						arrowOnly
						topText="Article / 8 min read"
						headlineSecond="Wolverines Don’t Usually Run This Fast"
					/>
				</div>
			</Grid>
		</SectionWrapper>
	)
}

export default OthersWatching
