// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Link from "next/link"
import Image from "next/image"

const PricepoolSection = () => {
	const { scrollYProgress } = useViewportScroll()

	const transformPRIZE = useTransform(scrollYProgress, [0.51, 0.73], [0, 250])
	const transformPOOL = useTransform(scrollYProgress, [0.51, 0.73], [50, -100])

	const bounties = [
		{
			logo: {
				src: "/assets/bounty-section/hydra-logo.svg",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "bountie #2 prize",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et risus a sapien pharetra tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare nibh et risus cursus sagittis. Cras",
			issue: {
				href: "#",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			pricepool: 500000,
			currencyIcon: {
				src: "/assets/bounty-section/polkadot-token.svg",
				alt: "polkadot",
				width: 0,
				height: 0,
			},
		},
		{
			logo: {
				src: "/assets/bounty-section/hydra-logo.svg",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "bountie #2 prize",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et risus a sapien pharetra tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare nibh et risus cursus sagittis. Cras",
			issue: {
				href: "#",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			pricepool: 500000,
			currencyIcon: {
				src: "/assets/bounty-section/polkadot-token.svg",
				alt: "polkadot",
				width: 0,
				height: 0,
			},
		},
		{
			logo: {
				src: "/assets/bounty-section/hydra-logo.svg",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "bountie #2 prize",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et risus a sapien pharetra tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare nibh et risus cursus sagittis. Cras",
			issue: {
				href: "#",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			pricepool: 500000,
			currencyIcon: {
				src: "/assets/bounty-section/polkadot-token.svg",
				alt: "polkadot",
				width: 0,
				height: 0,
			},
		},
		{
			logo: {
				src: "/assets/bounty-section/hydra-logo.svg",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "bountie #2 prize",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et risus a sapien pharetra tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare nibh et risus cursus sagittis. Cras",
			issue: {
				href: "#",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			pricepool: 500000,
			currencyIcon: {
				src: "/assets/bounty-section/polkadot-token.svg",
				alt: "polkadot",
				width: 0,
				height: 0,
			},
		},
		{
			logo: {
				src: "/assets/bounty-section/hydra-logo.svg",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "bountie #2 prize",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et risus a sapien pharetra tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare nibh et risus cursus sagittis. Cras",
			issue: {
				href: "#",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			pricepool: 500000,
			currencyIcon: {
				src: "/assets/bounty-section/polkadot-token.svg",
				alt: "polkadot",
				width: 0,
				height: 0,
			},
		},
		{
			logo: {
				src: "/assets/bounty-section/hydra-logo.svg",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "bountie #2 prize",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et risus a sapien pharetra tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare nibh et risus cursus sagittis. Cras",
			issue: {
				href: "#",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			pricepool: 500000,
			currencyIcon: {
				src: "/assets/bounty-section/polkadot-token.svg",
				alt: "polkadot",
				width: 0,
				height: 0,
			},
		},
	]

	return (
		<React.Fragment>
			<BountiesSectionContainer id="pricepool">
				<HeadingContainer>
					<Title
						style={{
							x: transformPRIZE,
						}}
						className="prize"
					>
						PRIZE
					</Title>
					<Title
						style={{
							x: transformPOOL,
						}}
						className="pool"
					>
						POOL
					</Title>
					<PoolFigure
						style={{
							x: transformPOOL,
						}}
						className="pool"
					>
						<Image
							src={"/assets/partners-v2/pool.svg"}
							alt={"pool"}
							layout="responsive"
							width={100}
							height={50}
						/>
					</PoolFigure>

					<Link href={"/#prize-pool"} passHref>
						<a
							style={{
								gridArea: "a",
								justifySelf: "end",
								alignSelf: "center",
							}}
						>
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
				</HeadingContainer>
			</BountiesSectionContainer>
			<BountiesSectionContainer>
				<PricepoolContainer id="prize-pool">
					<Container>
						<ContentContainer>
							<LogoFigure>
								<Image
									src={"/assets/bounty-section/logo-polkadot.svg"}
									alt={"hydra logo"}
									layout="responsive"
									width={50}
									height={20}
								/>
							</LogoFigure>
							<h2>Polkadot prize pool</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
								risus a sapien pharetra tristique. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Nulla ornare nibh et risus cursus
								sagittis. Cras molestie porttitor sem elementum varius. Sed
								tristique turpis ac viverra iaculis. Proin molestie mi libero,
								rutrum consequat arcu pharetra vitae.
							</p>

							<ContentBottomContainer>
								<p>$150k PRIZE POOL</p>
								<p>+ X WORTH OF TREASURY BOUNTIES</p>
							</ContentBottomContainer>
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
				</PricepoolContainer>
			</BountiesSectionContainer>
		</React.Fragment>
	)
}

export default PricepoolSection

const ContentContainer = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.background.container};
	padding: 1.5rem 1.5rem 1.5rem;
	margin-top: -3rem;
	/* width: 100%; */

	h2 {
		font-family: "Avenir Next";
		line-height: 1.5;
		font-weight: 900;
		font-size: 2rem;
		text-transform: uppercase;
		color: ${({ theme }) => theme.color.primary};
		/* margin-bottom: 0.5rem; */
	}

	p {
		font-size: 1.6rem;
		margin-bottom: 1rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		p {
			font-size: 1.7rem;
			margin-bottom: 2rem;
			max-width: 75rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: 3rem 3rem 3rem;

			h2 {
				font-size: 3.1rem;
				/* margin-top: 1rem; */
				/* margin-bottom: 2rem; */
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

const ContentBottomContainer = styled.div`
	margin-top: 2rem;
	p {
		margin: 0;
		text-align: end;

		&:nth-of-type(1) {
			font-size: 2.4rem;
			color: ${({ theme }) => theme.color.primary};
			font-weight: 900;
		}
		&:nth-of-type(2) {
			font-size: 1.6rem;
			font-weight: 700;
			/* color: ${({ theme }) => theme.color.primary}; */
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		p {
			margin: 0;
			text-align: end;

			&:nth-of-type(1) {
				font-size: 3.75rem;
				color: ${({ theme }) => theme.color.primary};
				font-weight: 900;
			}
			&:nth-of-type(2) {
				font-size: 2rem;
				font-weight: 700;
				/* color: ${({ theme }) => theme.color.primary}; */
			}
		}
	}
`

const AnimationContainer = styled(motion.figure)`
	position: absolute;
	z-index: -1;
	/* padding: 1.5rem; */
	width: 14rem;
	left: 6rem;
	top: -8rem;
	transform: rotate(90deg);

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		/* bottom: 13rem; */
		/* bottom: 0rem; */

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			left: 6rem;
			top: -12rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				width: 24rem;
				/* right: -6rem; */
				top: -18rem;
				left: 6rem;

				/* heigth: 20rem; */
			}
		}
	}
`

const Container = styled(motion.div)`
	position: relative;
	/* border: 1px solid green; */
	/* width: 100%; */
	/* margin: 25rem 1.5rem 0; */
	margin: 10rem 0 0 1.5rem;
	max-width: 90rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin: 16rem 1.5rem 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
			max-width: 130rem;
		}
	}
`

const ArrowContainer = styled(motion.figure)`
	width: 6rem;
	heigth: 6rem;
	/* cursor: pointer;s
	/* bottom: 5rem; */
	/* left: 3rem; */
	grid-area: a;
	align-self: center;
	/* display: none; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		/* display: block; */
		width: 8rem;
		heigth: 8rem;
		/* bottom: 6rem; */
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin-left: 6rem;
			/* width: 10rem;
			heigth: 10rem; */
			/* bottom: 25rem; */
		}
	}
`

const BountiesSectionContainer = styled.section`
	scroll-margin-top: 20rem;
	/* border: 1px solid yellow; */
	position: relative;
	color: ${({ theme }) => theme.fonts.primary};
	padding: 0rem 1.5rem;
	width: 100vw;
	display: flex;
	flex-direction: column;
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

const HeadingContainer = styled.div`
	/* scroll-padding-top: 8rem; */
	/* position: relative; */
	/* background-color: ${({ theme }) => theme.background.primary}; */
	/* overflow: hidden; */
	width: 100%;
	max-width: 90rem;
	margin: 0 auto;
	/* height: 100vh; */

	display: grid;
	grid-template-columns: 1fr auto;
	/* grid-template-columns: minmax(15rem, 25rem) auto; */
	/* grid-template-rows: auto auto auto; */
	gap: 1.5rem;
	grid-template-areas:
		"p p"
		"o a";

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const PricepoolContainer = styled.div`
	/* width: 100vw; */
	scroll-margin-top: 20rem;
	scroll-padding-top: 20rem;

	max-width: 130rem;
	margin: 0 auto;

	display: grid;
	grid-template-columns: 1fr;
	gap: 5%;

	margin-bottom: 10rem;
	margin-top: 3rem;

	/* @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: 1fr 1fr;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: 1fr 1fr 1fr;
		}
	} */
`

const BountyOverview = styled.div`
	background-color: ${({ theme }) => theme.background.container};
	padding: 1.5rem;

	h3 {
		font-weight: 900;
		color: ${({ theme }) => theme.color.primary};
		text-transform: uppercase;
	}

	p {
		line-height: 1.2;
	}
`

const BountyBottomContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 2rem;
`

const BountyBottomFlexContainer = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 3rem auto;
	grid-template-rows: auto auto;
	gap: 1rem;

	&:nth-of-type(2) {
		grid-template-columns: auto 3rem;
		text-align: end;
		justify-self: end;
	}

	a {
		color: #fff;
		font-size: 2.5rem;
		text-decoration: underline;
	}

	p {
		color: ${({ theme }) => theme.color.primary};
		font-weight: 900;
		font-size: 2.5rem;
	}
`

const LogoFigure = styled.figure`
	position: relative;
	max-width: 10rem;
`
const CurrencyFigure = styled.figure`
	position: relative;
	/* max-width: 10rem; */
`

const Title = styled(motion.h3)`
	position: relative;
	font-size: 7rem;
	font-weight: 500;
	line-height: 1;
	z-index: 3;

	&.price {
		grid-area: p;
	}
	&.pool {
		grid-area: o;
		text-align: center;
		z-index: 1;
		display: none;
	}
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 15rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				font-size: 22rem;
			}
		}
	}
`

const PoolFigure = styled(motion.figure)`
	position: relative;
	/* max-width: 10rem; */
	grid-area: o;
	text-align: center;
	z-index: 1;
	width: 20rem;
	justify-self: center;
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 15rem;
			width: 43rem;
			margin-top: -2.5rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				/* font-size: 22rem; */
				margin-top: -5rem;
				width: 62rem;
			}
		}
	}
`
