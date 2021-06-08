import React from "react"
import Divider from "../Divider/Divider"
import PropTypes from "prop-types"

const FooterBlock = (props) => {
	return (
		<div className="footer-block">
			<Divider small />
			<div className="footer-text">
				<span className="body">
					<strong>{props.title}</strong>
				</span>
				<ul>
					{props.footerItems.map((item) => (
						<li key={item.text}>
							<a href="/">{item.text}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

FooterBlock.propTypes = {
	title: PropTypes.string.isRequired,
	footerItems: PropTypes.array.isRequired,
}

export default FooterBlock
