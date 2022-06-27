// Utils
import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Components
import Image from "next/image"
import ScoreboardOverview from "../scoreboard-overview/scoreboard-overview.component"
import ScoreboardOverviewRow from "../scoreboard-overview-row/scoreboard-overview-row.component"
import Button from "../button/button.component"

// Hooks
import { useToggle } from "react-use"

const ScoreboardSection: React.FC = () => {
	const [showContent, toggleContent] = useToggle(false)

	const items = [
		{
			number: 2,
			title: "KodaDot x BSX Marketplace",
			teamName: "Vikiival",
			score: "13 / 100",
			submission: "https://dorahacks.io/buidl/3055",
			prizePool: "$19,500",
		},
		{
			number: 1,
			title: "MORPH FOR ACALA, MORPH FOR BASILISK",
			teamName: "Ang",
			score: "16 / 100",
			submission: "https://dorahacks.io/buidl/3059",
			submission2: "https://dorahacks.io/buidl/3060",
			submissionLabel: "Submission #1 for Acala",
			submissionLabel2: "Submission #2 for Basilisk",
			prizePool: "$24,000",
		},
		{
			number: 3,
			title: "Kintsugi-X Blockchain analysis",
			teamName: "Mafux777",
			score: "11 / 100",
			submission: "https://dorahacks.io/buidl/3064",
			prizePool: "$16,500",
		},
		{
			number: 4,
			title: "Karura defi dashboard",
			teamName: "FC",
			score: "10 / 100",
			submission: "https://dorahacks.io/buidl/3076",
			prizePool: "$15,000",
		},
		{
			number: 5,
			title: "POLYWARS P2E",
			teamName: "xtools",
			score: "10 / 100",
			submission: "https://dorahacks.io/buidl/3011",
			prizePool: "$15,000",
		},
		{
			number: 6,
			title: "FOLIOS ASTAR BROWSER EXT",
			teamName: "shutanaka",
			score: "7 / 100",
			submission: "https://dorahacks.io/buidl/3069",
			prizePool: "$10,500",
		},
		{
			number: 7,
			title: "Karura Dash with Subsquid",
			teamName: "timbotro",
			score: "7 / 100",
			submission: "https://dorahacks.io/buidl/3065",
			prizePool: "$10,500",
		},
		{
			number: 8,
			title: "ACALA YIELD MANAGER",
			teamName: "Ang",
			score: "6 / 100",
			submission: "https://dorahacks.io/buidl/3073",
			prizePool: "$9,000",
		},
		{
			number: 9,
			title: "KINTSUGI VAULT RUNNER CLI",
			teamName: "timbotro",
			score: "6 / 100",
			submission: "https://dorahacks.io/buidl/2991",
			prizePool: "$9,000",
		},
		{
			number: 10,
			title: "INTERLAY PREMIUMBOT",
			teamName: "Kint0Sens",
			score: "6 / 100",
			submission: "https://dorahacks.io/buidl/3049",
			prizePool: "$9,000",
		},
		{
			number: 11,
			title: "PARACHAIN BLOG ENGINE",
			teamName: "PolkaHacks",
			score: "4 / 100",
			submission: "https://dorahacks.io/buidl/3067",
			prizePool: "$6,000",
		},
		{
			number: 12,
			title: "PHALA VOTING TEMPLATE",
			teamName: "marlowl",
			score: "3 / 100",
			submission: "https://dorahacks.io/buidl/2863",
			prizePool: "$4,500",
		},
		{
			number: 13,
			title: "INTERBTC VAULT CLI",
			teamName: "Kint0Sens",
			score: "1 / 100",
			submission: "https://dorahacks.io/buidl/3056",
			prizePool: "$1,500",
		},
		{
			number: 14,
			title: "OpenLand Land fractions",
			teamName: "slim12kg",
			score: "0 / 100",
			submission: "https://dorahacks.io/buidl/1845",
			prizePool: "$0",
		},
	]

	const jury = [
		{
			src: "/assets/partners-v2/logos/hdx.png",
			alt: "hydra logo",
			href: "https://hydradx.io/",
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
			width: 80,
		},
		{
			src: "/assets/partners-v2/logos/phala-network-logo-white.png",
			alt: "phala network logo",
			href: "https://www.phala.network/en/",
			width: 70,
		},
		{
			src: "/assets/partners-v2/logos/Subsquid.png",
			alt: "subsquid logo",
			href: "https://www.subsquid.io/",
			width: 90,
		},
		{
			src: "/assets/partners-v2/logos/astar.png",
			alt: "astar logo",
			href: "https://astar.network/",
			width: 40,
			// height: 30,
		},
		// {
		// 	src: "/assets/partners-v2/logos/talisman-logo.png",
		// 	alt: "talisman logo",
		// 	href: "https://talisman.xyz/",
		// 	width: 60,
		// },
		// {
		// 	src: "/assets/partners-v2/logos/Centrifuge.png",
		// 	alt: "centrifuge logo",
		// 	href: "https://centrifuge.io/",
		// 	width: 60,
		// },
		{
			src: "/assets/partners-v2/logos/Moonbeam-Logo.png",
			alt: "moonbeam logo",
			href: "https://moonbeam.network/",
		},
		// {
		// 	src: "/assets/partners-v2/logos/Parity.png",
		// 	alt: "parity logo",
		// 	href: "https://www.parity.io/",
		// },
	]

	return (
		<React.Fragment>
			<ScoreboardSectionContainer id="scoreboard">
				<TitleContainer>
					<figure>
						<Image
							src="/assets/scoreboard-section/scoreboard.svg"
							alt="photos"
							objectFit="contain"
							layout="responsive"
							width={50}
							height={15}
						/>
					</figure>
				</TitleContainer>

				<TopScoreboardDirectory>
					{items.slice(0, 3).map((item, index) => (
						<ScoreboardOverview key={index} {...item} />
					))}
				</TopScoreboardDirectory>

				<div style={{ position: "relative" }}>
					<AnimatePresence initial={false}>
						<ScoreboardDirectory
							id={"scoreboard-directory"}
							key={"scoreboard-directory"}
							initial="collapsed"
							animate={showContent ? "open" : "collapsed"}
							exit={"collapsed"}
							variants={{
								open: {
									display: "flex",
									opacity: 1,
									// height: width <= 858 ? "64rem" : "28rem",
									height: "auto",
								},
								collapsed: {
									opacity: 1,
									height: 200,
									transitionEnd: { opacity: 1 },
								},
							}}
							transition={{ duration: 0.8, ease: [0.04, 0.2, 0.23, 0.98] }}
						>
							{items.slice(3, items.length).map((item, index) => (
								<ScoreboardOverviewRow
									key={index}
									{...item}
									number={index + 4}
								/>
							))}
						</ScoreboardDirectory>
						{!showContent && <ScoreboardOverlay />}
					</AnimatePresence>
				</div>

				<CustomButton showContent={showContent} onClick={toggleContent}>
					{showContent ? "SHOW LESS" : "VIEW ALL"}
				</CustomButton>
			</ScoreboardSectionContainer>
			<JuryCompositionContainer>
				<h3>JURY COMPOSITION</h3>
				<PartnersContainer>
					{jury.map((partner, idx) => (
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
									width={partner.width || 120}
									height={60}
									objectFit="contain"
									layout="fixed"
								/>
							</motion.figure>
						</a>
					))}
				</PartnersContainer>
			</JuryCompositionContainer>
		</React.Fragment>
	)
}

