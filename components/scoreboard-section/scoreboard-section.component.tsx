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
			number: 2,
			title: "FRONT-END, TOOLS, OR UTILITY SERVICE",
			teamName: "Team Name",
			score: "5 / 10",
			submission: "#",
			prizePool: "$15,000",
		},
		{
			number: 1,
			title: "FRONT-END, TOOLS, OR UTILITY SERVICE",
			teamName: "Team Name",
			score: "9 / 10",
			submission: "#",
			prizePool: "$15,000",
		},
		{
			number: 3,
			title: "FRONT-END, TOOLS, OR UTILITY SERVICE",
			teamName: "Team Name",
			score: "4 / 10",
			submission: "#",
			prizePool: "$15,000",
		},
		{
			number: 3,
			title: "FRONT-END, TOOLS, OR UTILITY SERVICE",
			teamName: "Team Name",
			score: "4 / 10",
			submission: "#",
			prizePool: "$15,000",
		},
		{
			number: 2,
			title: "FRONT-END, TOOLS, OR UTILITY SERVICE",
			teamName: "Team Name",
			score: "5 / 10",
			submission: "#",
			prizePool: "$15,000",
		},
		{
			number: 1,
			title: "FRONT-END, TOOLS, OR UTILITY SERVICE",
			teamName: "Team Name",
			score: "9 / 10",
			submission: "#",
			prizePool: "$15,000",
		},
		{
			number: 3,
			title: "FRONT-END, TOOLS, OR UTILITY SERVICE",
			teamName: "Team Name",
			score: "4 / 10",
			submission: "#",
			prizePool: "$15,000",
		},
		{
			number: 3,
			title: "FRONT-END, TOOLS, OR UTILITY SERVICE",
			teamName: "Team Name",
			score: "4 / 10",
			submission: "#",
			prizePool: "$15,000",
		},
		{
			number: 2,
			title: "FRONT-END, TOOLS, OR UTILITY SERVICE",
			teamName: "Team Name",
			score: "5 / 10",
			submission: "#",
			prizePool: "$15,000",
		},
		{
			number: 1,
			title: "FRONT-END, TOOLS, OR UTILITY SERVICE",
			teamName: "Team Name",
			score: "9 / 10",
			submission: "#",
			prizePool: "$15,000",
		},
		{
			number: 3,
			title: "FRONT-END, TOOLS, OR UTILITY SERVICE",
			teamName: "Team Name",
			score: "4 / 10",
			submission: "#",
			prizePool: "$15,000",
		},
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
	margin: 0 auto 5rem;
	border: 1px solid red;

	position: relative;
	color: ${({ theme }) => theme.fonts.primary};

	h3 {
		text-align: center;
		font-weight: 400;
		font-size: clamp(2.5rem, 4vw, 7rem);
	}
`
