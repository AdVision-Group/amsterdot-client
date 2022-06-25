// Utils
import React from "react"
import styled from "styled-components"

// Components
import Image from "next/image"
import ScoreboardOverview from "../scoreboard-overview/scoreboard-overview.component"
import ScoreboardOverviewRow from "../scoreboard-overview-row/scoreboard-overview-row.component"

const ScoreboardSection: React.FC = () => {
	const items = [
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
		<ScoreboardSectionContainer>
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

			<ScoreboardDirectory>
				{items.slice(3, items.length).map((item, index) => (
					<ScoreboardOverviewRow key={index} {...item} number={index + 4} />
				))}
			</ScoreboardDirectory>
		</ScoreboardSectionContainer>
	)
}

export default ScoreboardSection

const ScoreboardSectionContainer = styled.div`
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
`

const TopScoreboardDirectory = styled.div`
	display: grid;
	justify-items: center;
	grid-template-columns: 1fr;
	gap: 10rem;
	margin-top: 5rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: repeat(2, 1fr);
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				gap: 2rem;
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}
`

const ScoreboardDirectory = styled.div`
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
