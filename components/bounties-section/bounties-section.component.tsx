// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Link from "next/link"
import Image from "next/image"

const BountySection = () => {
	const { scrollYProgress } = useViewportScroll()

	// console.log(scrollYProgress)

	const transformBOUN = useTransform(scrollYProgress, [0.63, 0.89], [150, 0])
	const transformTIES = useTransform(scrollYProgress, [0.63, 0.89], [0, 100])

	const bounties = [
		{
			logo: {
				src: "/assets/bounty-section/hydra-logo.svg",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "bounty #2 prize",
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
			title: "bounty #2 prize",
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
			title: "bounty #2 prize",
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
			title: "bounty #2 prize",
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
			title: "bounty #2 prize",
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
			title: "bounty #2 prize",
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

	const format = (num: number, n: number = 0, x?: number) => {
		var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")"
		return num.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,")
	}

	return (
		<React.Fragment>
			<BountiesSectionContainer id="bounties-h">
				<HeadingContainer>
					{/* <Title
						style={{
							x: transformBOUN,
						}}
						className="boun"
					>
						BOUN
					</Title> */}
					<BOUNContainer
						style={{
							x: transformBOUN,
						}}
					>
						<Image
							src="/assets/bounty-section/boun.png"
							alt="work"
							objectFit="contain"
							layout="responsive"
							width={100}
							height={70}
						/>
					</BOUNContainer>
					<Title
						style={{
							x: transformTIES,
						}}
						className="ties"
					>
						TIES
					</Title>

					<Link href={"/#bounty"} passHref>
						<a
							style={{
								gridArea: "a",
								justifySelf: "center",
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
			<BountiesSectionContainer id="bounties">
				<BountiesDirectory>
					{bounties.map((i, idx) => (
						<BountyOverview key={idx}>
							<LogoFigure>
								<Image
									src={i.logo.src}
									alt={i.logo.alt}
									layout="responsive"
									width={50}
									height={20}
								/>
							</LogoFigure>
							<h3>{i.title}</h3>
							<p>{i.description}</p>
							<BountyBottomContainer>
								<BountyBottomFlexContainer>
									<IssueFigure>
										<Image
											src={i.issueIcon.src}
											alt={i.issueIcon.alt}
											layout="responsive"
											width={50}
											height={50}
											objectFit="contain"
										/>
									</IssueFigure>
									<a href={i.issue.href}>{i.issue.label}</a>
								</BountyBottomFlexContainer>
								<BountyBottomFlexContainer>
									<p>{format(i.pricepool / 100)}</p>
									<CurrencyFigure>
										<Image
											src={i.currencyIcon.src}
											alt={i.currencyIcon.alt}
											layout="responsive"
											width={50}
											height={50}
											objectFit="contain"
										/>
									</CurrencyFigure>
								</BountyBottomFlexContainer>
							</BountyBottomContainer>
						</BountyOverview>
					))}
				</BountiesDirectory>
			</BountiesSectionContainer>
		</React.Fragment>
	)
}

export default BountySection

const BOUNContainer = styled(motion.figure)`
	position: relative;
	grid-area: b;

	/* grid-area: w; */
	/* width: 16rem; */
	/* height: 5rem; */
	/* border: 1px solid green; */
	/* justify-self: end; */
	width: 18rem;
	margin-bottom: -4rem;
	/* border: 1px solid red; */
	margin-top: -4rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 22rem;
		margin-top: -3rem;
		margin-bottom: -5rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			width: 38rem;
			margin-bottom: -10rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				margin-top: -10rem;
				width: 68rem;
			}
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
	/* display: none; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		/* display: block; */
		width: 8rem;
		heigth: 8rem;
		/* bottom: 6rem; */
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin-right: unset;
			align-self: end;
			margin-left: 6rem;
			/* width: 10rem;
			heigth: 10rem; */
			/* bottom: 25rem; */
		}
	}
`

const BountiesSectionContainer = styled.section`
	/* border: 1px solid yellow; */
	scroll-margin-top: 10rem;

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
	width: 100vw;
	max-width: 90rem;
	margin: 0 auto 6rem;
	/* height: 100vh; */

	display: grid;
	grid-template-columns: auto auto;
	/* grid-template-columns: minmax(15rem, 25rem) auto; */
	/* grid-template-rows: auto auto auto; */
	gap: 1.5rem;
	grid-template-areas:
		"b b"
		"a t";

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const BountiesDirectory = styled.div`
	/* width: 100vw; */
	max-width: 130rem;
	scroll-margin-top: 20rem;
	margin: 0 auto;

	display: grid;
	grid-template-columns: 1fr;
	gap: 4rem;

	margin-bottom: 15rem;
	margin-top: 3rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: 1fr 1fr;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
`

const BountyOverview = styled.div`
	background-color: ${({ theme }) => theme.background.container};
	padding: 1.5rem;

	h3 {
		font-weight: 900;
		color: ${({ theme }) => theme.color.primary};
		text-transform: uppercase;
		margin-bottom: 1.5rem;
	}

	p {
		line-height: 1.2;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 1.5rem 3rem;
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

const IssueFigure = styled.figure`
	position: relative;
	/* max-width: 10rem; */
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

	&.boun {
		grid-area: b;
	}
	&.ties {
		grid-area: t;
		z-index: 1;
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