export default ScoreboardSection

const ScoreboardSectionContainer = styled.div`
	padding: 0rem 1.5rem 2rem;
	scroll-margin-top: 10rem;
	max-width: 135rem;
	margin: 0 auto 5rem;
	overflow: hidden;

	position: relative;
	color: ${({ theme }) => theme.fonts.primary};
`

const TitleContainer = styled.div`
	margin-bottom: -10rem;
	max-width: 86rem;
	margin: 0 auto;
`

const TopScoreboardDirectory = styled.div`
	display: grid;
	justify-items: center;
	grid-template-columns: 1fr;
	gap: 10rem;
	margin-top: 5rem;

	.top {
		:nth-child(2) {
			grid-column: 1 / 2;
			grid-row: 1;
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: repeat(2, 1fr);
		.top {
			:nth-child(2) {
				grid-column: 1 / 3;
				grid-row: 1;
			}
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				gap: 2rem;
				grid-template-columns: repeat(3, 1fr);

				.top {
					:nth-child(2) {
						grid-column: unset;
						grid-row: unset;
						.score {
							padding: 5rem 1.5rem;
						}
					}
				}
			}
		}
	}
`

const ScoreboardDirectory = styled(motion.div)`
	position: relative;
	margin-top: 10rem;
	display: flex;
	flex-direction: column;
	gap: 8rem;
	/* 
	justify-items: center;
	grid-template-columns: 1fr;
	gap: 10rem;
	
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: repeat(2, 1fr);
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				gap: 2rem;
				grid-template-columns: repeat(3, 1fr);
			}
		}
	} */
`

const ScoreboardOverlay = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: -28rem;
	z-index: 9;

	/* border: 2px solid red; */

	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 1) 30%,
		rgba(255, 255, 255, 0) 100%
	);
`

const CustomButton = styled(Button)<{ showContent: boolean }>`
	position: relative;
	z-index: 9;
	margin: ${({ showContent }) => (showContent ? "5rem" : "18rem")} auto 0;
`

const JuryCompositionContainer = styled.div`
	padding: 0rem 1.5rem 2rem;
	scroll-margin-top: 10rem;
	max-width: 135rem;
	margin: 0 auto 10rem;
	/* border: 1px solid red; */

	position: relative;
	color: ${({ theme }) => theme.fonts.primary};

	h3 {
		text-align: center;
		font-weight: 400;
		font-size: clamp(2.5rem, 4vw, 7rem);
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
	/* max-width: 47rem; */
	margin: 0 auto;
	gap: 1.5rem;
	margin-top: 2rem;
	padding-top: 0.5rem;
	/* border-top: 1px solid #fff; */

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
