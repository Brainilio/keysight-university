import React from "react"
import kslogo from "../../public/images/ks-logo.webp"
import socialicons from "../../public/images/social-icons.webp"
import FooterBlock from "../../components/FooterBlock/FooterBlock"
import Image from "next/image"
const Footer = () => {
	return (
		<footer>
			<div className="footer">
				<div className="footer-logo">
					<span className="body">Keysight University is an initiative of</span>
					<img src={kslogo} alt="logo" width="230px" height="53px" />
				</div>
				<FooterBlock
					title="Courses"
					footerItems={[
						{
							linksTo: "",
							text: "Engineering Essentials",
						},
						{
							linksTo: "",
							text: "Boot Camps",
						},
						{
							linksTo: "",
							text: "Masterclasses",
						},
						{
							linksTo: "",
							text: "Premium learning",
						},
					]}
				/>
				<FooterBlock
					title="About KS University"
					footerItems={[
						{
							linksTo: "",
							text: "Engineering Essentials",
						},
						{
							linksTo: "",
							text: "Boot Camps",
						},
						{
							linksTo: "",
							text: "Masterclasses",
						},
						{
							linksTo: "",
							text: "Premium learning",
						},
					]}
				/>
				<FooterBlock
					title="Aliquam luctus"
					footerItems={[
						{
							linksTo: "",
							text: "Engineering Essentials",
						},
						{
							linksTo: "",
							text: "Boot Camps",
						},
						{
							linksTo: "",
							text: "Masterclasses",
						},
						{
							linksTo: "",
							text: "Premium learning",
						},
					]}
				/>
			</div>
			<div className="footer-bottom">
				<div className="footer-bottom-left">
					<ul className="footer-bottom-left-links">
						<li>
							Keysight University © 2020{" "}
							<div className="smaller-divider" aria-hidden="true"></div>
						</li>
						<li>Privacy policy</li>
						<li>Disclaimer</li>
						<li>Cookies</li>
					</ul>
				</div>
				<div className="footer-bottom-right">
					<Image
						src={socialicons}
						alt="social media icons"
						width="200px"
						height="20px"
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer
