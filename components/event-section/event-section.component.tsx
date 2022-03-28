// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Image from "next/image"

const EventSection = () => {
	const { scrollYProgress } = useViewportScroll()

	// const transformWatermarkOpacity = useTransform(
	// 	scrollYProgress,
	// 	[0, 0.95, 1, 1],
	// 	[1, 1, 1, 1]
	// )

	const transformCON = useTransform(
		scrollYProgress,
		[0.3, 0.5, 1, 1],
		[-100, 0, 100, 100]
	)
	const transformFERE = useTransform(
		scrollYProgress,
		[0.3, 0.5, 1, 1],
		[100, 0, -100, -100]
	)
	const transformNCE = useTransform(
		scrollYProgress,
		[0.3, 0.5, 1, 1],
		[-50, 0, 50, 50]
	)

	return (
		<EventSectionContainer>
			<WatermarkContainer>
				<Circle1
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
				</Circle1>
			</WatermarkContainer>
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
						x: transformCON,
					}}
					className="con"
				>
					CON
				</Title>
				<Title
					style={{
						x: transformFERE,
					}}
					className="fere"
				>
					FERE
				</Title>
				<Title
					style={{
						x: transformNCE,
					}}
					className="nce"
				>
					NCE
				</Title>
				<IluContainer>
					<figure>
						<Image
							src="/assets/ilu-conf.svg"
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
					<p>IN AMSTERDAM / NETHERLANDS</p>
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
						<span>WESTERUNIE Klönneplein 4-6, 1014 DD</span>
					</div>
				</PlaceContainer>
				<ArrowContainer
					animate={{
						x: [0, -10, -5, -15, 0],
						// scale: [1.2, 1, 0.9, 0.97, 1.2],
					}}
					transition={{
						repeat: Infinity,
						ease: "easeInOut",
						duration: 10,
					}}
				>
					<Image
						src={"/assets/arrow-left.svg"}
						alt="red circle"
						layout="responsive"
						width={100}
						height={100}
						objectFit="contain"
					/>
				</ArrowContainer>
			</Container>
		</EventSectionContainer>
	)
}

export default EventSection

const WatermarkContainer = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	/* bottom: 0; */
	width: 100%;
	/* min-height: 100vh; */
	height: calc(100% + 10rem);x
	max-width: 200rem;
	margin: 0 auto;
	font-family: "Avenir Next";
	
	/* border: 1px solid green; */
	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		/* overflow: hidden; */
		/* height: 100%; */
	}
`

const Circle1 = styled(motion.figure)`
	position: absolute;
	z-index: -3;

	width: 5rem;
	heigth: 5rem;
	right: 20%;
	top: -10%;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 10rem;
		heigth: 10rem;
	}
`

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
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			/* bottom: 25rem; */
		}
	}
`

const EventSectionContainer = styled.section`
	/* border: 1px solid yellow; */
	position: relative;
	color: ${({ theme }) => theme.fonts.primary};
	padding: 0rem 1.5rem;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;

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
		"i c"
		"i f"
		"i n"
		"p p"
		"a a";

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 100%;
		max-width: 90rem;

		grid-template-columns: minmax(15rem, 37rem) auto auto;
		grid-template-rows: auto auto auto 1fr auto;
		grid-template-areas:
			"c x x"
			"i f f"
			"i n n"
			"i n n"
			"p p a"
			"p p a";

		/* place-items: center; */
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: minmax(15rem, 52rem) auto auto;
			width: unset;
			max-width: unset;
			grid-template-areas:
				"c x x"
				"i f f"
				"i n a"
				"p n a";
			/* "p p a"
				"p p a"; */
		}
	}
`

const XContainer = styled.figure`
	position: relative;
	grid-area: x;
	width: 12rem;
	/* height: 5rem; */
	/* border: 1px solid green; */
	justify-self: end;
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

	&.con {
		grid-area: c;
		margin-left: -4rem;
	}
	&.fere {
		grid-area: f;
	}
	&.nce {
		grid-area: n;
		z-index: 1;
	}
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 10rem;

		&.con {
			align-self: center;
			margin-left: 0rem;
		}
		&.fere {
		}
		&.nce {
			z-index: 1;
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

	margin-bottom: 5rem;

	figure {
		width: 18rem;
		height: 25rem;
		&:nth-of-type(1) {
			position: absolute;
			z-index: 1;
			top: -5.5rem;
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

		figure {
			width: 26rem;
			/* height: 25rem; */
			&:nth-of-type(1) {
				top: -12.5rem;
				right: -8rem;
			}
			&:nth-of-type(2) {
				width: 20rem;
				bottom: 0;
			}
		}

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
`

const PlaceContainer = styled.div`
	grid-area: p;

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
		align-self: end;
	}
`
