import React from "react"
import ArrowCallToAction from "../../components/ArrowCallToAction/ArrowCallToAction"
import Card from "../../components/Card/Card"
import Grid from "../../components/Grid/Grid"
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper"
import guyPicture from "../../public/avatar-guy.svg"
import background from "../../public/background-card-1.svg"
import machine from "../../public/machine.svg"
import Picture from "../../public/picture-random.svg"
import tutorial3 from "../../public/tutorial3.png"
import wolverinebg from "../../public/backgroundwolverine.png"
import other from "../../public/otherbuild.png"

const GetInspired = () => {
	return (
		<SectionWrapper title="Get inspired to learn">
			<div className="inspired-grid">
				<div className="inspired-left">
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
					<div className="card-with-image-bottom">
						<div className="card-top">
							<span className="body">Quick tutorials</span>
							<h3>How to build</h3>
							<ArrowCallToAction />
						</div>
					</div>

					<Card
						dark
						background={background}
						arrowOnly
						headlineSecond="Digital Oscilloscope"
					/>
				</div>
				<div className="inspired-right">
					<Card
						topText="Engineering Essentials"
						headlineFirst="Full course"
						headlineSecond="Oscillioscope Probe 101: The Basics"
						comment="Learn how to probe and measure common types of signals with an oscilloscope."
						picture={Picture}
						bigText
					/>
					<div className="inspired-right-bottom">
						<div className="inspired-right-bottom-left">
							<Card
								dark
								background={wolverinebg}
								arrowOnly
								topText="Article / 8 min read"
								headlineSecond="Wolverines Don’t Usually Run This Fast"
							/>
							<div className="card-with-image-bt">
								<div className="card-with-image-bt-content">
									<span className="body">Article / 7 min read</span>
									<h3>
										Personalized Support Helps 5G Device Team Master New Tests
										in Hours
									</h3>
									<ArrowCallToAction red />
								</div>
							</div>
						</div>

						<div className="inspired-right-bottom-right">
							<div
								className="tutorial-card"
								style={{
									backgroundImage: `url(${tutorial3})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									height: "100px",
								}}
							>
								<div className="tutorial-card-footer">
									<h3 style={{ opacity: "50%" }}>Tutorial</h3>
									<h3>How to build</h3>
								</div>
							</div>
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
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}

export default GetInspired
