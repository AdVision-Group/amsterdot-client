// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Link from "next/link"
import Image from "next/image"

const HackathonSection = () => {
	const { scrollYProgress } = useViewportScroll()

	const transformHACK = useTransform(scrollYProgress, [0, 0.16], [-100, 0])
	const transformATH = useTransform(scrollYProgress, [0, 0.16], [50, -50])
	const transformON = useTransform(scrollYProgress, [0, 0.16], [-50, 0])

	return (
		<EventSectionContainer>
			<Container>
				<XContainer>
					<Image
						src="/assets/xxx.svg"
						alt="conf ilu"
						objectFit="contain"
						layout="responsive"
						width={100}
						height={50}
					/>
				</XContainer>
				<Title
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
				</Title>
				<IluContainer>
					<figure>
						<Image
							src="/assets/rose-primary-ilu.svg"
							alt="conf ilu"
							objectFit="contain"
							layout="responsive"
							width={100}
							height={200}
						/>
					</figure>
					<figure>
						<Image
							src="/assets/anim-v2.gif"
							alt="conf ilu"
							objectFit="contain"
							layout="responsive"
							width={100}
							height={200}
						/>
					</figure>
				</IluContainer>
				<PlaceContainer>
					<div>
						<figure>
							<Image
								src="/assets/list-icon.svg"
								alt="conf ilu"
								objectFit="contain"
								layout="fixed"
								width={30}
								height={30}
							/>
						</figure>
						<span>ONLINE</span>
					</div>
				</PlaceContainer>
				<Link href={"/#hackaton-content"} passHref>
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
			</Container>
		</EventSectionContainer>
	)
}

export default HackathonSection

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
	/* scroll-padding-top: 8rem; */
	/* position: relative; */
	/* background-color: ${({ theme }) => theme.background.primary}; */
	/* overflow: hidden; */
	/* width: 100vw; */
	/* height: 100vh; */

	display: grid;
	/* grid-template-columns: 17rem auto; */
	grid-template-columns: minmax(15rem, 25rem) auto;
	/* grid-template-rows: auto auto auto; */
	grid-template-areas:
		"x x"
		"i h"
		"i t"
		"i o"
		"p p"
		"a a";

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 100%;
		max-width: 90rem;

		grid-template-columns: minmax(15rem, 37rem) auto auto;
		grid-template-rows: auto auto auto 1fr auto;
		grid-template-areas:
			"i h h"
			"i t x"
			"i o a"
			"i o a"
			"p p p";

		/* place-items: center; */
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: minmax(15rem, 52rem) auto auto;
			width: unset;
			max-width: unset;
			grid-template-areas:
				"h h h"
				"i t x"
				"i o a"
				"p p p";
		}
	}
`

const XContainer = styled.figure`
	position: relative;
	grid-area: x;
	width: 12rem;
	/* height: 5rem; */
	/* border: 1px solid green; */
	/* justify-self: end; */
	margin-bottom: 2rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		justify-self: start;
		align-self: center;
		margin-bottom: unset;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			width: 18rem;
		}
	}
`

const Title = styled(motion.h3)`
	position: relative;
	font-size: 7rem;
	font-weight: 500;
	line-height: 1;
	z-index: 3;
	justify-self: end;

	&.hack {
		grid-area: h;
	}
	&.ath {
		grid-area: t;
		margin-right: 2rem;
	}
	&.on {
		grid-area: o;
		z-index: 1;
		margin-right: 1rem;
	}
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 10rem;

		&.hack {
			align-self: center;
			margin-left: 0rem;
		}
		&.ath {
		}
		&.on {
			z-index: 1;
			margin-right: 0;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 15rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				font-size: 22rem;
			}
		}
	}
`

const IluContainer = styled.div`
	grid-area: i;

	position: relative;
	/* border: 1px solid green; */
	/* margin: 6rem 0rem 0rem; */
	width: 18rem;
	height: 26rem;

	margin-top: -5rem;
	margin-bottom: 5rem;

	figure {
		width: 18rem;
		height: 25rem;
		&:nth-of-type(1) {
			position: absolute;
			z-index: 1;
			bottom: -2rem;
			right: -5rem;
		}
		&:nth-of-type(2) {
			width: 15rem;
			position: absolute;
			bottom: 0;
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 28rem;
		margin-top: -10rem;

		figure {
			width: 26rem;
			/* height: 25rem; */
			&:nth-of-type(1) {
				bottom: -2rem;
				right: -5rem;
			}
			&:nth-of-type(2) {
				width: 20rem;
				bottom: 0;
			}
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			margin-top: 0rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				width: 48rem;
				margin-top: -8rem;

				figure {
					width: 30rem;

					&:nth-of-type(1) {
						top: -12.5rem;
						right: -3rem;
					}
					&:nth-of-type(2) {
						right: 12rem;
						width: 22rem;
						bottom: 0;
					}
				}
			}
		}
	}
`

const PlaceContainer = styled.div`
	grid-area: p;
	margin-top: 5rem;

	p,
	div {
		font-family: "Acumin Variable Concept";
		font-weight: 300;
		text-transform: uppercase;
		display: flex;
		align-items: center;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-top: 10rem;
		align-self: start;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			margin-top: 5rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				margin-top: -4rem;
				margin-left: 14rem;
			}
		}
	}
`
