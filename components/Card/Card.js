import React from "react"
import StartCourse from "../StartCourse/StartCourse"
import Tag from "../Tag/Tag"
import ArrowCallToAction from "../ArrowCallToAction/ArrowCallToAction"
import PropTypes from "prop-types"
import LowOpacityText from "../LowOpacityText/LowOpacityText"

const Card = (props) => {
	return (
		<div
			className={`card ${props.dark ? "card-dark" : ""}`}
			style={{
				background: props.background && `url(${props.background}) center/cover`,
			}}
		>
			<div className="card-header">
				<div className="card-header-left">
					<span className="body">{props.topText}</span>

					{props.bigText ? (
						<LowOpacityText bigText>{props.headlineFirst}</LowOpacityText>
					) : (
						<LowOpacityText>{props.headlineFirst}</LowOpacityText>
					)}
				</div>
				<div>{props.picture && <img src={props.picture} />}</div>
			</div>
			<div className="card-body">
				{props.bigText ? (
					<h2>{props.headlineSecond}</h2>
				) : (
					<h3 style={{ height: props.tags ? "auto" : "150px" }}>
						{props.headlineSecond}
					</h3>
				)}

				<div className="card-body-tag-row">
					{props.comment && <p className="body">{props.comment}</p>}
					{props.tags &&
						props.tags.map((t) => (
							<Tag
								key={t.text}
								active={t.active}
								secondary={props.dark ? false : true}
								text={t.text}
							/>
						))}
				</div>
			</div>
			<div
				className="card-footer"
				style={{ marginTop: props.arrowOnly ? "5px" : "30px" }}
			>
				{props.arrowOnly ? (
					<ArrowCallToAction dark={props.dark} text={props.arrowOnlyText} />
				) : (
					<StartCourse dark={props.dark} />
				)}
			</div>
		</div>
	)
}

Card.propTypes = {
	background: PropTypes.string,
	topText: PropTypes.string,
	dark: PropTypes.bool,
	picture: PropTypes.string,
	headlineFirst: PropTypes.string,
	headlineSecond: PropTypes.string,
	arrowOnly: PropTypes.bool,
	arrowOnlyText: PropTypes.string,
	comment: PropTypes.string,
	tags: PropTypes.array,
}

export default Card
