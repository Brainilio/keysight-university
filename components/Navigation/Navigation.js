import React from "react"
import Logo from "../../components/Logo/Logo"
import hamburger from "../../public/icons/hamburger.svg"
import search from "../../public/icons/search.svg"
import discover from "../../public/icons/ku-discover.webp"
import library from "../../public/icons/library.svg"
import myuni from "../../public/icons/profile.svg"
import NavigationItem from "../NavigationItem/NavigationItem"

const Navigation = () => {
	return (
		<nav className="navigation-bar">
			<div className="top-navigation-items">
				<Logo light width="60px" height="60px" />
				<NavigationItem icon={hamburger} />
				<NavigationItem icon={search} />
			</div>
			<div className="bottom-navigation-items">
				<NavigationItem icon={discover} />
				<NavigationItem icon={library} />
				<NavigationItem icon={myuni} />
			</div>
		</nav>
	)
}

export default Navigation
