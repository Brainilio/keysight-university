import React from "react"
import Grid from "../../components/Grid/Grid"
import Card from "../../components/Card/Card"
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper"
import Picture from "../../public/images/picture-random.svg"
import guyPicture from "../../public/images/avatar-guy.svg"
import background from "../../public/images/background-card-1.svg"
import machine from "../../public/images/machine.webp"
import LongCardWithBackground from "../../components/LongCardWithBackground/LongCardWithBackground"

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
					<Card
						background={background}
						headlineSecond="Digital Oscilloscope"
						dark
						arrowOnly
						arrowOnlyText="Learn More"
					/>
				</div>

				<div className="others-watching-grid-middle">
					<LongCardWithBackground
						background={machine}
						headline="How to build"
						topText="Quick tutorials"
					/>
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
