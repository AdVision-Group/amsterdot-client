// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Image from "next/image"
import Button from "../button/button.component"

const HeroSection = () => {
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

	return (
		<SectionContainer>
			<Container>
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
							src={"/assets/spinner.png"}
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
						<Image
							src={"/assets/tulipan-liquid.png"}
							alt="tulipan ilu"
							width={150}
							height={200}
							objectFit="contain"
						/>
					</ImageContainer>
					<ButtonsContainer>
						<Button>BUY TICKETS</Button>
						<Button outline>APPLY TO SPEAK</Button>
					</ButtonsContainer>
					<PlaceContainer>
						<p>IN AMSTERDAM / NETHERLANDS</p>
					</PlaceContainer>
				</ContentContainer>
				<PartnersContainer>
					<Image
						src={"/assets/partners/logaaa.png"}
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
	z-index: -1;
	right: -1rem;
	top: -3rem;
`

const SectionContainer = styled.section`
	flex: none;
	width: 100vw;
	height: 100vh;
	/* overflow: hidden; */

	display: flex;
	justify-content: center;
	align-items: center;

	color: ${({ theme }) => theme.fonts.primary};
`

const Container = styled.div`
	width: 100%;
	margin: 25rem 1.5rem 0;
	max-width: 100rem;
	/* margin: 0 auto; */
`

const ContentContainer = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.background.container};
	padding: 1.5rem;

	display: grid;
	grid-template-columns: 1fr auto;
	gap: 1rem;
	grid-template-rows: auto auto auto;
	grid-template-areas:
		"h d"
		"i i"
		"b b"
		"p p";
`
const HeadContainer = styled.div`
	grid-area: h;

	h1 {
		span {
			display: block;
			font-size: 4rem;
		}
	}
`

const ImageContainer = styled.figure`
	position: relative;
	grid-area: i;
	justify-self: center;
	/* border: 1px solid green; */
	margin-left: -2rem;
`

const DateContainer = styled.div`
	grid-area: d;
	width: 100%;
	max-width: 10rem;
	/* border: 1px solid green; */
	justify-self: end;
	font-size: 3rem;
	line-height: 1.1;
	text-align: center;

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
		font-size: 3.4rem;
	}
`
const ButtonsContainer = styled.div`
	grid-area: b;
	display: flex;
	flex-wrap: wrap;
	flex-gap: 1.5rem;
	align-items: center;
	justify-content: space-between;
`

const PlaceContainer = styled.div`
	grid-area: p;
	align-self: end;
	justify-self: end;
	text-align: right;
`

const PartnersContainer = styled.figure`
	position: relative;
	max-width: 30rem;
	margin-left: auto;
`
