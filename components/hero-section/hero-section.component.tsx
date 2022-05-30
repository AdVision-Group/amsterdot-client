// Utils
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Image from "next/image"
import Link from "next/link"
import Button from "../button/button.component"

// Hooks
import { useToggle } from "react-use"

const HeroSection = () => {
	const partners = [
		{
			src: "/assets/partners-v2/logos/hdx.png",
			alt: "hydra logo",
			href: "https://hydradx.io/",
		},
		{
			src: "/assets/partners-v2/logos/basilisk-v2.png",
			alt: "basilisk logo",
			href: "https://bsx.fi/",
		},
		{
			src: "/assets/partners-v2/logos/logo-polkadot.png",
			alt: "polkadot logo",
			href: "https://polkadot.network/",
		},
		{
			src: "/assets/partners-v2/logos/acala-logo.png",
			alt: "acala network logo",
			href: "https://acala.network/",
		},
		{
			src: "/assets/partners-v2/logos/Interplay.png",
			alt: "interplay logo",
			href: "https://interplay.iterate.ai/",
			width: 30,
		},
		{
			src: "/assets/partners-v2/logos/Subsquid.png",
			alt: "subsquid logo",
			href: "https://www.subsquid.io/",
		},
		{
			src: "/assets/partners-v2/logos/Parity.png",
			alt: "parity logo",
			href: "https://www.parity.io/",
		},
		{
			src: "/assets/partners-v2/ORIGIN-TRAIL.png",
			alt: "origin trail logo",
			href: "https://origintrail.io/",
			width: 50,
		},
		{
			src: "/assets/partners-v2/logos/talisman-logo.png",
			alt: "talisman logo",
			href: "https://talisman.xyz/",
			width: 60,
		},
		{
			src: "/assets/partners-v2/logos/DFG.png",
			alt: "dfg logo",
			href: "https://www.dfg.group/",
			width: 60,
		},
		{
			src: "/assets/partners-v2/logos/Centrifuge.png",
			alt: "centrifuge logo",
			href: "https://centrifuge.io/",
			width: 60,
		},
		{
			src: "/assets/partners-v2/logos/Moonbeam-Logo.png",
			alt: "moonbeam logo",
			href: "https://moonbeam.network/",
		},
		{
			src: "/assets/partners-v2/logos/astar.png",
			alt: "astar logo",
			href: "https://astar.network/",
			width: 30,
			height: 40,
		},
		{
			src: "/assets/partners-v2/logos/phala-network-logo-white.png",
			alt: "phala network logo",
			href: "https://www.phala.network/en/",
			width: 70,
		},
	]

	return (
		<SectionContainer>
			<Link href={"/#hackaton-content"} passHref>
				<a>
					<ArrowContainer
					// animate={{
					// 	y: [0, -5, -10, -7, 0],
					// 	// scale: [1.2, 1, 0.9, 0.97, 1.2],
					// }}
					// transition={{
					// 	repeat: Infinity,
					// 	ease: "easeInOut",
					// 	duration: 10,
					// }}
					>
						<Image
							src={"/assets/arrow-container.svg"}
							alt="red circle"
							layout="responsive"
							width={100}
							height={100}
							objectFit="contain"
						/>
					</ArrowContainer>
				</a>
			</Link>
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
					{/* <PlayButtonContainer>
						<motion.figure
							whileHover={{
								scale: 1.1,
							}}
							whileDrag={{
								scale: 0.97,
							}}
							onClick={toggleModal}
						>
							<Image
								src={"/assets/hero-section/circle.svg"}
								alt={"circle"}
								width={80}
								height={80}
								objectFit="contain"
								layout="fill"
								className="circle"
							/>

							<Image
								src={"/assets/hero-section/center.svg"}
								alt={"center "}
								width={80}
								height={80}
								objectFit="contain"
								layout="fill"
								className="center"
							/>
						</motion.figure>
					</PlayButtonContainer> */}
					<HeadContainer>
						<h1>
							<span>ONLINE</span>
							<span>HACK</span>
						</h1>
						<p>
							Selected winners will be invited to present at{" "}
							<a
								href="https://decoded.polkadot.network/"
								rel="noopener noreferrer"
								target="_blank"
							>
								Polkadot Decoded (Berlin)
							</a>
						</p>
					</HeadContainer>
					<DateContainer>
						<p>
							<span>04/20</span>
							<span />
						</p>
						<p>
							<span />
							<span>06/20</span>
						</p>
						{/* <p>&nbsp;</p> */}
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
						<Link href={"/#hackaton-content"} passHref>
							<a>
								<Button>
									<span>$330k + COMBINED</span> <span>prize pool</span>
								</Button>
							</a>
						</Link>
						{/* <Link href={"/#bounties"} passHref>
							<a>
								<Button outline={"true"}>BOUNTIES</Button>
							</a>
						</Link> */}
					</ButtonsContainer>
					{/* <PlaceContainer>
						<p>IN AMSTERDAM / NETHERLANDS</p>
					</PlaceContainer> */}
				</ContentContainer>
				<PartnersContainer>
					{partners.map((partner, idx) => (
						<a
							key={idx}
							href={partner.href}
							rel="noopener noreferrer"
							target="_blank"
						>
							<motion.figure
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{
									scale: 0.97,
								}}
							>
								<Image
									src={partner.src}
									placeholder="blur"
									blurDataURL="data:image/webp;base64,UklGRoADAABXRUJQVlA4WAoAAAAgAAAAMgEAcAAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCBCAQAA8BMAnQEqMwFxAD7tcq9Sv7KuoqYV6rPwHYlpbt1gaSuAGK1SOgZXCQB+09c5Zv7sniqJ11Rxwb6giHHE70G1m28ifhTEbxgi82TUoOCwTCznCPb1IckV9jaEjcc/wv9uOFdmdFs7+FDOxs9D0DRVtom61OeNstP7gqHIOxoEDMGLZp2WvuIFyAVzyn/abVs2o6Jx5oskSUmNYp4t/Ch2ZXKprEp4t8UQAP7d/gaRycSxAF3HIB/ELSy8eiSWDiQzh/WXsXQItBPQugiG3ytAP1f+vQTSDtoX5+FXBj4lT30wo15TdqxxbBs9pA+bY+nlasVFK95VefsPMdSE/gHqBiVIe4df2Dxap3RkpTuffNtdvSzYxJxRQWf+RW7Jmh4H48fpJaX9UAcx3JDulb9bxilwGWFBmAFddJh7A3kHeQAAAA=="
									alt={partner.alt}
									width={partner.width || 80}
									height={partner.height || 40}
									objectFit="contain"
									layout="fixed"
								/>
							</motion.figure>
						</a>
					))}
				</PartnersContainer>
			</Container>
		</SectionContainer>
	)
}

