import React from "react"
import Picture from "../../public/kulogo.svg"
import PictureLight from "../../public/ku-logo-white.png"

const Logo = (props) => {
	return (
		<img
			src={props.light ? PictureLight : Picture}
			width={props.width && props.width}
		/>
	)
}

export default Logo
