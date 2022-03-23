// Types
import type { NextPage } from "next"

// Utils
import React, { useEffect, useRef } from "react"
import styled from "styled-components"

// Components
import Head from "next/head"
import Link from "next/link"
import Header from "../components/header/header.component"
import EventOverview from "../components/event-overview/event-overview.component"
import HeroSection from "../components/hero-section/hero-section.component"

// Hooks
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from "framer-motion"
import { useNumber, useWindowSize } from "react-use"

// Data
import { events } from "../utils/data"

const Home: NextPage = () => {
	const { width } = useWindowSize()
	const containerRef = useRef<HTMLDivElement>(null)
	const sectionRef = useRef<HTMLDivElement>(null)

	const [num, { set }] = useNumber(0)

	const { scrollYProgress } = useViewportScroll()
	const transform = useTransform(scrollYProgress, [0.28, 0.72], [0, -num])
	const transformY = useTransform(
		scrollYProgress,
		[0, 0.28, 0.72, 1],
		[1000, 0, 0, -1000]
	)
	const transformOpacity = useTransform(
		scrollYProgress,
		[0.1, 0.28, 0.72, 0.9],
		[0, 1, 1, 0]
	)
	const physics = { damping: 5, mass: 0.17, stiffness: 55 }
	const spring = useSpring(transform, physics)

	// scrollYProgress.onChange((e) => console.log(e))

	useEffect(() => {
		if (sectionRef.current) {
			const finalNum = sectionRef.current.scrollWidth
			set(finalNum * (events.length - 1))
		}
	}, [width, sectionRef, set])

	// const { scrollYProgress } = useViewportScroll()

	// const transformOpacity = useTransform(
	// 	scrollYProgress,
	// 	[0, 0.28, 0.72, 1],
	// 	[1, 0, 0, 0]
	// )

	const transformWatermarkOpacity = useTransform(
		scrollYProgress,
		[0, 0.28, 0.72, 1],
		[1, 0, 0, 0]
	)

	const transformYAM = useTransform(
		scrollYProgress,
		[0, 0.28, 0.72, 1],
		[0, 1400, 0, -1000]
	)
	const transformYST = useTransform(
		scrollYProgress,
		[0, 0.28, 0.72, 1],
		[0, -700, 0, -1000]
	)
	const transformYER = useTransform(
		scrollYProgress,
		[0, 0.28, 0.72, 1],
		[0, 600, 0, -1000]
	)

	return (
		<React.Fragment>
			<Head>
				<title>Amsterdot</title>
				<meta name="description" content="Amsterdot" />
			</Head>

			<Header />

			<WatermarkContainer>
				<WatermarkLetters
					style={{
						x: transformYAM,

						opacity: transformWatermarkOpacity,
					}}
					className="am"
				>
					AM
				</WatermarkLetters>
				<WatermarkLetters
					style={{
						x: transformYST,

						opacity: transformWatermarkOpacity,
					}}
					className="st"
				>
					ST
				</WatermarkLetters>
				<WatermarkLetters
					style={{
						x: transformYER,

						opacity: transformWatermarkOpacity,
					}}
					className="er"
				>
					ER
				</WatermarkLetters>
			</WatermarkContainer>

			<HeroSection />
			<Container id="events">
				<FlexContainer
					ref={containerRef}
					style={{
						x: spring,
						y: transformY,
						opacity: transformOpacity,
					}}
				>
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

			<FooterContainer id="footer">
				<h1>footer section</h1>
			</FooterContainer>
		</React.Fragment>
	)
}

export default Home

const WatermarkContainer = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	/* bottom: 0; */
	width: 100%;
	height: calc(100% + 30rem);
	overflow-x: hidden;
	max-width: 200rem;
	margin: 0 auto;

	/* border: 1px solid green; */
`

const WatermarkLetters = styled(motion.h2)`
	position: absolute;
	font-size: 15rem;
	font-weight: 300;
	z-index: -2;
	color: ${({ theme }) => theme.fonts.primary};

	&.am {
		/* border: 1px solid green; */
		top: 10rem;
		left: -5rem;
	}
	&.st {
		top: 25rem;
		right: 0rem;
	}
	&.er {
		top: 40rem;
		left: 0rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		/* grid-template-columns: 1fr 35rem; */
		/* background-color: red; */
		font-size: 30rem;

		&.am {
			/* border: 1px solid green; */
			top: 10rem;
			left: -5rem;
		}
		&.st {
			top: 25rem;
			right: 0rem;
		}
		&.er {
			top: 40rem;
			left: 0rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			/* grid-template-columns: 1fr 35rem; */
			/* background-color: red; */
			font-size: 40rem;

			&.am {
				top: 5rem;
				left: 5rem;
			}
			&.st {
				top: 25rem;
				right: 0rem;
			}
			&.er {
				top: 40rem;
				left: 20rem;
			}
		}
	}
`

const Container = styled.div`
	scroll-padding-top: 8rem;
	position: relative;
	/* background-color: ${({ theme }) => theme.background.primary}; */
	overflow: hidden;
	width: 100vw;
	height: 300vh;
`

const FlexContainer = styled(motion.div)`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
`

const HeroContainer = styled.section`
	position: relative;
	z-index: 99;
	flex: none;
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	color: #fff;

	background-color: ${({ theme }) => theme.background.primary};
`

const FooterContainer = styled.section`
	position: relative;
	z-index: 99;
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	color: #fff;
	background-color: ${({ theme }) => theme.background.primary};
`
const SectionContainer = styled.section`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: ${({ theme }) => theme.background.primary}; */
`
