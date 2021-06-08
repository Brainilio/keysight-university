import React from "react"
import Grid from "../../components/Grid/Grid"
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper"

import TutorialCard from "../../components/TutorialCard/TutorialCard"
import tutorial1 from "../../public/images/tutorial1.webp"
import tutorial2 from "../../public/images/tutorial2.webp"
import tutorial3 from "../../public/images/tutorial3.webp"

const Tutorials = () => {
	return (
		<SectionWrapper title="No time? No worries">
			<Grid>
				<TutorialCard
					background={tutorial1}
					headlineFirst="Tutorial"
					headlineSecond="How to build"
					isInGrid
				/>
				<TutorialCard
					background={tutorial2}
					headlineFirst="Tutorial"
					headlineSecond="How to build"
					isInGrid
					dark
				/>
				<TutorialCard
					background={tutorial3}
					headlineFirst="Tutorial"
					headlineSecond="How to build"
					isInGrid
				/>
			</Grid>
		</SectionWrapper>
	)
}

export default Tutorials
