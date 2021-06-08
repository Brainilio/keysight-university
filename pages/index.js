import Head from "next/head"
import BackToTop from "../components/BackToTop/BackToTop"
import Header from "../sections/Header/Header"
import Interests from "../sections/Interests/Interests"
import OthersWatching from "../sections/OthersWatching/OthersWatching"
import LatestCourse from "../sections/LatestCourse/LatestCourse"
import Tutorials from "../sections/Tutorials/Tutorials"
import SuitsBest from "../sections/SuitsBest/SuitsBest"
import Discover from "../sections/Discover/Discover"
import GetInspired from "../sections/GetInspired/GetInspired"
import Layout from "../layout/layout"
import { useEffect } from "react"

export default function Home() {
	useEffect(() => {
		document.documentElement.lang = "en-us"
	})
	return (
		<div lang="en">
			<Head>
				<title>Keysight University</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Header />
				<Interests />
				<BackToTop />
				<OthersWatching />
				<LatestCourse />
				<Tutorials />
				<SuitsBest />
				<Discover />
				<GetInspired />
			</Layout>
		</div>
	)
}
