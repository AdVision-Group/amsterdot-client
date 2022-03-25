// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Image from "next/image"
import Button from "../button/button.component"

const HeroSection = () => {
	const { scrollYProgress } = useViewportScroll()

	const partners = [
		{
			src: "/assets/partners/logo-polkadot.png",
			alt: "polkadot logo",
		},
		{
			src: "/assets/partners/hydra.png",
			alt: "hydra logo",
		},
		{
			src: "/assets/partners/basilisk.png",
			alt: "basilisk logo",
		},
		{
			src: "/assets/partners/talisman-logo.png",
			alt: "talisman logo",
		},
		{
			src: "/assets/partners/moonbeam.png",
			alt: "moonbeam logo",
		},
		{
			src: "/assets/partners/parallel.png",
			alt: "parallel logo",
		},
		{
			src: "/assets/partners/subsquid.png",
			alt: "subsquid logo",
		},
		{
			src: "/assets/partners/acala-network.png",
			alt: "acala network logo",
		},
		{
			src: "/assets/partners/astar.png",
			alt: "astar logo",
		},
	]

	const transformWatermarkOpacity = useTransform(
		scrollYProgress,
		[0, 0.28, 0.72, 1],
		[1, 0, 0, 0]
	)

	const transformX = useTransform(
		scrollYProgress,
		[0, 0.28, 0.72, 1],
		[0, -500, 0, -1000]
	)

	return (
		<SectionContainer>
			<Container
			// style={{
			// 	y: transformX,
			// }}
			>
				<ContentContainer>
					<AnimationContainer
						animate={{
							rotate: [0, 0, 270, 270, 0],
						}}
						transition={{
							repeat: Infinity,
							duration: 20,
						}}
					>
						<Image
							src={"/assets/partners/spinner-v2.svg"}
							alt={"spinner "}
							width={80}
							height={80}
							objectFit="contain"
						/>
					</AnimationContainer>
					<HeadContainer>
						<h1>
							<span>CONF</span>
							<span>HACK</span>
						</h1>
					</HeadContainer>
					<DateContainer>
						<p>
							<span>20</span>
							<span />
						</p>
						<p>
							<span />
							<span>23</span>
						</p>
						<p>APRIL</p>
						<p>2022</p>
					</DateContainer>
					<ImageContainer>
						<figure>
							<Image
								src={"/assets/talisman-logo.svg"}
								placeholder="blur"
								blurDataURL="data:image/webp;base64,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"
								alt="tulipan ilu"
								width={150}
								height={200}
								objectFit="contain"
								layout="responsive"
							/>
						</figure>
					</ImageContainer>
					<ButtonsContainer>
						<a
							href="https://www.eventbrite.com/e/amsterdot-tickets-303713895437"
							rel="noopener noreferrer"
						>
							<Button>BUY TICKETS</Button>
						</a>
						<a
							href="https://xkmlgcptw4h.typeform.com/to/eNdSewiY"
							rel="noopener noreferrer"
						>
							<Button outline={true}>APPLY TO SPEAK</Button>
						</a>
					</ButtonsContainer>
					<PlaceContainer>
						<p>IN AMSTERDAM / NETHERLANDS</p>
					</PlaceContainer>
				</ContentContainer>
				<PartnersContainer>
					<Image
						src={"/assets/partners/logaaa-v2.svg"}
						placeholder="blur"
						blurDataURL="data:image/webp;base64,UklGRoADAABXRUJQVlA4WAoAAAAgAAAAMgEAcAAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCBCAQAA8BMAnQEqMwFxAD7tcq9Sv7KuoqYV6rPwHYlpbt1gaSuAGK1SOgZXCQB+09c5Zv7sniqJ11Rxwb6giHHE70G1m28ifhTEbxgi82TUoOCwTCznCPb1IckV9jaEjcc/wv9uOFdmdFs7+FDOxs9D0DRVtom61OeNstP7gqHIOxoEDMGLZp2WvuIFyAVzyn/abVs2o6Jx5oskSUmNYp4t/Ch2ZXKprEp4t8UQAP7d/gaRycSxAF3HIB/ELSy8eiSWDiQzh/WXsXQItBPQugiG3ytAP1f+vQTSDtoX5+FXBj4lT30wo15TdqxxbBs9pA+bY+nlasVFK95VefsPMdSE/gHqBiVIe4df2Dxap3RkpTuffNtdvSzYxJxRQWf+RW7Jmh4H48fpJaX9UAcx3JDulb9bxilwGWFBmAFddJh7A3kHeQAAAA=="
						alt="partners logo"
						width={100}
						height={50}
						objectFit="contain"
						layout="responsive"
					/>
				</PartnersContainer>
			</Container>
		</SectionContainer>
	)
}

export default HeroSection

const AnimationContainer = styled(motion.figure)`
	position: absolute;
	display: flex;
	justify-conter: center;
	align-items: center;

	z-index: -1;
	right: -1rem;
	top: -4rem;
	@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		right: -4rem;
		top: -4rem;
	}
`

