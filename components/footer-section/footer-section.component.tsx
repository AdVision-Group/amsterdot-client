// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Image from "next/image"
import ImageComponent from "../image/image.component"

interface IProps {
	transformSEERange: number[]
	transformYOURange: number[]
	transformTHERERange: number[]
	transformYEARRange: number[]
}

const FooterSection: React.FC<IProps> = ({
	transformSEERange,
	transformYOURange,
	transformTHERERange,
	transformYEARRange,
}) => {
	const { scrollYProgress } = useViewportScroll()

	// const transformWatermarkOpacity = useTransform(
	// 	scrollYProgress,
	// 	[0, 0.95, 1, 1],
	// 	[1, 1, 1, 1]
	// )

	const transformSEE = useTransform(
		scrollYProgress,
		transformSEERange,
		[100, 0]
	)
	const transformYOU = useTransform(
		scrollYProgress,
		transformYOURange,
		[-50, 0]
	)
	const transformTHERE = useTransform(
		scrollYProgress,
		transformTHERERange,
		[80, 0]
	)
	const transformYEAR = useTransform(
		scrollYProgress,
		transformYEARRange,
		[-70, 0]
	)

	return (
		<EventSectionContainer>
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
					className="next"
				>
					NEXT
				</Title>
				<Title
					style={{
						x: transformYEAR,
					}}
					className="year"
				>
					<span>YEAR</span>
					<figure>
						<ImageComponent
							src="/assets/2023.svg"
							alt="2222"
							height={"85%"}
							effect="blur"
							style={{
								objectFit: "contain",
							}}
						/>
					</figure>
				</Title>
				<ImagesContainer>
					<ImageContainer className="first">
						<figure>
							<ImageComponent
								src={"/assets/footer/2.png"}
								alt="place 4"
								width={"100%"}
								effect="blur"
								style={{
									objectFit: "contain",
								}}
							/>
						</figure>
					</ImageContainer>
					<ImageContainer className="second">
						<figure>
							<ImageComponent
								src={"/assets/footer/3.png"}
								alt="place 4"
								width={"100%"}
								effect="blur"
								style={{
									objectFit: "contain",
								}}
							/>
						</figure>
					</ImageContainer>
					<ImageContainer className="third">
						<figure>
							<ImageComponent
								src={"/assets/footer/4.png"}
								alt="place 3"
								width={"100%"}
								effect="blur"
								style={{
									objectFit: "contain",
								}}
							/>
						</figure>
					</ImageContainer>
					<ImageContainer className="fourth">
						<figure>
							<ImageComponent
								src={"/assets/footer/1.png"}
								alt="place"
								// height={100}
								width={"100%"}
								effect="blur"
								style={{
									objectFit: "contain",
								}}
							/>
						</figure>
					</ImageContainer>
				</ImagesContainer>
			</Container>
		</EventSectionContainer>
	)
}

export default FooterSection

const EventSectionContainer = styled.section`
	/* border: 1px solid yellow; */
	position: relative;
	color: ${({ theme }) => theme.fonts.primary};
	padding: 0rem 1.5rem 5rem;
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
	position: relative;
	display: grid;
	grid-template-columns: auto auto;
	grid-template-areas:
		"s s"
		"u u"
		"n n"
		"t t";

	width: 100%;
	max-width: 90rem;
	margin: 0 auto;

	&:before {
		content: "";
		background-color: ${({ theme }) => theme.background.container};
		position: absolute;
		width: 90%;
		height: 80%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-areas:
			"s s"
			"u u"
			"n n"
			"t t";
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			/* width: unset;
			max-width: unset; */
			/* background-color: red; */
			/* grid-template-areas:
				"s f f"
				"i u u"
				"n n d"
				"t t t"; */
		}
	}
`

const ImagesContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	/* border: 1px solid red; */
	width: 100%;
	height: 100%;

	max-width: 90rem;
	/* margin: 0 auto; */
	left: 50%;
	transform: translateX(-50%);

	display: grid;
	grid-template-columns: auto auto;
	gap: 1.5rem;
	grid-template-areas:
		"o f"
		"o f"
		"s t"
		"s t";
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
		justify-self: end;
	}
	&.next {
		grid-area: n;
	}
	&.year {
		justify-self: end;
		grid-area: t;

		display: grid;
		grid-template-columns: 1fr 9rem;

		span {
			text-align: end;
		}

		figure {
			position: relative;
			width: 100%;
			height: 50%;
		}
	}
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 10rem;

		&.see {
		}
		&.you {
			/* justify-self: end; */
		}
		&.next {
		}
		&.year {
			figure {
				position: relative;
				width: 100%;
				height: 62%;
			}
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 15rem;

			&.see {
			}
			&.you {
				/* justify-self: start; */
			}
			&.next {
			}
			&.year {
				justify-self: end;
				/* margin-left: -4rem; */
				figure {
					position: relative;
					width: 100%;
					height: 90%;
				}
			}
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				font-size: 17rem;

				&.year {
					justify-self: end;
					/* margin-left: -4rem; */
					figure {
						position: relative;
						width: 100%;
						height: unset;
					}
				}
			}
		}
	}
`

const ImageContainer = styled(motion.div)`
	&.first {
		grid-area: f;
		position: relative;
		max-width: 20rem;
		max-height: 20rem;
		justify-self: center;
	}

	&.second {
		grid-area: s;
		position: relative;
		max-width: 20rem;
		max-height: 20rem;
		justify-self: center;
	}

	&.third {
		grid-area: t;
		position: relative;
		max-width: 20rem;
		max-height: 20rem;
		justify-self: center;
		margin-top: -4rem;
	}

	&.fourth {
		grid-area: o;
		position: relative;
		max-width: 20rem;
		max-height: 20rem;
		justify-self: center;
		margin-top: 6rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		&.first {
			max-width: 35rem;
			margin-top: 4rem;
		}

		&.second {
			justify-self: end;
			max-width: 30rem;
		}

		&.third {
			max-width: 30rem;
			margin-top: -8rem;
		}

		&.fourth {
			max-width: 40rem;
			max-height: 30rem;
			margin-top: 8rem;
		}
	}
	/* &.first {
	}

	&.second {
	}

	&.third {
	}

	&.fourth {
	} */
`
