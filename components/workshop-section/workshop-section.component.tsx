// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
// import Link from "next/link"
import Image from "next/image"

const WorkshopSection = () => {
	const { scrollYProgress } = useViewportScroll()

	const transformWORK = useTransform(scrollYProgress, [0.6, 0.83], [-100, 0])
	const transformSHOP = useTransform(scrollYProgress, [0.6, 0.83], [50, -50])

	return (
		<EventSectionContainer>
			<Container>
				<WORKContainer
					style={{
						x: transformWORK,
					}}
				>
					<Image
						src="/assets/workshop-section/work.svg"
						alt="work"
						objectFit="contain"
						layout="responsive"
						width={100}
						height={70}
					/>
				</WORKContainer>
				<SHOPContainer
					style={{
						x: transformSHOP,
					}}
				>
					<Image
						src="/assets/workshop-section/shop.svg"
						alt="work"
						objectFit="contain"
						layout="responsive"
						width={100}
						height={70}
					/>
				</SHOPContainer>
				{/* <Title
					style={{
						x: transformHACK,
					}}
					className="hack"
				>
					HACK
				</Title>
				<Title
					style={{
						x: transformATH,
					}}
					className="ath"
				>
					ATH
				</Title>
				<Title
					style={{
						x: transformON,
					}}
					className="on"
				>
					ON
				</Title> */}
			</Container>
		</EventSectionContainer>
	)
}

export default WorkshopSection

const EventSectionContainer = styled.section`
	/* border: 1px solid yellow; */
	color: ${({ theme }) => theme.fonts.primary};
	padding: 0rem 1.5rem;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		/* margin-top: 10rem; */
		/* height: 100vh; */
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`

const Container = styled.div`
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const WORKContainer = styled(motion.figure)`
	position: relative;
	grid-area: w;
	/* width: 16rem; */
	/* height: 5rem; */
	/* border: 1px solid green; */
	/* justify-self: end; */
	/* margin-bottom: 2rem; */
	width: 28rem;
	/* border: 1px solid red; */
	margin-top: -4rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 48rem;
		margin-top: -8rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin-top: -10rem;
			width: 68rem;
		}
	}
`
const SHOPContainer = styled(motion.figure)`
	position: relative;
	grid-area: s;
	width: 28rem;
	margin-top: -8rem;
	margin-bottom: -6rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 48rem;
		margin-bottom: -10rem;
		margin-top: -14rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin-top: -20rem;
			width: 68rem;
		}
	}
`
