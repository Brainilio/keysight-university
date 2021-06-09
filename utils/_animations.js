import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export const fromLeftIn = (element) => {
	gsap.from(element, {
		scrollTrigger: {
			trigger: element,
			start: "top center",
			toggleActions: "play none none none",
		},
		opacity: 0,
		duration: 0.8,
		x: -200,
	})
}

export const fromRightIn = (element) => {
	gsap.from(element, {
		autoAlpha: 0,
		opacity: 0,
		duration: 1,
		delay: 0.8,
		x: 200,
	})
}

export const staggerChildrenForInspiredSection = (element) => {
	gsap.from(
		[
			element.childNodes[0].childNodes[0],
			element.childNodes[0].childNodes[1],
			element.childNodes[0].childNodes[2],
			element.childNodes[1].childNodes[0],
			element.childNodes[1].childNodes[1],
		],
		{
			scrollTrigger: {
				trigger: element,
				start: "top center",
				toggleActions: "play none none none",
			},
			opacity: 0,
			y: 200,
			stagger: 0.3,
			duration: 0.3,
		}
	)
}

export const fadeIn = (element, noScrollTrigger = true) => {
	if (noScrollTrigger) {
		gsap.from(element, {
			opacity: 0,
			duration: 1.2,
			autoAlpha: 0,
			delay: 0.8,
		})
	} else {
		gsap.from(element, {
			scrollTrigger: {
				trigger: element,
				start: "top center",
				toggleActions: "play none none none",
			},
			autoAlpha: 0,
			opacity: 0,
			duration: 1.2,
		})
	}
}
