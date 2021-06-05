import React from "react"
import Picture from "../../public/kulogo.svg"

const Logo = (props) => {
	return <img src={Picture} width={props.width && props.width} />
}

export default Logo
