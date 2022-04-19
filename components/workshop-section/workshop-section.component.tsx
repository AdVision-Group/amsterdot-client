// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Link from "next/link"
import Image from "next/image"

const WorkshopSection = () => {
	const { scrollYProgress } = useViewportScroll()

	const transformWORK = useTransform(scrollYProgress, [0.3, 0.44], [-100, 0])
	const transformSHOP = useTransform(scrollYProgress, [0.3, 0.44], [50, -50])

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
				<div
					style={{
						display: "flex",
						gap: "3rem",
					}}
				>
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
					<Link href={"/#hack-2"} passHref>
						<a>
							<ArrowContainer
							// animate={{
							// 	x: [0, -10, -5, -15, 0],
							// 	// scale: [1.2, 1, 0.9, 0.97, 1.2],
							// }}
							// transition={{
							// 	repeat: Infinity,
							// 	ease: "easeInOut",
							// 	duration: 10,
							// }}
							>
								<Image
									src={"/assets/arrow-down-final.svg"}
									alt="red circle"
									layout="responsive"
									width={100}
									height={100}
									objectFit="contain"
								/>
							</ArrowContainer>
						</a>
					</Link>
				</div>
			</Container>
		</EventSectionContainer>
	)
}

export default WorkshopSection

const ArrowContainer = styled(motion.figure)`
	grid-area: a;
	position: relative;
	z-index: -3;
	justify-self: end;
	margin: 2rem 0;

	width: 6rem;
	heigth: 6rem;
	/* bottom: 5rem; */
	/* left: 3rem; */
	/* display: none; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		/* display: block; */
		width: 8rem;
		heigth: 8rem;
		/* bottom: 6rem; */
		align-self: end;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			/* bottom: 25rem; */
		}
	}
`

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
