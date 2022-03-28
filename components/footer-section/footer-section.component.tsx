// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Image from "next/image"

const FooterSection = () => {
	const { scrollYProgress } = useViewportScroll()

	// const transformWatermarkOpacity = useTransform(
	// 	scrollYProgress,
	// 	[0, 0.95, 1, 1],
	// 	[1, 1, 1, 1]
	// )

	const transformSEE = useTransform(
		scrollYProgress,
		[0.3, 0.5, 1, 1],
		[0, 0, 0, 0]
	)
	const transformYOU = useTransform(
		scrollYProgress,
		[0.3, 0.5, 1, 1],
		[0, 0, 0, 0]
	)
	const transformTHERE = useTransform(
		scrollYProgress,
		[0.3, 0.5, 1, 1],
		[0, 0, 0, 0]
	)

	return (
		<EventSectionContainer>
			{/* <WatermarkContainer>
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
			</WatermarkContainer> */}
			<Container>
				<Title
					style={{
						x: transformSEE,
					}}
					className="see"
				>
					SEE
				</Title>
				<Title
					style={{
						x: transformYOU,
					}}
					className="you"
				>
					YOU
				</Title>
				<Title
					style={{
						x: transformTHERE,
					}}
					className="there"
				>
					THERE
				</Title>
				<ImageContainer className="first">
					<figure>
						<Image
							src={"/assets/footer/1-v2.jpeg"}
							alt="place"
							layout="responsive"
							width={100}
							height={100}
							objectFit="contain"
						/>
					</figure>
				</ImageContainer>
				<ImageContainer className="second">
					<figure>
						<Image
							src={"/assets/footer/4-v2.jpeg"}
							alt="place 3"
							layout="responsive"
							width={100}
							height={100}
							objectFit="contain"
						/>
					</figure>
					<figure>
						<Image
							src={"/assets/footer/3-v2.jpeg"}
							alt="place 2"
							layout="responsive"
							width={100}
							height={100}
							objectFit="contain"
						/>
					</figure>
				</ImageContainer>
				<ImageContainer className="third">
					<figure>
						<Image
							src={"/assets/footer/2-v2.jpeg"}
							alt="place 4"
							layout="responsive"
							width={100}
							height={100}
							objectFit="contain"
						/>
					</figure>
					<figure>
						<Image
							src={"/assets/footer/5-v2.jpeg"}
							alt="place 5"
							layout="responsive"
							width={100}
							height={100}
							objectFit="contain"
						/>
					</figure>
				</ImageContainer>
			</Container>
		</EventSectionContainer>
	)
}

export default FooterSection

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
		/* overflow: hidden; */
		/* height: 100%; */
	}
`

const Circle1 = styled(motion.figure)`
	position: absolute;
	z-index: -3;

	width: 5rem;
	heigth: 5rem;
	left: 20%;
	top: 5%;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 10rem;
		heigth: 10rem;
		right: 20%;
		left: unset;
		top: 0%;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			top: -5%;
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
	position: relative;
	display: grid;
	grid-template-columns: auto auto;
	grid-template-areas:
		"s f"
		"i u"
		"d d"
		"t t";

	&:before {
		content: "";
		background-color: ${({ theme }) => theme.background.container};
		position: absolute;
		width: 80%;
		height: 80%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 100%;
		max-width: 90rem;
		margin: 0 auto;

		grid-template-areas:
			"s f"
			"i f"
			"i u"
			"d d"
			"t t";

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			/* width: unset;
			max-width: unset; */
			/* background-color: red; */
			grid-template-areas:
				"s f d"
				"i u u"
				"i t t";
		}
	}
`

const Title = styled(motion.h3)`
	position: relative;
	font-size: 7rem;
	font-weight: 500;
	line-height: 1;
	z-index: 3;

	&.see {
		grid-area: s;
	}
	&.you {
		grid-area: u;
		align-self: end;
	}
	&.there {
		grid-area: t;
	}
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 10rem;

		&.see {
		}
		&.you {
			justify-self: end;
		}
		&.there {
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 15rem;

			&.see {
			}
			&.you {
				justify-self: start;
			}
			&.there {
				justify-self: start;
				margin-left: -4rem;
			}
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				font-size: 20rem;
			}
		}
	}
`

const ImageContainer = styled(motion.div)`
	&.first {
		grid-area: f;

		figure {
			width: 20rem;
			margin-left: -6rem;
		}
	}

	&.second {
		grid-area: i;
		position: relative;
		width: 20rem;
		height: 20rem;

		figure {
			width: 20rem;
			top: 0;
			position: absolute;

			&:nth-of-type(1) {
				z-index: 1;
			}
			&:nth-of-type(2) {
				top: -5rem;

				right: -5rem;
			}
		}
	}

	&.third {
		grid-area: d;
		position: relative;
		width: 20rem;
		height: 20rem;
		margin-top: -4rem;
		justify-self: center;

		figure {
			width: 20rem;
			top: 0;
			position: absolute;

			&:nth-of-type(2) {
				top: unset;
				bottom: -5rem;
				right: -5rem;
			}
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		&.first {
			justify-self: end;

			figure {
				margin-left: unset;
			}
		}

		&.second {
			margin-top: 0;

			figure {
				&:nth-of-type(1) {
				}
				&:nth-of-type(2) {
				}
			}
		}

		&.third {
			margin-top: -6rem;
			figure {
				&:nth-of-type(2) {
				}
			}
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			&.first {
				justify-self: center;

				width: 25rem;
				figure {
					width: 25rem;
				}
			}

			&.second {
				width: 30rem;
				figure {
					width: 30rem;
					&:nth-of-type(1) {
						top: unset;

						bottom: -15rem;
					}
					&:nth-of-type(2) {
					}
				}
			}

			&.third {
				margin-top: unset;

				width: 25rem;
				figure {
					width: 25rem;
					&:nth-of-type(1) {
					}
					&:nth-of-type(2) {
						top: unset;
						bottom: -15rem;
					}
				}
			}
		}
	}
`
