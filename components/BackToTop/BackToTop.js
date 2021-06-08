import React from "react"
import icon from "../../public/icons/back-top-top.svg"

const BackToTop = () => {
	const moveToTopHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}
	return (
		<button className="back-to-top" onClick={moveToTopHandler}>
			<img
				className=""
				src={icon}
				alt="arrow going up"
				aria-label="Go back up"
			/>
		</button>
	)
}

export default BackToTop
