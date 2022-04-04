// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Link from "next/link"
import Image from "next/image"

const BountiesSection = () => {
	const { scrollYProgress } = useViewportScroll()

	console.log(scrollYProgress)

	const transformBOUN = useTransform(scrollYProgress, [0.22, 0.45], [0, 0])
	const transformTIES = useTransform(scrollYProgress, [0.22, 0.45], [0, 0])

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
		<BountiesSectionContainer>
			<HeadingContainer>
				<Title
					style={{
						x: transformBOUN,
					}}
					className="boun"
				>
					BOUN
				</Title>
				<Title
					style={{
						x: transformTIES,
					}}
					className="ties"
				>
					TIES
				</Title>

				<Link href={"/#day-1"} passHref>
					<a
						style={{
							justifySelf: "end",
							alignSelf: "end",
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
			<BountiesDirectory>
				{bounties.map((i, idx) => (
					<BountyOverview key={idx}>
						<figure>
							<Image
								src={i.logo.src}
								alt={i.logo.alt}
								layout="responsive"
								width={50}
								height={20}
							/>
						</figure>
						<h3>{i.title}</h3>
						<p>{i.description}</p>
						<div>
							<div>
								<figure>
									<Image
										src={i.issueIcon.src}
										alt={i.issueIcon.alt}
										layout="responsive"
										width={50}
										height={20}
									/>
								</figure>
								<a href={i.issue.href}>{i.issue.label}</a>
							</div>
							<div>
								<p>{i.pricepool}</p>
								<figure>
									<Image
										src={i.currencyIcon.src}
										alt={i.currencyIcon.alt}
										layout="responsive"
										width={50}
										height={20}
									/>
								</figure>
							</div>
						</div>
					</BountyOverview>
				))}
			</BountiesDirectory>
		</BountiesSectionContainer>
	)
}

export default BountiesSection

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
			align-self: end;
			margin-left: 6rem;
			width: 14rem;
			heigth: 14rem;
			/* bottom: 25rem; */
		}
	}
`

const BountiesSectionContainer = styled.section`
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
	width: 100vw;
	max-width: 90rem;
	margin: 0 auto;
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
	max-width: 90rem;
	margin: 0 auto;

	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;

	margin-bottom: 3rem;
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
