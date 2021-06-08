import React from "react"
import Card from "../../components/Card/Card"
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper"
import latestcoursepic from "../../public/images/woman-latest-course.svg"
import Picture from "../../public/images/picture-random.svg"

const LatestCourse = () => {
	return (
		<SectionWrapper title="Brand new course" hideViewAll>
			<div className="latest-course-card">
				<img
					draggable="false"
					src={latestcoursepic}
					className="latest-course-picture"
					style={{
						objectFit: "cover",
					}}
					alt="lady looking at camera"
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
