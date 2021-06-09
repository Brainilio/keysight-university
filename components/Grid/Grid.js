import React, { useEffect, useRef } from "react"
import { fromLeftIn } from "../../utils/_animations"

const Grid = (props) => {
	const grid = useRef(null)

	useEffect(() => {
		fromLeftIn(grid.current)
	}, [])

	return (
		<div className="grid" ref={grid}>
			{props.children}
		</div>
	)
}

export default Grid
