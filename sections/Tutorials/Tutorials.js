import React from "react"
import Grid from "../../components/Grid/Grid"
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper"
import tutorial1 from "../../public/tutorial1.png"
import tutorial2 from "../../public/tutorial2.png"
import tutorial3 from "../../public/tutorial3.png"

const Tutorials = () => {
	return (
		<SectionWrapper title="No time? No worries">
			<Grid>
				<div
					className="tutorial-card"
					style={{
						backgroundImage: `url(${tutorial1})`,
						backgroundSize: "470px",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div className="tutorial-card-footer">
						<h3 style={{ opacity: "50%" }}>Tutorial</h3>
						<h3>How to build</h3>
					</div>
				</div>
				<div
					className="tutorial-card  dark"
					style={{
						backgroundImage: `url(${tutorial2})`,
						backgroundSize: "470px",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div className="tutorial-card-footer">
						<h3 style={{ opacity: "50%" }}>Tutorial</h3>
						<h3>How to build</h3>
					</div>
				</div>
				<div
					className="tutorial-card"
					style={{
						backgroundImage: `url(${tutorial3})`,
						backgroundSize: "470px",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div className="tutorial-card-footer">
						<h3 style={{ opacity: "50%" }}>Tutorial</h3>
						<h3>How to build</h3>
					</div>
				</div>
			</Grid>
		</SectionWrapper>
	)
}

export default Tutorials