const SectionContainer = styled.section`
	flex: none;
	width: 100%;
	height: 100vh;
	/* overflow: hidden; */

	display: flex;
	justify-content: center;

	color: ${({ theme }) => theme.fonts.primary};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
		align-items: center;
	}
`

const Container = styled(motion.div)`
	width: 100%;
	/* margin: 25rem 1.5rem 0; */
	margin: 9rem 1.5rem 0;
	max-width: 90rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin: 11rem 1.5rem 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
			max-width: 130rem;
		}
	}
`

const ContentContainer = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.background.container};
	padding: 1.5rem;

	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr auto;
	grid-template-rows: auto auto auto;
	grid-template-areas:
		"h d"
		"i i"
		"b b"
		"p p";

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: auto 1fr 10rem;
		grid-template-rows: auto auto;
		grid-template-areas:
			"h h i d d"
			"b b i p p";
		min-height: 45rem;
		padding: 2rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 3rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				min-height: 65rem;
			}
		}
	}
`
const HeadContainer = styled.div`
	grid-area: h;

	h1 {
		font-family: "Avenir Next";
		line-height: 1.2;
		font-weight: 500;
		span {
			display: block;
			font-size: 4.5rem;
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		h1 {
			span {
				font-size: 8rem;
				line-height: 1.1;
			}
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
			h1 {
				span {
					font-size: 15rem;
				}
			}
		}
	}
`

const ImageContainer = styled.figure`
	position: relative;
	grid-area: i;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	justify-content: center;
	margin-left: -2rem;
	figure {
		position: relative;
		width: 25rem;
		height: 30rem;
		margin-bottom: 4rem;
		/* border: 1px solid green; */
	}
	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		align-items: end;
		justify-self: end;
		figure {
			position: relative;
			width: 25rem;
			height: 30rem;
			margin-bottom: 4rem;
			margin-right: -5rem;
			/* border: 1px solid green; */
		}
		/* width: 25rem; */
		@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
			figure {
				width: 46rem;
				height: 60rem;
				margin-bottom: 4rem;
				margin-right: -10rem;
				/* border: 1px solid green; */
			}
		}
	}
`

const DateContainer = styled.div`
	grid-area: d;
	/* width: 100%; */
	max-width: 10rem;
	/* border: 1px solid green; */
	justify-self: end;
	font-size: 2.2rem;
	line-height: 1.1;
	text-align: center;

	p {
		font-family: "Avenir Next";
		font-weight: 700;
	}

	p:nth-of-type(1) {
		/* border: 1px solid green; */
		display: flex;
		align-items: center;

		span {
			display: block;

			&:nth-of-type(2) {
				width: 100%;
				height: 0.3rem;
				background-color: ${({ theme }) => theme.fonts.primary};
				margin-left: 1.5rem;
			}
		}
	}

	p:nth-of-type(2) {
		/* border: 1px solid green; */
		display: flex;
		align-items: center;

		span {
			display: block;

			&:nth-of-type(1) {
				width: 100%;
				height: 0.3rem;
				background-color: ${({ theme }) => theme.fonts.primary};
				margin-right: 1.5rem;
			}
		}
	}
	p:nth-of-type(4) {
		/* border: 1px solid green; */
		font-size: 2.5rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		p:nth-of-type(3) {
			/* border: 1px solid green; */
			font-size: 2.8rem;
		}
		p:nth-of-type(4) {
			/* border: 1px solid green; */
			font-size: 3.3rem;
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
			/* width: 100%; */
			max-width: 15rem;
			p {
				font-size: 4.4rem;
			}
			p:nth-of-type(4) {
				font-size: 5.2rem;
			}
		}
	}
`
const ButtonsContainer = styled.div`
	grid-area: b;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	align-self: end;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	/* margin: 2rem 0; */

	button {
		font-size: 1.5rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		/* flex-gap: 1rem; */
		/* align-items: end; */
		justify-content: flex-start;
		flex-wrap: unset;
		gap: 2rem;

		button {
			font-family: "Avenir Next";
			font-weight: 400;
			font-size: 2rem;
			line-height: 1;
			/* margin-bottom: 1rem; */
		}
		button:nth-of-type(1) {
			/* font-size: 2rem; */
			/* margin-right: 1rem; */
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
			button {
				font-size: 3rem;
				padding: 1.8rem 4rem 1.5rem;
			}
		}
	}
`

const PlaceContainer = styled.div`
	/* grid-area: p; */
	align-self: end;
	justify-self: end;
	text-align: right;

	p {
		font-family: "Acumin Variable Concept";
		font-weight: 300;
		line-height: 1;
		margin-bottom: -0.3rem;
	}

	position: absolute;
	transform: rotate(-90deg);
	right: -10rem;
	bottom: 25rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		position: relative;
		transform: rotate(0deg);
		right: unset;
		bottom: unset;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			/* margin-right: -12rem; */
			font-size: 1.8rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				font-size: 2.5rem;
			}
		}
	}
`

const PartnersContainer = styled.figure`
	position: relative;
	max-width: 30rem;
	width: 100%;
	margin: 0 auto;
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin: 0 0 0 auto;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
			max-width: 50rem;
		}
	}
`
