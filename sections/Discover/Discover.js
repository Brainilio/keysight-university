import React from "react"
import DiscoverCard from "../../components/DiscoverCard/DiscoverCard"
import Grid from "../../components/Grid/Grid"
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper"
import img1 from "../../public/images/discover1.svg"
import img2 from "../../public/images/discover2.svg"
import img3 from "../../public/images/discover3.svg"

const Discover = () => {
	return (
		<SectionWrapper title="Discover our program">
			<Grid>
				<DiscoverCard
					headlineFirst="10 courses"
					headlineSecond="Become junior engineer"
					image={img1}
				/>
				<DiscoverCard
					headlineFirst="12 courses"
					headlineSecond="Become junior engineer"
					image={img2}
				/>
				<DiscoverCard
					headlineFirst="8 courses"
					headlineSecond="Become junior engineer"
					image={img3}
				/>
			</Grid>
		</SectionWrapper>
	)
}

export default Discover
