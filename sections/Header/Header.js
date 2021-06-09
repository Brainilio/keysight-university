import React, { useEffect, useRef } from "react"
import Logo from "../../components/Logo/Logo"
import ArrowCallToAction from "../../components/ArrowCallToAction/ArrowCallToAction"
import Divider from "../../components/Divider/Divider"
import { fadeIn } from "../../utils/_animations"

const Header = () => {
	const header = useRef(null)
	useEffect(() => {
		fadeIn(header.current, true)
	}, [])
	return (
		<div className="landing-header" ref={header}>
			<div className="landing-header-content">
				<Logo width="170px" height="170px" />
				<Divider />
				<div className="landing-header-text">
					<div className="landing-header-text-title">
						<h1 style={{ opacity: "50%" }}>Welcome to</h1>
						<h1>Keysight University</h1>
					</div>
					<div className="landing-header-text-signup">
						<ArrowCallToAction text="Sign up" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
