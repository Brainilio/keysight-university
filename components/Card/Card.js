import React from "react"
import StartCourse from "../StartCourse/StartCourse"
import Arrow from "../../public/arrow.svg"
import Tag from "../Tag/Tag"
import ArrowCallToAction from "../ArrowCallToAction/ArrowCallToAction"

const Card = (props) => {
	return (
		<div className={`card ${props.dark ? "card-dark" : ""}`}>
			<div className="card-header">
				<div className="card-header-left">
					<span className="body">{props.topText}</span>
					<h3 style={{ opacity: "50%" }}>{props.headlineFirst}</h3>
				</div>
				<div>{props.picture && <img src={props.picture} />}</div>
			</div>
			<div className="card-body">
				<h3>{props.headlineSecond}</h3>
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
			</div>
			<div
				className="card-footer"
				style={{ marginTop: props.arrowOnly ? "5px" : "40px" }}
			>
				{props.arrowOnly ? (
					<ArrowCallToAction />
				) : (
					<StartCourse dark={props.dark} />
				)}
			</div>
		</div>
	)
}

export default Card
