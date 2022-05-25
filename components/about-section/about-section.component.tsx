// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Image from "next/image"
import Link from "next/link"
import Button from "../button/button.component"

const AboutSection = () => {
	const { scrollYProgress } = useViewportScroll()

	// const tr
	// ansformOpacity = useTransform(scrollYProgress, [0.13, 0.2], [1, 0])

	const transformYDO = useTransform(scrollYProgress, [0.54, 0.7], [-180, 0])

	const transformYT = useTransform(scrollYProgress, [0.54, 0.77], [130, -40])

	const partners = [
		{
			image: {
				src: "/assets/polkadot-logo.svg",
				alt: "polkadot logo",
				blurDataURL:
					"data:image/webp;base64,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",
				width: 40,
				height: 40,
				objectFit: "contain",
			},
			name: "polkadot",
		},
		{
			image: {
				src: "/assets/kusama.png",
				alt: "substrate logo",
				blurDataURL:
					"data:image/webp;base64,UklGRkIDAABXRUJQVlA4WAoAAAAgAAAAMgEAvQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCAEAQAA0BQAnQEqMwG+AD7tdq9VqacjoyAp6TAdiWlu3fVzjwQCg4kDWkX4+vyuRflWKZN+yhh2/RE0oZIN3wkyyPxu0qz0UrkI0h6njjQYSLkoa/RQCdfRI+tT9ImfA3bBkvnDm69fk98zoQXsHuII99JKLpfODJEDI66qIGC5d6RRmfBxqiGBaIQn6M2C4NJtKGWo80QhP0ZlXGv5YnA115HzGg1ea6NdYM+DJecGS84MEAD+8RjQQcDOWeREROKW4BpHcu+C81IXmTln9WybDDtjSxZ0eh63jQidD7w1tuvUuop479rquAPRGCz11IN/lI97nSabJfl/p8IYcH7JflEAAAAAAAA=",
				width: 40,
				height: 40,
				objectFit: "contain",
			},
			name: "kusama",
		},
		{
			image: {
				src: "/assets/substrate.png",
				alt: "substrate logo",
				blurDataURL:
					"data:image/webp;base64,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",
				width: 40,
				height: 40,
				objectFit: "contain",
			},
			name: "substrate",
		},
	]

	return (
		<React.Fragment>
			<SectionContainer id="about">
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

					{/* <ArrowContainer
					animate={{
						y: [0, -5, 10, 20, 0],
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
				</ArrowContainer> */}

					<WatermarkLetters
						style={{
							x: transformYDO,

							// opacity: transformWatermarkOpacity,
						}}
						className="do"
					>
						DO<span>T</span>
					</WatermarkLetters>
					<WatermarkLetters
						style={{
							x: transformYDO,

							// opacity: transformWatermarkOpacity,
						}}
						className="do-horizontal"
					>
						<span>D</span>
						<span>O</span>
					</WatermarkLetters>

					<WatermarkLetters
						style={{
							x: transformYT,

							// opacity: transformWatermarkOpacity,
						}}
						className="t"
					>
						T
					</WatermarkLetters>
				</WatermarkContainer>
				<Container
				// style={{
				// 	opacity: transformOpacity,
				// }}
				>
					<LabelContainer>
						<p>INFO</p>
					</LabelContainer>
					<ContentContainer>
						<h2>WHAT IS amsterDOT?</h2>
						<p>
							4 days of conf & hack sessions organized by some of the leading
							projects of the Polkadot and Kusama ecosystems.
						</p>
						<PartnersContainer>
							{partners.map((i, idx) => (
								<figure key={idx}>
									<Image
										src={i.image.src}
										blurDataURL={i.image.blurDataURL}
										placeholder="blur"
										width={i.image.width}
										height={i.image.height}
										alt={i.image.alt}
										objectFit="contain"
										layout="responsive"
									/>
								</figure>
							))}
						</PartnersContainer>
						<p>
							Offering an inclusive space to meet, greet, talk and exchange
							thoughts, and perhaps kick off the next interesting collaboration.
							Targeting the wider crypto community.
						</p>
						<ButtonsContainer>
							<Link href={"/#day-1"}>
								<a>
									<Button>CONF PROGRAM</Button>
								</a>
							</Link>
							<Link href={"/#hack-2"}>
								<a>
									<Button outline={"true"}>HACK PROGRAM</Button>
								</a>
							</Link>
						</ButtonsContainer>
						{/* <ButtonsContainer>
							<Button>CONF PROGRAMME</Button>
							<Button outline={true}>HACK PROGRAMME</Button>
						</ButtonsContainer> */}
						<AnimationContainer
							className="first"
							// animate={{
							// 	x: [0, 20, 10, -5, 0],
							// 	scale: [1.2, 0.97, 0.9, 1, 1.2],
							// }}
							// transition={{
							// 	repeat: Infinity,
							// 	ease: "easeInOut",
							// 	duration: 10,
							// }}
						>
							<Image
								src={"/assets/anim-v2.gif"}
								alt="red circle"
								layout="responsive"
								width={100}
								height={200}
								objectFit="cover"
							/>
						</AnimationContainer>
					</ContentContainer>
				</Container>
			</SectionContainer>
		</React.Fragment>
	)
}

export default AboutSection

