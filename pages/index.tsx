// Types
import type { NextPage } from "next"

// Utils
import React, { useEffect, useRef } from "react"
import styled from "styled-components"

// Components
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Header from "../components/header/header.component"
import EventOverview from "../components/event-overview/event-overview.component"
import HeroSection from "../components/hero-section/hero-section.component"
import AboutSection from "../components/about-section/about-section.component"
import EventSection from "../components/event-section/event-section.component"
import HackathonSection from "../components/hackathon-section/hackathon-section.component"
import FooterSection from "../components/footer-section/footer-section.component"

// Hooks
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from "framer-motion"
import { useNumber, useWindowSize } from "react-use"

// Data
import { events, hackatons } from "../utils/data"

const Home: NextPage = () => {
	const { width } = useWindowSize()
	const physics = { damping: 5, mass: 0.17, stiffness: 55 }

	// CONFERENCE refs
	const containerRef = useRef<HTMLDivElement>(null)
	const sectionRef = useRef<HTMLDivElement>(null)

	const [num, { set }] = useNumber(0)

	// Scroll position
	const { scrollYProgress } = useViewportScroll()

	// CONFERENCE horizontal scroll
	const transform = useTransform(scrollYProgress, [0.25, 0.55], [0, -num])
	const spring = useSpring(transform, physics)

	// CONFERENCE scroll to view
	const transformY = useTransform(scrollYProgress, [0.55, 0.75], [0, -1100])

	const transformOpacityCONF = useTransform(
		scrollYProgress,
		[0.19, 0.25, 1, 1],
		[0, 1, 1, 1]
	)

	const springY = useSpring(transformY, physics)
	// HACKATHON refs
	const containerRefH = useRef<HTMLDivElement>(null)
	const sectionRefH = useRef<HTMLDivElement>(null)

	const [numH, { set: setH }] = useNumber(0)

	// HACKATHON horizontal scroll
	const transformH = useTransform(scrollYProgress, [0.7, 1], [0, -numH])
	const springH = useSpring(transformH, physics)

	// HACKATHON scroll to view
	const transformYH = useTransform(
		scrollYProgress,
		[0.5, 0.7, 1, 1],
		[1100, 0, 0, 0]
	)

	const transformOpacityHACK = useTransform(
		scrollYProgress,
		[0.65, 0.7, 1, 1],
		[0, 1, 1, 1]
	)

	// scrollYProgress.onChange((e) => console.log(e))

	// Set horizontal container width on change
	useEffect(() => {
		if (sectionRef.current) {
			const finalNum = sectionRef.current.scrollWidth
			set(finalNum * events.length)
		}
	}, [width, sectionRef, set])

	useEffect(() => {
		if (sectionRefH.current) {
			const finalNum = sectionRefH.current.scrollWidth
			setH(finalNum * (hackatons.length + 1))
		}
	}, [width, sectionRefH, setH])

	const transformYAM = useTransform(
		scrollYProgress,
		[0, 0.1, 1, 1],
		[0, 150, 150, 150]
	)
	const transformYST = useTransform(
		scrollYProgress,
		[0, 0.1, 1, 1],
		[20, -100, -100, -100]
	)
	const transformYER = useTransform(
		scrollYProgress,
		[0, 0.1, 1, 1],
		[0, -50, -50, -50]
	)

	return (
		<React.Fragment>
			<Head>
				<title>amsterDOT Hack Conf</title>
				<meta name="description" content="amsterDOT Hack Conf" />
			</Head>

			<Header />

			<WatermarkContainer>
				{/* <Circle1
					className="first"
					animate={{
						scale: [0.95, 1.2, 1, 1.5, 0.95],
					}}
					transition={{
						repeat: Infinity,
						ease: "easeInOut",
						duration: 10,
					}}
				>
					<Image
						src={"/assets/primary-circle.svg"}
						alt="red circle"
						layout="responsive"
						width={100}
						height={100}
						objectFit="contain"
					/>
				</Circle1> */}
				{/* <Circle2
					className="first"
					animate={{
						x: [0, 20, 10, -5, 0],
						scale: [1.2, 0.97, 0.9, 1, 1.2],
					}}
					transition={{
						repeat: Infinity,
						ease: "easeInOut",
						duration: 10,
					}}
				>
					<Image
						src={"/assets/primary-circle.svg"}
						alt="red circle"
						layout="responsive"
						width={100}
						height={100}
						objectFit="cover"
					/>
				</Circle2> */}
				{/* <Circle3
					animate={{
						y: [0, -5, 10, 20, 0],
						scale: [1.2, 1, 0.9, 0.97, 1.2],
					}}
					transition={{
						repeat: Infinity,
						ease: "easeInOut",
						duration: 10,
					}}
				>
					<Image
						src={"/assets/primary-circle.svg"}
						alt="red circle"
						layout="responsive"
						width={100}
						height={100}
						objectFit="cover"
					/>
				</Circle3> */}
				<ArrowContainer
					animate={{
						y: [0, -5, -10, -7, 0],
						// scale: [1.2, 1, 0.9, 0.97, 1.2],
					}}
					transition={{
						repeat: Infinity,
						ease: "easeInOut",
						duration: 10,
					}}
				>
					<Image
						src={"/assets/arrow-container.svg"}
						alt="red circle"
						layout="responsive"
						width={100}
						height={100}
						objectFit="contain"
					/>
				</ArrowContainer>

				<WatermarkLetters
					style={{
						x: transformYAM,

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
						src={"/assets/st.svg"}
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
			<AboutSection />

			<Container id="events">
				<FlexContainer
					ref={containerRef}
					style={{
						x: spring,
						y: transformY,
						opacity: transformOpacityCONF,
					}}
					transition={{
						ease: "linear",
					}}
				>
					<EventSection />
					{events.map((event, idx) => (
						<SectionContainer
							id={event.id}
							key={idx}
							ref={idx === 0 ? sectionRef : null}
						>
							<EventOverview item={event} />
						</SectionContainer>
					))}
				</FlexContainer>
			</Container>
			<Container id="hackatons">
				<FlexContainer
					ref={containerRefH}
					style={{
						x: springH,
						y: transformYH,
						opacity: transformOpacityHACK,
					}}
				>
					<HackathonSection />
					{hackatons.map((event, idx) => (
						<SectionContainer
							id={event.id}
							key={idx}
							ref={idx === 0 ? sectionRefH : null}
						>
							<EventOverview item={event} />
						</SectionContainer>
					))}
					<FooterSection />
				</FlexContainer>
			</Container>

			{/* <FooterContainer id="footer">
				<h1>footer section</h1>
			</FooterContainer> */}
		</React.Fragment>
	)
}

export default Home

// const Circle1 = styled(motion.figure)`
// 	position: absolute;
// 	z-index: -3;

// 	width: 5rem;
// 	heigth: 5rem;
// 	left: 50%;
// 	top: 10%;

// 	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
// 		width: 10rem;
// 		heigth: 10rem;
// 	}
// `
const Circle2 = styled(motion.figure)`
	position: absolute;
	z-index: -3;

	width: 6rem;
	heigth: 6rem;
	top: 5rem;
	right: 6rem;
	border-radius: 50%;
	overflow: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 12rem;
		heigth: 12rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
			top: 5rem;
			right: 5rem;
		}
	}
`

// const Circle3 = styled(motion.figure)`
// 	display: none;
// 	position: absolute;
// 	z-index: -3;

// 	width: 6rem;
// 	heigth: 6rem;
// 	bottom: 3rem;
// 	left: 3rem;

// 	border-radius: 50%;
// 	overflow: hidden;

// 	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
// 		display: block;
// 		width: 12rem;
// 		heigth: 12rem;
// 	}
// `
const ArrowContainer = styled(motion.figure)`
	position: absolute;
	z-index: -3;

	width: 6rem;
	heigth: 6rem;
	bottom: 0rem;
	right: 3rem;
	/* display: none; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		right: unset;
		left: 3rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: block;
			width: 8rem;
			heigth: 8rem;
			bottom: 6rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				bottom: 25rem;
			}
		}
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
	z-index: -1;

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
			width: 45rem;

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
				left: -11rem;
			}
			&.st {
				top: 17rem;
				right: -10rem;
			}
			&.er {
				display: block;
				bottom: 0rem;
				left: 30rem;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
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
			}
		}
	}
`

const Container = styled.div`
	/* scroll-padding-top: 8rem; */
	position: relative;
	overflow: hidden;
	width: 100vw;
	height: 400vh;

	&#hackatons {
		/* background-color: red; */
	}
`

const FlexContainer = styled(motion.div)`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	/* padding: 3rem 1.5rem; */
`

const SectionContainer = styled.section`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: ${({ theme }) => theme.background.primary}; */
	padding: 1.5rem 3rem 1.5rem 1.5rem;
`
