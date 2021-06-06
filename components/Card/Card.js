import React from "react"
import StartCourse from "../StartCourse/StartCourse"
import Tag from "../Tag/Tag"
import ArrowCallToAction from "../ArrowCallToAction/ArrowCallToAction"

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
						<h2 style={{ opacity: "50%" }}>{props.headlineFirst}</h2>
					) : (
						<h3 style={{ opacity: "50%" }}>{props.headlineFirst}</h3>
					)}
				</div>
				<div>{props.picture && <img src={props.picture} />}</div>
			</div>
			<div className="card-body">
				{props.bigText ? (
					<h2>{props.headlineSecond}</h2>
				) : (
					<h3>{props.headlineSecond}</h3>
				)}

				<div className="card-body-tag-row">
					{props.tags &&
						props.tags.map((t) => (
							<Tag
								key={t}
								active={t.active}
								secondary={props.dark ? false : true}
								text={t.text}
							/>
						))}
				</div>
				<p className="body">{props.comment && props.comment}</p>
			</div>
			<div
				className="card-footer"
				style={{ marginTop: props.arrowOnly ? "5px" : "40px" }}
			>
				{props.arrowOnly ? (
					<ArrowCallToAction dark={props.dark} />
				) : (
					<StartCourse dark={props.dark} />
				)}
			</div>
		</div>
	)
}

export default Card