const WatermarkContainer = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	/* bottom: 0; */
	width: 100%;
	/* min-height: 100vh; */
	height: calc(100% + 10rem);
	max-width: 200rem;
	margin: 0 auto;
	font-family: "Avenir Next";

	/* border: 1px solid green; */
	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		overflow: hidden;
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

	&.do {
		/* border: 1px solid green; */
		/* display: none; */
		top: -10rem;
		left: 0rem;
	}

	&.do-horizontal {
		display: none;
		top: 5rem;
		left: 0rem;
		line-height: 1;

		span {
			display: block;
		}
	}

	&.t {
		display: none;
		top: 20rem;
		right: 0rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 30rem;
		&.do {
			/* border: 1px solid green; */
			/* display: block; */
			top: 5rem;
			left: 0rem;

			span {
				/* display: none; */
			}
		}

		&.do-horizontal {
			top: 5rem;
			left: 0rem;
			line-height: 1;

			span {
				display: block;
			}
		}

		&.t {
			top: 25rem;
			right: 0rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			&.do {
				/* border: 1px solid green; */
				/* display: block; */
				top: 5rem;
				left: 0rem;

				span {
					display: none;
				}
			}

			&.t {
				display: block;
				top: 25rem;
				right: 0rem;
			}
			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				font-size: 50rem;
			}
		}
	}
`

const SectionContainer = styled.section`
	scroll-margin-top: 20rem;
	position: relative;
	flex: none;
	width: 100%;
	z-index: 99;
	/* height: 100vh; */
	/* overflow: hidden; */
	margin: 15rem 0 10rem;
	overflow: unset !important;
	overflow-x: hidden;
	display: flex;
	justify-content: center;

	color: ${({ theme }) => theme.fonts.primary};
	/* border: 1px solid yellow; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin: 20rem 0 10rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin: 12rem 0 10rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				align-items: center;
			}
		}
	}
`

const Container = styled(motion.div)`
	position: relative;
	/* border: 1px solid green; */
	width: 100%;
	/* margin: 25rem 1.5rem 0; */
	margin: 0 3rem 0 1.5rem;
	max-width: 90rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin: 0rem 1.5rem 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
			max-width: 130rem;
		}
	}
`

const LabelContainer = styled.div`
	position: relative;
	z-index: 1;
	background-color: ${({ theme }) => theme.color.primary};
	padding: 0.8rem 1rem 0.5rem;
	display: inline-block;
	margin-left: 1.5rem;
	color: ${({ theme }) => theme.fonts.secondary};
	font-weight: 500;
	font-size: 2.5rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-left: 3rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 3.5rem;
		}
	}
`

const ContentContainer = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.background.container};
	padding: 4rem 1.5rem 1.5rem;
	margin-top: -3rem;

	h2 {
		font-family: "Avenir Next";
		line-height: 1.5;
		font-weight: 500;
		font-size: 2.8rem;
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 1.6rem;
		margin-bottom: 1rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		p {
			font-size: 1.8rem;
			margin-bottom: 2rem;
			max-width: 75rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: 4rem 3rem 3rem;

			h2 {
				font-size: 4rem;
				margin-top: 1rem;
				margin-bottom: 2rem;
			}

			p {
				margin-bottom: 2rem;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				padding: 4rem 4rem 4rem;

				h2 {
					font-size: 6rem;
					margin-top: 1rem;
					margin-bottom: 2.5rem;
				}

				p {
					margin-bottom: 2rem;
				}
			}
		}
	}
`

const PartnersContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin: 2rem 0 2rem;
	/* width: 100%; */
	gap: 1.5rem;

	figure {
		position: relative;
		border: 3px solid ${({ theme }) => theme.color.primary};
		width: 8rem;
		height: 8rem;
		padding: 1.5rem;
		border-radius: 50%;

		img {
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		justify-content: flex-start;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			figure {
				width: 12rem;
				height: 12rem;
				padding: 2.5rem;
			}
		}
	}
`

const AnimationContainer = styled(motion.figure)`
	position: absolute;
	z-index: -1;
	/* padding: 1.5rem; */
	width: 18rem;
	right: -1.5rem;
	bottom: -1.5rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		/* bottom: 13rem; */

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			width: 24rem;
			right: -6rem;
			bottom: -6rem;
			/* heigth: 20rem; */
		}
	}
`

// const ButtonsContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	gap: 1rem;
// 	width: 100%;
// 	/* margin: 2rem 0; */

// 	button {
// 		/* font-size: 1.2rem; */
// 		width: 100%;
// 		font-weight: 600;
// 		/* padding: 1rem 1rem 0.8rem; */
// 	}
// 	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
// 		flex-direction: row;

// 		button {
// 			width: fit-content;
// 			font-size: 1.8rem;
// 		}
// 	}
// `

const ButtonsContainer = styled.div`
	grid-area: b;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	align-self: end;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-top: 2rem;
	/* margin: 2rem 0; */

	button {
		font-family: "Avenir Next";
		font-size: 1.5rem;
		font-weight: 700;
		padding: 1rem 1rem 0.8rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		/* flex-gap: 1rem; */
		/* align-items: end; */
		justify-content: flex-start;
		flex-wrap: unset;
		gap: 2rem;

		button {
			font-size: 2rem;
			line-height: 1;
			/* margin-bottom: 1rem; */
		}
		button:nth-of-type(1) {
			/* font-size: 2rem; */
			/* margin-right: 1rem; */
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			button {
				/* font-size: 3rem; */
				padding: 1.2rem 2rem 0.8rem;
				font-weight: 400;
			}
			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				button {
					font-size: 3rem;
					padding: 1.8rem 4rem 1.5rem;
				}
			}
		}
	}
`