export default HeroSection

const ArrowContainer = styled(motion.figure)`
	position: absolute;
	z-index: 111;

	width: 6rem;
	heigth: 6rem;
	bottom: -8rem;
	right: 3rem;
	/* display: none; */

	@media all and (max-height: 650px) {
		display: none;
	}
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		right: unset;
		left: 3rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: block;
			width: 8rem;
			heigth: 8rem;
			bottom: 0rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				bottom: 13rem;
			}
		}
	}
`

const PlayButtonContainer = styled.div`
	position: absolute;
	left: 1.5rem;
	top: 50%;
	z-index: 9;

	figure {
		cursor: pointer;
		position: relative;

		width: 8rem;
		height: 8rem;

		.circle {
			animation-name: rotation;
			animation-duration: 40s;
			animation-iteration-count: infinite;
			animation-timing-function: linear;
			/* animation-timing-function: ease; */
		}

		.center {
			padding: 2.5rem !important;
		}
	}

	@keyframes rotation {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		left: unset;
		right: 3rem;
	}
`

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
	position: relative;
	z-index: 99;
	flex: none;
	width: 100%;
	/* height: 100vh; */
	margin: 10rem 0;
	overflow: unset !important;
	overflow-x: hidden;

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
	margin: 6rem 3rem 0;
	max-width: 84rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 13rem 3rem 0;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin: 4rem 1.5rem 0;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				max-width: 130rem;
			}
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
		"h h"
		"i i"
		"b b";
	/* "p p"; */

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
		display: inline-block;
		font-family: "Avenir Next";
		line-height: 1.2;
		font-weight: 500;
		padding-bottom: 1rem;
		/* padding-right: 4rem; */
		span {
			display: block;
			font-size: 4.5rem;
		}

		@media all and (max-width: 355px) {
			span {
				font-size: 3.5rem;
			}
		}
	}

	p {
		/* margin-top: 2rem; */
		border-top: 1px solid #fff;
		padding-top: 2rem;
		margin-bottom: 2rem;

		font-size: 1.8rem;
		/* max-width: 31rem; */

		a {
			text-decoration: underline;
			color: #fff;
			font-weight: 700;
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		h1 {
			span {
				font-size: 8rem;
				line-height: 1.1;
			}
			border-bottom: 1px solid #fff;
		}
		p {
			border-top: unset;
			max-width: 31rem;
			margin-bottom: unset;
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
		width: 17rem;
		height: 23rem;
		/* margin-bottom: 4rem; */
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
			margin-right: 5rem;
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
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	grid-area: d;
	/* width: 100%; */
	max-width: 10rem;
	/* border: 1px solid green; */
	justify-self: end;
	font-size: 1.6rem;
	line-height: 1.1;
	text-align: center;
	margin-top: 0.7rem;

	p {
		font-family: "Avenir Next";
		font-weight: 900;
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
	p:nth-of-type(3) {
		/* border: 1px solid green; */
		font-size: 3.5rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		position: relative;
		top: 0;
		right: 0;

		p:nth-of-type(3) {
			/* border: 1px solid green; */
			/* font-size: 4.5rem; */
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
		position: absolute;
		display: flex;
		flex-direction: column;
		top: 65%;
		width: calc(100% - 3rem);
		font-family: "Avenir Next";

		font-size: 2rem;
		font-weight: 700;
		padding: 1rem 1rem 1rem;

		span {
			display: block;
			text-transform: uppercase;

			&:nth-of-type(2) {
				/* margin-left: 1rem; */
				font-weight: 900;
			}
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		/* flex-gap: 1rem; */
		/* align-items: end; */
		justify-content: flex-start;
		flex-wrap: unset;
		gap: 2rem;

		button {
			font-size: 2.5rem;
			line-height: 1;
			/* margin-bottom: 1rem; */
		}
		button:nth-of-type(1) {
			/* font-size: 2rem; */
			/* margin-right: 1rem; */
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			button {
				width: unset;
				position: relative;
				flex-direction: row;

				top: unset;
				font-weight: 400;
				/* font-size: 3rem; */
				padding: 1.8rem;

				span {
					display: block;
					text-transform: uppercase;

					&:nth-of-type(2) {
						margin-left: 1rem;
						font-weight: 900;
					}
				}
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

const PlaceContainer = styled.div`
	/* grid-area: p; */
	align-self: end;
	justify-self: end;
	text-align: right;

	p {
		font-family: "Acumin Variable Concept";
		font-weight: 300;
		line-height: 1;
		font-size: 1.5rem;
		margin-bottom: -0.3rem;
	}

	position: absolute;
	transform: rotate(-90deg);
	right: -10rem;
	bottom: 21rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		position: relative;
		transform: rotate(0deg);
		right: unset;
		bottom: unset;
		margin-right: -1rem;

		p {
			font-size: 1.6rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			/* justify-self: end; */

			p {
				font-size: 1.8rem;
			}
			/* margin-right: -12rem; */

			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				font-size: 2.5rem;
			}
		}
	}
`

const PartnersContainer = styled.div`
	position: relative;
	/* display: grid; */
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	/* justify-content: space-around;
	justify-content: center; */
	/* grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr)); */
	width: 100%;
	max-width: 36rem;
	margin-left: auto;
	gap: 1rem;
	margin-top: 2rem;
	padding-top: 0.5rem;
	border-top: 1px solid #fff;

	figure {
		/* border: 1px solid green; */
		/* width: 7rem; */
		max-width: 10rem;
		/* height: 3rem; */
		position: relative;
	}
	/* max-width: 30rem;
	width: 100%;
	margin: 0 auto;
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin: 0 0 0 auto;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
			max-width: 50rem;
		}
	} */
`
