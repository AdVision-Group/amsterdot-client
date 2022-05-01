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

	const transformBOUN = useTransform(scrollYProgress, [0.13, 0.32], [40, -150])
	const transformTIES = useTransform(scrollYProgress, [0.13, 0.32], [0, 100])

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
		},
		{
			logo: {
				href: "#",
				src: "/assets/bounty-section/acala-v2.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "EVM+ DApp for aUSD yield",
			description:
				"Build a DApp in the Acala EVM+ enabling users to earn yield with aUSD (money market, DEX, etc.)",
			issue: {
				href: "https://github.com/AcalaNetwork/AcalaBounties/issues/1",
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
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/basilisk-v2.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Arbitrage Bot for Basilisk",
			description:
				"Create an arbitrage bot that speculates on the price differences between 2 or more markets. The solution must be able to trade between Basilisk and any other Kusama parachain. There is a bonus bounty for CEX integration and another bonus for utilising the node's mempool.",
			issue: {
				href: "https://github.com/galacticcouncil/amsterdot-bounties-2022/issues/4",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $14,500",
			prize2: "in BSX",
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/astar.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Astar Native Wallet Solution",
			description:
				"Build a wallet that can manage various assets and view staking rewards from a single interface that is easy to use.",
			issue: {
				href: "https://github.com/AstarNetwork/AstarBounties/issues/1",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $14,000",
			prize2: "in USDC",
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/astar.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Token Bridge Contract Between WASM and EVM",
			description:
				"Build a bridge contract on both the WASM contract environment and EVM on the Shibuya test network that can transfer ERC20 (and PSP22) between two different account schemes (SS58 and H160) alongside a simple web-based wallet to manage and transfer from one token to another.",
			issue: {
				href: "https://github.com/AstarNetwork/AstarBounties/issues/3",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $14,000",
			prize2: "in USDC",
		},
		{
			logo: {
				href: "#",
				src: "/assets/bounty-section/acala-v2.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "EVM+ Substrate Pre-compiles",
			description:
				"Build a new pre-compile to expand the functionality of the Acala EVM+",
			issue: {
				href: "https://github.com/AcalaNetwork/AcalaBounties/issues/2",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $10,000",
			prize2: "in aUSD",
		},
		{
			logo: {
				href: "#",
				src: "/assets/bounty-section/acala-v2.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Cross-parachain DApp",
			description:
				"Build a cross-parachain DApp that interacts with multiple parachains on Polkadot or Kusama.",
			issue: {
				href: "https://github.com/AcalaNetwork/AcalaBounties/issues/3",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $10,000",
			prize2: "in aUSD",
		},
		{
			logo: {
				href: "#",
				src: "/assets/bounty-section/acala-v2.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Front-end, tools, or utility service",
			description:
				"Build a front-end, tool, or utility service for the Acala ecosystem.",
			issue: {
				href: "https://github.com/AcalaNetwork/AcalaBounties/issues/4",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $10,000",
			prize2: "in aUSD",
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/Interplay.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Vault Interface",
			description:
				"We have an interface for Vaults running on: https://kintsugi.interlay.io/. However, Vault operators might want to be able to have custom interfaces and see more information like current prices of Bitcoin, incoming oracle price changes, or see how they compare to other Vaults in terms of BTC locked. The idea for this challenge is to build a standalone dashboard for Vaults that operators can extend with their own information. You could do this as a browser-based interface, mobile interface, or terminal interface.",
			issue: {
				href: "https://github.com/interlay/bounties/issues/1",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $10,000",
			prize2: "in KINT / INTR",
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/Interplay.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Trading/Arbitrage Bots",
			description:
				"As with most DeFi systems, it's possible to make a profit by interacting with the Interlay/Kintsugi bridge. It’s possible to automate capturing these profits by using bots. The challenge here is to develop a bot that can capture profits by observing on and off-chain data and execute actions.",
			issue: {
				href: "https://github.com/interlay/bounties/issues/2",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $10,000",
			prize2: "in KINT / INTR",
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/Interplay.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Dashboard and System Information",
			description:
				"It's better to know what's going on. Bridges are complex and displaying all the information of the system health, how much asset are currently bridged, and if the system is secure is vital to understand for the community. We are looking for builders that can take our squid-powered dashboard to a new level.",
			issue: {
				href: "https://github.com/interlay/bounties/issues/3",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $10,000",
			prize2: "in KINT / INTR",
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/astar.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Astar Native Wallet Solution",
			description:
				"Build a marketplace for providing micro-rewards to artists for their artwork.",
			issue: {
				href: "https://github.com/AstarNetwork/AstarBounties/issues/2",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $10,000",
			prize2: "in USDC",
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/astar.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Liquid Staking Solution for dApps Staking",
			description:
				"Build a UI and smart contracts that allow the users to stake ASTR to earn dApp staking rewards while receiving Liquid ASTR to maintain full control of their staked tokens and use the value across Astar DeFi applications.",
			issue: {
				href: "https://github.com/AstarNetwork/AstarBounties/issues/4",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $7,000",
			prize2: "in USDC",
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/phala-network-logo-white.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Build Your Own DApp with Fat Contract",
			description:
				"In this challenge, you are going to build a fully functional DApp on Phala Confidential Cloud. A qualified DApp should be useful to solve some real-world problems or bring fun to people. It should also address the unique features of Phala (privacy-preserving, CPU extensive, or with HTTP requests)",
			issue: {
				href: "https://github.com/Phala-Network/amsterDOT-2022/issues/2",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $5,000",
			prize2: "in PHA",
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/Subsquid.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Karura DeFi Dashboard",
			description:
				"The winning team has to use Subsquid’s SDK to extract and process on-chain data, and then build a lightweight Web UI to access and display it.",
			issue: {
				href: "https://github.com/subsquid/community/issues/7",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "$3,000",
			prize2: "in USDT",
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/Moonbeam-Logo.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Build a DApp that Uses XCM",
			description:
				"XCM functionality was enabled on Moonriver by introducing the XC-20 standard, a Substrate-native asset that conforms to ERC-20 standards. xcKSM or KSM migrated from the Kusama Relay Chain, is the first XC-20 to launch on Moonriver and allows KSM to be harnessed in the growing DeFi ecosystem in Moonriver. xcKSM is already tradable on several decentralized exchanges. XC-20s look and behave like typical ERC-20s, which means that interacting with them is easy. However, before getting started, you should understand the fundamentals of how XCM works. In this challenge, build a project that harnesses XC-20s on Moonriver.",
			issue: {
				href: "https://github.com/PureStake/moonbeam-docs/issues/295",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "$2,000",
			prize2: "in USDT",
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/Moonbeam-Logo.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Launch a Cross-Chain Asset owned by a Smart Contract",
			description:
				"One of the first major applications of XCM on Moonbeam is sending and receiving assets from other parachains. But did you know Moonbeam also enables you to create your own custom cross-chain assets? The challenge is to create a custom cross-chain asset that is owned by a smart contract on Moonbase Alpha.",
			issue: {
				href: "https://github.com/PureStake/moonbeam-docs/issues/294",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "$1,000",
			prize2: "in USDT",
		},
		{
			logo: {
				href: "#",
				src: "/assets/partners-v2/logos/phala-network-logo-white.png",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Link your Github account to on-chain identity with HTTP Request",
			description:
				"In this challenge, you will experience how to use Fat Contract's HTTP request capability to associate a Phala account with a Github user. Such functionality serves as the core for Decentralized Identity (DID). Further, we will show how to deploy your contract in Phala Testnet and interact with it through our frontend SDK.",
			issue: {
				href: "https://github.com/Phala-Network/amsterDOT-2022/issues/1",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "< $1,500",
			prize2: "in PHA",
		},
		{
			logo: {
				href: "#",
				src: "/assets/Logo-bg.svg",
				alt: "hydra logo",
				width: 0,
				height: 0,
			},
			title: "Open Category",
			description:
				"Open to submissions of all projects which contribute to the Polkadot and/or Kusama ecosystems. Not based on a specific project bounty, however the submissions (via DoraHacks) are eligible for the distrinbution of the prize pool from Polkadot treasury.",
			issue: {
				href: "",
				label: "issue",
			},
			issueIcon: {
				src: "/assets/bounty-section/github-icon.svg",
				alt: "github icon",
				width: 0,
				height: 0,
			},
			prize: "??",
			prize2: "Shared prize pool",
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

					<Link href={"/#bounties"} passHref>
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
							<a href={i.logo.href} rel="noopener noreferrer" target="_blank">
								<LogoFigure>
									<Image
										src={i.logo.src}
										alt={i.logo.alt}
										layout="responsive"
										width={50}
										height={20}
										objectFit="contain"
										objectPosition={"left"}
									/>
								</LogoFigure>
							</a>
							<h3>{i.title}</h3>
							<p>{i.description}</p>
							<BountyBottomContainer>
								<BountyBottomFlexContainer>
									<a
										href={i.issue.href}
										rel="noopener noreferrer"
										target="_blank"
									>
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
									</a>
									<a
										href={i.issue.href}
										rel="noopener noreferrer"
										target="_blank"
									>
										{i.issue.label}
									</a>
								</BountyBottomFlexContainer>
								<BountyBottomFlexContainer>
									<BountyParagraph>{i.prize}</BountyParagraph>
									<EuroPrice>
										<span />
										<p>{i.prize2}</p>
										<span />
									</EuroPrice>
									{/* <CurrencyFigure>
										<Image
											src={i.currencyIcon.src}
											alt={i.currencyIcon.alt}
											layout="responsive"
											width={50}
											height={50}
											objectFit="contain"
										/>
									</CurrencyFigure> */}
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

const EuroPrice = styled.div`
	grid-column: 1/3;
	/* justify-self: end; */
	/* margin-left: 4rem; */
	text-align: center;
	display: flex;
	align-items: center;

	position: relative;

	p {
		color: #ddd;
		text-align: center;
		padding: 0 0.8rem;
	}

	span {
		display: block;
		width: 2rem;
		height: 0.2rem;
		background-color: #ddd;
	}

	/* &:before {
		position: absolute;
		content: "";
		background-color: #ddd;
		width: 2rem;
		height: 0.2rem;
		top: 50%;
		left: -2rem;
		transform: translateY(-50%);
	}

	&:after {
		position: absolute;
		content: "";
		background-color: #ddd;
		width: 2rem;
		height: 0.2rem;
		top: 50%;
		right: -2rem;
		transform: translateY(-50%);
	} */
`

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
	margin-top: -2rem;

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
	display: flex;
	flex-direction: column;

	h3 {
		font-weight: 900;
		color: ${({ theme }) => theme.color.primary};
		text-transform: uppercase;
		margin-bottom: 1.5rem;
	}

	p {
		line-height: 1.2;
		flex: 1;
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
	padding-right: 3rem;

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
`

const BountyParagraph = styled.p`
	grid-column: 1/3;

	color: ${({ theme }) => theme.color.primary};
	font-weight: 900;
	font-size: 2.5rem;
	text-align: center;
`

const LogoFigure = styled.figure`
	position: relative;
	max-width: 10rem;
	margin-bottom: 1rem;
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
	font-weight: 400;
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
