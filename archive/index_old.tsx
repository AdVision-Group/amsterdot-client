// Types
import type { NextPage } from "next"

// Utils
import React from "react"
import styled from "styled-components"

// Components
import Head from "next/head"
// import Link from "next/link"
import Image from "next/image"
import Header from "../components/header/header.component"
// import EventOverview from "../components/event-overview/event-overview.component"
import HeroSection from "../components/hero-section/hero-section.component"
import AboutSection from "../components/about-section/about-section.component"
import FooterSection from "../components/footer-section/footer-section.component"
// import EventSection from "../components/event-section/event-section.component"
// import Accordion from "../components/accordion/accordion.component"
// import WorkshopSection from "../components/workshop-section/workshop-section.component"
// import HackathonSection from "../components/hackathon-section/hackathon-section.component"
// import HackatonContentSection from "../components/hackaton-content-section/hackaton-content-section.component"
// import BountySection from "../components/bounties-section/bounties-section.component"
// import AftermovieSection from "../components/aftermovie-section/aftermovie-section.component"
// import PhotosSection from "../components/photos-section/photos-section.component"
// import SpeakersSection from "../components/speakers-section/speakers-section.component"
// import BountyWinnersSection from "../components/bounty-winners-section/bounty-winners-section.component"
// import ScoreboardSection from "../components/scoreboard-section/scoreboard-section.component"
// import PricepoolSection from "../components/pricepool-section/pricepool-section.component"

// Hooks
import { useRouter } from "next/router"
import {
	motion,
	useViewportScroll,
	useTransform,
	// useSpring,
} from "framer-motion"
import {
	// useNumber,
	useMap,
	//  useWindowSize
} from "react-use"

// Data
import { events, hackatons } from "../utils/data"

// Icons
import { AiFillGithub } from "react-icons/ai"

const Home: NextPage = () => {
	const { push } = useRouter()

	const { scrollYProgress } = useViewportScroll()

	const [event, { setAll }] = useMap({
		events: events.map((i, idx) => ({
			id: idx,
			showContent: false,
		})),
	})
	const [hackaton, { setAll: setAllHackathon }] = useMap({
		hackatons: hackatons.map((i, idx) => ({
			id: idx,
			showContent: false,
		})),
	})

	// scrollYProgress.onChange((e) => console.log(e))

	const transformYAM = useTransform(scrollYProgress, [0, 0.5], [0, 150])
	const transformYST = useTransform(scrollYProgress, [0, 0.5], [20, -100])
	const transformYER = useTransform(scrollYProgress, [0, 0.5], [0, -100])

	const openEventDayProgram = (
		showContent: boolean,
		i: number,
		dayID: string
	) => {
		setAll({
			...event,
			events: event.events.map((e, id) => {
				if (i === id) {
					return {
						id: id,
						showContent: showContent,
					}
				} else {
					return {
						id: id,
						showContent: e.showContent,
					}
				}
			}),
		})
		push(`/#${dayID}`)
	}
	const openHackathonDayProgram = (
		showContent: boolean,
		i: number,
		dayID: string
	) => {
		setAllHackathon({
			...event,
			hackatons: hackaton.hackatons.map((e, id) => {
				if (i === id) {
					return {
						id: id,
						showContent: showContent,
					}
				} else {
					return {
						id: id,
						showContent: e.showContent,
					}
				}
			}),
		})
		push(`/#${dayID}`)
	}

	return (
		<React.Fragment>
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<title>amsterDOT Conf Hack</title>
				<meta name="title" content="amsterDOT Conf Hack" />
				<meta
					name="description"
					content="4 days of conf & hack, organized by leading Polkadot projects for the broader crypto family. 4/20-23 in Amsterdam, the Netherlands."
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://amsterdot.io/" />
				<meta property="og:title" content="amsterDOT Conf Hack" />
				<meta
					property="og:description"
					content="4 days of conf & hack, organized by leading Polkadot projects for the broader crypto family. 4/20-23 in Amsterdam, the Netherlands."
				/>
				<meta property="og:image" content="/assets/meta-a.png" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://amsterdot.io/" />
				<meta property="twitter:title" content="amsterDOT Conf Hack" />
				<meta
					property="twitter:description"
					content="4 days of conf & hack, organized by leading Polkadot projects for the broader crypto family. 4/20-23 in Amsterdam, the Netherlands."
				/>
				<meta property="twitter:image" content="/assets/meta-a.png" />
			</Head>

			<Header
				openEventDayProgram={openEventDayProgram}
				openHackathonDayProgram={openHackathonDayProgram}
				ctas={[
					{
						label: "AGENDA 2022",
						slug: "/agenda-2022",
						outline: false,
					},
					{
						label: "HACKATHON 2022",
						slug: "/hackathon-2022",
						outline: true,
					},
				]}
			/>

			<WatermarkContainer>
				<WatermarkLetters
					style={{
						x: transformYAM,
						// fontFamily: "Avenir Next",
						// opacity: transformWatermarkOpacity,
					}}
					className="am"
				>
					AM
				</WatermarkLetters>
				<WatermarkLetters
					style={{
						x: transformYST,

						// opacity: transformWatermarkOpacity,
					}}
					className="st-horizontal"
				>
					<Image
						src={"/assets/st-h.svg"}
						alt="st letters"
						width={200}
						height={400}
						layout="responsive"
						objectFit="contain"
					/>
				</WatermarkLetters>
				<WatermarkLetters
					style={{
						x: transformYST,

						// opacity: transformWatermarkOpacity,
					}}
					className="st"
				>
					<Image
						src={"/assets/partners-v2/st.svg"}
						alt="st letters"
						width={200}
						height={200}
						layout="responsive"
						objectFit="contain"
					/>
				</WatermarkLetters>
				<WatermarkLetters
					style={{
						x: transformYER,

						// opacity: transformWatermarkOpacity,
					}}
					className="er"
				>
					ER
				</WatermarkLetters>
				<WatermarkLetters
					style={{
						x: transformYER,

						// opacity: transformWatermarkOpacity,
					}}
					className="er-horizontal"
				>
					<span>E</span>
					<span>R</span>
				</WatermarkLetters>
			</WatermarkContainer>

			<HeroSection />
			<AboutSection
			
			transformYDORange={[0.01, 0.2]}
			transformYTRange={[0.01, 0.2]}/>

			<FooterSection
				transformSEERange={[0.4, 1]}
				transformYOURange={[0.4, 1]}
				transformTHERERange={[0.4, 1]}
				transformYEARRange={[0.4, 1]}
			/>
			<Footer>
				<a
					href="https://github.com/AdVision-Group/amsterdot-client"
					rel="noopener noreferrer"
					target="_blank"
				>
					<figure>
						<AiFillGithub />
					</figure>
				</a>
			</Footer>
		</React.Fragment>
	)
}

