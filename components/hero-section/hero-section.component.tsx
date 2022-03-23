// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Image from "next/image"
import { Parallax } from "react-scroll-parallax"

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
	const { scrollYProgress } = useViewportScroll()

	const transformOpacity = useTransform(
		scrollYProgress,
		[0, 0.28, 0.72, 1],
		[1, 0, 0, 0]
	)

	const transformYAM = useTransform(
		scrollYProgress,
		[0, 0.28, 0.72, 1],
		[0, -400, 0, -1000]
	)
	const transformYST = useTransform(
		scrollYProgress,
		[0, 0.28, 0.72, 1],
		[0, 700, 0, -1000]
	)
	const transformYER = useTransform(
		scrollYProgress,
		[0, 0.28, 0.72, 1],
		[0, -600, 0, -1000]
	)

	console.log(transformOpacity)

	return (
		<SectionContainer>
			<Container
				style={{
					opacity: transformOpacity,
				}}
			>
				{/* <Parallax
				translateX={["-300px", "300px"]}
				// translateY={["0px", "100px"]}
			> */}
				<WatermarkLetters
					style={{
						x: transformYAM,

						opacity: transformOpacity,
					}}
					className="am"
				>
					AM
				</WatermarkLetters>
				{/* </Parallax> */}
				{/* <Parallax */}
				{/* translateX={["0px", "300px"]} */}
				{/* // translateY={["0px", "100px"]} */}
				{/* > */}
				<WatermarkLetters
					style={{
						x: transformYST,

						opacity: transformOpacity,
					}}
					className="st"
				>
					ST
				</WatermarkLetters>
				{/* </Parallax> */}
				{/* <Parallax */}
				{/* // translateX={["0px", "400px"]} */}
				{/* translateY={["0px", "-200px"]} */}
				{/* > */}
				<WatermarkLetters
					style={{
						x: transformYER,

						opacity: transformOpacity,
					}}
					className="er"
				>
					ER
				</WatermarkLetters>
				{/* </Parallax> */}
				<Content>
					<GridContainer>
						<SpinnerContainer
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
								placeholder="blur"
								alt={"spinner "}
								width={80}
								height={80}
								objectFit="contain"
							/>
						</SpinnerContainer>
						<ContentContainer>
							<h1>
								<span>CONF</span>
								<span>HACK</span>
							</h1>
							<ButtonsContainer>
								<button>BUY TICKETS</button>
								<button>APPLY TO SPEAK</button>
							</ButtonsContainer>
						</ContentContainer>
						<ImageContainer>
							<figure>
								<Image
									src={"/assets/animation-ilu.gif"}
									width={250}
									height={250}
									alt={"rose ilu"}
									layout="fixed"
									objectFit="cover"
								/>
							</figure>
							<figure>
								<Image
									src={"/assets/rose-ilu.png"}
									width={120}
									height={400}
									alt={"rose ilu"}
									layout="fixed"
									objectFit="contain"
								/>
							</figure>
						</ImageContainer>
						<DateContainer>
							<DaysContainer>
								<p>20</p>
								<p>23</p>
							</DaysContainer>
							<DateCircle />
							<MonthContainer>
								<p>APRIL</p>
								<p>2022</p>
							</MonthContainer>
						</DateContainer>
						<Parallax
							translateX={["-200px", "0px"]}
							translateY={["0px", "-100px"]}
						>
							<PlaceP>IN AMSTERDAM / NETHRELANDS</PlaceP>
						</Parallax>
					</GridContainer>
				</Content>
				<Partners>
					<PartnersFlexContainer>
						<figure>
							<Image
								width={300}
								height={100}
								src={"/assets/partners/logaaa.png"}
								alt={"partners logos"}
								objectFit="contain"
							/>
						</figure>
					</PartnersFlexContainer>
				</Partners>
			</Container>
		</SectionContainer>
	)
}

export default HeroSection

const WatermarkLetters = styled(motion.h2)`
	position: absolute;
	font-size: 45rem;
	font-weight: 300;
	z-index: -2;

	&.am {
		bottom: 10rem;
		left: -15rem;
	}
	&.st {
		bottom: -25rem;
		left: 60rem;
	}
	&.er {
		bottom: -30rem;
		left: -10rem;
	}
`

const SectionContainer = styled.section`
	flex: none;
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
	overflow-x: hidden;
	overflow-y: hidden;

	color: #fff;

	background-color: ${({ theme }) => theme.background.primary};
`

const SpinnerContainer = styled(motion.figure)`
	position: absolute;
	top: -4rem;
	right: -4rem;
	z-index: -1;
`

const Container = styled(motion.article)`
	position: relative;
	max-width: 80rem;
	width: 100%;
	z-index: 10;
	/* min-height: 60rem; */
	/* border: 1px solid green; */
`
const Content = styled.div`
	background-color: ${({ theme }) => theme.color.primary};

	h1 {
		font-size: 8.8rem;
		font-weight: 400;
		line-height: 1;

		span {
			display: block;
		}
	}
`

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	z-index: 2;

	button {
		display: block;
		background-color: #000;
		color: #fff;
		padding: 1rem 1.5rem;
		border: none;
		font-size: 1.8rem;

		&:nth-of-type(2) {
			margin-right: -10rem;
		}
	}
`

const GridContainer = styled.div`
	position: relative;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 1.5rem;
`

const PlaceP = styled.p`
	position: absolute;
	bottom: -5rem;
	right: -15rem;
	font-size: 2.5rem;
	width: 40rem;
`

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const DateContainer = styled.div`
	max-width: 20rem;
	width: 100%;
	/* justify-self: start; */
	margin-left: auto;
	/* align-self: flex-end; */
`

const DateCircle = styled.div`
	width: 100%;
	border: 1px solid #fff;
	border-radius: 50%;
	height: 1.5rem;
`

const DaysContainer = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 3rem;
`
const MonthContainer = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 3rem;
`

const Partners = styled.div`
	position: absolute;
	right: 0;
`

const ImageContainer = styled.div`
	position: relative;
	margin-left: auto;

	figure:nth-of-type(1) {
		position: absolute;
		right: 50%;
		left: 10%;
		transform: translate(-160%, 30%);
		/* border-radius: 50%; */
		/* overflow: hidden; */
		/*top: 20rem; */
		/* width: 30rem; */
		/* height: 30rem; */
		/* border: 10px solid blue; */

		img {
			position: absolute;
			border-radius: 50%;
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
`

const PartnersFlexContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-self: flex-end;
	max-width: 30rem;
	/* border-top: 3px solid #fff; */
	margin-top: 1rem;
	figure {
		/* border: 1px solid blue; */
	}
`
