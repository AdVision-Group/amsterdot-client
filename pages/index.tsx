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

	return (
		<React.Fragment>
			<Head>
				<title>Amsterdot</title>
				<meta name="description" content="Amsterdot" />
			</Head>

			<Header />

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