export default Home

const Footer = styled.footer`
	display: flex;
	justify-content: center;

	figure {
		color: ${({ theme }) => theme.color.primary};
		font-size: 3rem;
	}
`

const WatermarkContainer = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	/* bottom: 0; */
	width: 100%;
	/* min-height: 100vh; */
	height: calc(100% + 20rem);
	overflow: hidden;
	max-width: 200rem;
	margin: 0 auto;
	font-family: "Avenir Next";
	z-index: 1;

	/* border: 1px solid green; */
	@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		/* height: 100%; */
	}
`

const WatermarkLetters = styled(motion.h2)`
	position: absolute;
	overflow: hidden;
	font-size: 15rem;
	z-index: -2;
	color: ${({ theme }) => theme.fonts.primary};

	font-weight: 400;

	&.am {
		/* border: 1px solid green; */
		top: 8rem;
		left: -6rem;
	}
	&.st {
		display: none;
		width: 20rem;
		top: 25rem;
		right: 0rem;
	}
	&.st-horizontal {
		width: 13rem;
		top: 30rem;
		right: -5rem;
	}
	&.er {
		display: none;
		/* width: 5rem; */
		/* height: 40rem; */
		/* overflow-wrap: break-word; */
		top: 40rem;
		left: 5rem;
	}

	&.er-horizontal {
		/* width: 5rem; */
		/* height: 40rem; */
		/* border: 1px solid green; */
		line-height: 1;
		/* overflow-wrap: break-word; */
		top: 40rem;
		left: -2rem;
		span {
			display: block;
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		/* grid-template-columns: 1fr 35rem; */
		/* background-color: red; */
		font-size: 30rem;

		&.am {
			/* border: 1px solid green; */
			top: 10rem;
			left: -30rem;
		}
		&.st {
			display: block;
			width: 35.5rem;

			top: 25rem;
			right: -15rem;
		}
		&.st-horizontal {
			display: none;
		}
		&.er {
			display: block;
			/* top: 38rem; */
			bottom: -10rem;

			left: 10rem;
		}
		&.er-horizontal {
			display: none;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			/* grid-template-columns: 1fr 35rem; */
			/* background-color: red; */
			/* font-size: 30rem; */

			&.am {
				top: 7rem;
				left: 0rem;
			}
			&.st {
				top: 21rem;
				right: 0rem;
			}
			&.er {
				display: block;
				bottom: 0rem;
				left: 30rem;
			}

			/* @media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				font-size: 50rem;

				&.am {
					top: 8rem;
					left: 0rem;
				}
				&.st {
					width: 70rem;

					top: 27rem;
					right: 0rem;
				}
				&.er {
					top: 60rem;
					left: 40rem;
				}
			} */
		}
	}
`
