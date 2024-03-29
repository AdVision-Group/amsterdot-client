// Utils
import React from "react"
import styled from "styled-components"
import { motion, useViewportScroll, useTransform } from "framer-motion"

// Components
// import Image from "next/image"
// import Link from "next/link"
import SpeakerOverview from "../speaker-overview/speaker-overview.component"

const SpeakersSection: React.FC = () => {
	const { scrollYProgress } = useViewportScroll()
	// const transformSPEA = useTransform(scrollYProgress, [0.68, 0.82], [0, 60])
	// const transformKERS = useTransform(scrollYProgress, [0.68, 0.82], [0, -40])

	const speakers = [
		{
			image: {
				src: "/assets/speakers-section/speaker-placeholder.png",
				alt: "speaker placeholder",
			},
			name: "John doe",
			logo: {
				src: "/assets/speakers-section/logo-placeholder.png",
				alt: "logo placeholder",
				// width: 0,
				// height: 0,
			},
			url: "https://www.google.com/",
		},
		{
			image: {
				src: "/assets/speakers-section/speaker-placeholder.png",
				alt: "speaker placeholder",
			},
			name: "John doe",
			logo: {
				src: "/assets/speakers-section/logo-placeholder.png",
				alt: "logo placeholder",
				// width: 0,
				// height: 0,
			},
			url: "https://www.google.com/",
		},
		{
			image: {
				src: "/assets/speakers-section/speaker-placeholder.png",
				alt: "speaker placeholder",
			},
			name: "John doe",
			logo: {
				src: "/assets/speakers-section/logo-placeholder.png",
				alt: "logo placeholder",
				// width: 0,
				// height: 0,
			},
			url: "https://www.google.com/",
		},
		{
			image: {
				src: "/assets/speakers-section/speaker-placeholder.png",
				alt: "speaker placeholder",
			},
			name: "John doe",
			logo: {
				src: "/assets/speakers-section/logo-placeholder.png",
				alt: "logo placeholder",
				// width: 0,
				// height: 0,
			},
			url: "https://www.google.com/",
		},
	]

	return (
		<SpeakersSectionContainer id="speakers">
			<TitleContainer>
				<h3>Speakers</h3>
				{/* <motion.figure
					style={{
						x: transformSPEA,
					}}
					className="spea"
				>
					<Image
						src="/assets/speakers-section/SPEA.svg"
						alt="spea"
						objectFit="contain"
						layout="responsive"
						width={50}
						height={25}
					/>
				</motion.figure>
				<Link href={"/#day-1"} passHref>
					<a className="arrow">
						<ArrowContainer
							animate={
								{
									// y: [0, -10, -5, -15, 0],
									// scale: [1.2, 1, 0.9, 0.97, 1.2],
								}
							}
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
				<motion.figure
					style={{
						x: transformKERS,
					}}
					className="kers"
				>
					<Image
						src="/assets/speakers-section/kers.svg"
						alt="kers"
						objectFit="contain"
						layout="responsive"
						width={50}
						height={25}
					/>
				</motion.figure> */}
			</TitleContainer>
			<SpeakersDirectory>
				{speakers.map(({ ...props }, idx) => (
					<SpeakerOverview key={idx} {...props} />
				))}
			</SpeakersDirectory>
		</SpeakersSectionContainer>
	)
}

export default SpeakersSection

const SpeakersDirectory = styled.div`
	display: grid;
	/* flex-wrap: wrap; */
	grid-template-columns: repeat(1, 1fr);
	/* justify-items: center; */
	/* gap: 1.5rem; */
	.speaker {
		border-bottom: 1px solid #707070;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: repeat(2, 1fr);

		.speaker {
			border-bottom: unset;

			&:nth-child(1),
			&:nth-child(2) {
				/* border-right: 0.5px solid #707070; */
				border-bottom: 1px solid #707070;
			}
			&:nth-child(2n) {
				border-left: 1px solid #707070;
				/* border-right: 1px solid #707070; */
				/* border-bottom: 1px solid #707070; */
			}
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			grid-template-columns: repeat(3, 1fr);
			.speaker {
				&:nth-child(2n) {
					border-left: unset;
					/* border-right: 1px solid #707070; */
					/* border-bottom: 1px solid #707070; */
				}

				&:nth-child(2) {
					border-left: 1px solid #707070;
					border-right: 1px solid #707070;
				}
				&:nth-child(1),
				&:nth-child(2),
				&:nth-child(3) {
					/* border-left: 0.5px solid #707070; */
					/* border-right: 1px solid #707070; */
					border-bottom: 1px solid #707070;
				}
			}
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				grid-template-columns: repeat(4, 1fr);
				.speaker {
					&:nth-child(2) {
						border-left: 1px solid #707070;
						border-right: 0.5px solid #707070;
					}
					&:nth-child(3) {
						border-left: 0.5px solid #707070;
						border-right: 1px solid #707070;
					}

					&:nth-child(1),
					&:nth-child(2),
					&:nth-child(3) {
						/* border-left: 0.5px solid #707070; */
						/* border-right: 1px solid #707070; */
						border-bottom: unset;
					}
				}
			}
		}
	}
`

const SpeakersSectionContainer = styled.section`
	padding: 0rem 1.5rem 2rem;
	scroll-margin-top: 10rem;
	max-width: 135rem;
	margin: 0 auto 0rem;

	position: relative;
	color: ${({ theme }) => theme.fonts.primary};
`

const TitleContainer = styled.div`
	/* margin-bottom: -10rem; */
	max-width: 86rem;
	margin: 4rem auto 2rem;

	/* display: grid;
	grid-template-columns: 14rem 1fr; */

	h3 {
		font-size: 6rem;
		font-weight: 400;
		text-transform: uppercase;
		text-align: center;
	}

	.spea {
		grid-column: 1/3;
		/* margin-bottom: -5rem; */
	}

	.arrow {
		align-self: center;
		justify-self: center;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		/* grid-template-columns: 23rem 1fr; */
		h3 {
			font-size: 8rem;
		}

		.spea {
			grid-column: 1/3;
			/* margin-bottom: -10rem; */
		}
	}
`

const ArrowContainer = styled(motion.figure)`
	cursor: pointer;
	grid-area: a;
	position: relative;
	z-index: 1;
	/* justify-self: end; */
	/* margin: 2rem 0; */

	width: 4rem;
	heigth: 4rem;
	/* bottom: 5rem; */
	/* left: 3rem; */
	/* display: none; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		/* display: block; */
		width: 8rem;
		heigth: 8rem;
		/* bottom: 6rem; */
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			/* align-self: end; */
			/* margin-left: 6rem; */
			/* bottom: 25rem; */
		}
	}
`
