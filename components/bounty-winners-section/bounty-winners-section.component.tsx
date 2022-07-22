// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Link from "next/link"
import Image from "next/image"
import BountyWinnerOverview from "../bounty-winner-overview/bounty-winner-overview.component"

const BountyWinnersSection = () => {
	const { scrollYProgress } = useViewportScroll()
	const transformWINNERS = useTransform(scrollYProgress, [0.54, 0.9], [0, 60])
	const transformBOUNTIES = useTransform(scrollYProgress, [0.54, 0.9], [0, -40])

	const bounties = [
		{
			logo: {
				href: "#",
				src: "/assets/bounty-section/hydra-logo.svg",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Cross chain transfer SDK",
			description:
				"Create SDK for sending XCM transactions for polkadot parachains.",
			issue: {
				href: "https://github.com/galacticcouncil/amsterdot-bounties-2022/issues/2",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $25,000",
			prize2: "in HDX / BSX",
			winner: {
				name: "TEAM ALFA",
				logo: {
					href: "#",
					src: "/assets/partners-v2/logos/basilisk-v2.png",
					alt: "hydra logo",
					width: 0,
					height: 0,
				},
			},
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/basilisk-v2.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "UI for an NFT marketplace in Basilisk",
			description:
				"The objective is to use a middleware to index and process historical node data and to build a user interface for the NFT infrastructure and its trading functionality we have built as set of Substrate pallets.",
			issue: {
				href: "https://github.com/galacticcouncil/amsterdot-bounties-2022/issues/3",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $25,000",
			prize2: "in BSX",
			winner: {
				name: "TEAM ALFA",
				logo: {
					href: "#",
					src: "/assets/partners-v2/logos/basilisk-v2.png",
					alt: "hydra logo",
					width: 0,
					height: 0,
				},
			},
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/basilisk-v2.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "UI for NFT auctions in Basilisk",
			description:
				"Create a UI (incl middleware) which interacts with the NFT auctions pallet in Basilisk-node. The pallet supports 3 auction types: English auctions (highest bidder wins), TopUp auctions (used for charity purposes) and Candle auctions.",
			issue: {
				href: "https://github.com/galacticcouncil/amsterdot-bounties-2022/issues/1",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $20,000",
			prize2: "in BSX",
			winner: {
				name: "TEAM ALFA",
				logo: {
					href: "#",
					src: "/assets/partners-v2/logos/basilisk-v2.png",
					alt: "hydra logo",
					width: 0,
					height: 0,
				},
			},
		},
		{
			logo: {
				url: "#",
				src: "/assets/bounty-section/acala-v2.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "EVM+ DApp for aUSD yield",
			description:
				"Build a DApp in the Acala EVM+ enabling users to earn yield with aUSD (money market, DEX, etc.)",
			issue: {
				url: "https://github.com/AcalaNetwork/AcalaBounties/issues/1",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $20,000",
			prize2: "in aUSD",
			winner: {
				name: "TEAM ALFA",
				logo: {
					href: "#",
					src: "/assets/partners-v2/logos/basilisk-v2.png",
					alt: "hydra logo",
					width: 0,
					height: 0,
				},
			},
		},
	]

	return (
		<BountyWinnersSectionContainer>
			<TitleContainer>
				<motion.figure
					style={{
						x: transformWINNERS,
					}}
					className="winners"
				>
					<Image
						src="/assets/bounty-winners/WINNERS.svg"
						alt="kers"
						objectFit="contain"
						layout="responsive"
						width={50}
						height={25}
					/>
				</motion.figure>
				{/* <h2 className="winners">Winners</h2> */}
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
						x: transformBOUNTIES,
					}}
					className="of-bounties"
				>
					<Image
						src="/assets/bounty-winners/bounties.svg"
						alt="kers"
						objectFit="contain"
						layout="responsive"
						width={50}
						height={25}
					/>
				</motion.figure>
			</TitleContainer>

			<BountiesDirectory>
				{bounties.map((bounty, idx) => (
					<BountyWinnerOverview key={idx} {...bounty} />
				))}
			</BountiesDirectory>
		</BountyWinnersSectionContainer>
	)
}

export default BountyWinnersSection

const BountiesDirectory = styled.div`
	width: 100%;
	/* max-width: 130rem; */

	margin: 0 auto;

	display: grid;
	grid-template-columns: 1fr;
	gap: 4rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-top: 0rem;
		grid-template-columns: 1fr 1fr;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin-top: -5rem;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
`

const BountyWinnersSectionContainer = styled.section`
	padding: 0rem 1.5rem 2rem;
	scroll-margin-top: 10rem;
	max-width: 135rem;
	margin: 0 auto 10rem;

	position: relative;
	color: ${({ theme }) => theme.fonts.primary};
`

const TitleContainer = styled.div`
	margin-bottom: -10rem;
	max-width: 86rem;
	margin: 0 auto;

	display: grid;
	grid-template-columns: 1fr 10rem;

	.winners {
		/* font-size: 10rem;
		font-weight: 400;
		grid-column: 1/2; */
		margin-bottom: -5rem;
		/* text-transform: uppercase; */
	}

	.arrow {
		align-self: center;
		justify-self: center;
	}

	.of-bounties {
		grid-column: 1/3;
		margin-top: -2rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		.of-bounties {
			margin-top: 0rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			grid-template-columns: 1fr 23rem;

			.winners {
				/* grid-column: 1/3; */
				margin-bottom: -18rem;
			}

			.of-bounties {
				grid-column: 1/3;
			}
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
	margin-bottom: -10rem;

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
			margin-top: 10rem;
			margin-bottom: -8rem;

			/* align-self: end; */
			/* margin-left: 6rem; */
			/* bottom: 25rem; */
		}
	}
`
