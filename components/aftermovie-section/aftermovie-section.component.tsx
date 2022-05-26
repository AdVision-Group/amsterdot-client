// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Image from "next/image"

const AftermovieSection: React.FC = () => {
	const { scrollYProgress } = useViewportScroll()

	const transformAFTER = useTransform(scrollYProgress, [0.58, 0.68], [-70, 0])
	const transformMOVIE = useTransform(scrollYProgress, [0.58, 0.68], [70, 0])

	return (
		<AftermovieSectionContainer id="after-movie">
			<div>
				<Title>
					<Figure
						style={{
							x: transformAFTER,
						}}
					>
						<Image
							src="/assets/aftermovie-section/movie_02.svg"
							alt="work"
							objectFit="contain"
							layout="responsive"
							width={50}
							height={25}
						/>
					</Figure>
					<Figure
						style={{
							x: transformMOVIE,
						}}
					>
						<Image
							src="/assets/aftermovie-section/after_02.svg"
							alt="work"
							objectFit="contain"
							layout="responsive"
							width={50}
							height={25}
						/>
					</Figure>
				</Title>
			</div>
			<VideoContainer>
				<iframe
					// width="560"
					// height="315"
					src="https://www.youtube.com/embed/Avjw3IBPEMQ"
					// title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</VideoContainer>
		</AftermovieSectionContainer>
	)
}

export default AftermovieSection

const AftermovieSectionContainer = styled.section`
	padding: 8rem 1.5rem 2rem;
	scroll-margin-top: 10rem;
	max-width: 200rem;
	margin: 0 auto 10rem;

	position: relative;
	color: ${({ theme }) => theme.fonts.primary};
`

const VideoContainer = styled(motion.div)`
	position: relative;
	/* background-color: ${({ theme }) => theme.background.container}; */
	width: 100%;
	/* border: 1px solid green; */
	max-width: 80rem;
	aspect-ratio: 4/3;
	margin: 0 auto;

	iframe {
		width: 100%;
		height: 100%;
		/* border: 1px solid green; */
		max-width: 80rem;
		/* height: 30rem; */
	}
`

const Title = styled(motion.h3)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	text-align: center;
	position: relative;
	text-transform: uppercase;
	font-size: 7rem;
	font-weight: 400;
	line-height: 1;
	z-index: 3;
	margin-bottom: 2rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 14.5rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				/* font-size: 22rem; */
			}
		}
	}
`

const Span = styled(motion.span)`
	justify-self: end;
	align-self: center;
`

const Figure = styled(motion.figure)`
	&:nth-of-type(2) {
		/* margin-top: -3rem; */
	}
`
