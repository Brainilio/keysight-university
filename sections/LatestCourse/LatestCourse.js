import React from "react"
import Card from "../../components/Card/Card"
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper"
import latestcoursepic from "../../public/woman-latest-course.svg"
import Picture from "../../public/picture-random.svg"

const LatestCourse = () => {
	return (
		<SectionWrapper title="Brand new course">
			<div className="latest-course-card">
				<img
					src={latestcoursepic}
					className="latest-course-picture"
					style={{
						objectFit: "cover",
					}}
				/>
				<Card
					topText="Engineering Essentials"
					headlineFirst="Full course"
					headlineSecond="Understanding 5G dynamic spectrum"
					picture={Picture}
					tags={[
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
		</SectionWrapper>
	)
}

export default LatestCourse
