import React from "react"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../sections/Footer/Footer"

const layout = (props) => {
	return (
		<>
			<div className="layout">
				<header className="left-col">
					<Navigation />
				</header>
				<main className="right-col">{props.children}</main>
			</div>
			<Footer />
		</>
	)
}

export default layout
