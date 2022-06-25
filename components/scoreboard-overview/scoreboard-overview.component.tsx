// Utils
import React from "react"
import styled from "styled-components"

// Components
import Image from "next/image"

interface IProps {
	number: number
	title: string
	teamName: string
	score: string
	submission: string
	prizePool: string
}

const ScoreboardOverview: React.FC<IProps> = ({
	number,
	title,
	teamName,
	score,
	submission,
	prizePool,
}) => {
	return (
		<ScoreboardOverviewContainer>
			<NumberContainer>#{number}</NumberContainer>
			<h2>{teamName}</h2>
			<h3>{title}</h3>
			<ScoreContainer>
				<p>{score}</p>
				<p>JURY VOTES</p>
			</ScoreContainer>
			<SubmissionContainer>
				<figure>
					<Image
						src="/assets/scoreboard-section/icon.svg"
						alt="submission icon"
						objectFit="contain"
						layout="fixed"
						width={20}
						height={20}
					/>
				</figure>
				<a href={submission}>submission</a>
			</SubmissionContainer>
			<PrizePoolContainer>
				<p>FROM SHARED PRIZE POOL</p>
				<p>{prizePool}</p>
			</PrizePoolContainer>
		</ScoreboardOverviewContainer>
	)
}

export default ScoreboardOverview

const ScoreboardOverviewContainer = styled.div`
	max-width: 37rem;
	padding: 0rem 1.5rem 2rem;
	background-color: ${({ theme }) => theme.background.container};

	h2 {
		color: ${({ theme }) => theme.color.primary};
		font-size: 2rem;
		font-weight: 400;
		text-transform: uppercase;
	}

	h3 {
		font-size: 1.6rem;
		font-weight: 900;
		text-transform: uppercase;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #707070;
	}
`

const NumberContainer = styled.div`
	margin-top: -4.5rem;
	margin-bottom: 2rem;
	background-color: ${({ theme }) => theme.color.primary};
	padding: 1rem 2rem;
	color: ${({ theme }) => theme.fonts.secondary};
	font-size: 7rem;
	font-weight: 900;
	line-height: 1;
	display: inline-block;
`

const ScoreContainer = styled.div`
	padding: 2rem 1.5rem;
	text-align: center;

	p {
		&:nth-of-type(1) {
			font-size: 5rem;
		}
		&:nth-of-type(2) {
			font-size: 2.2rem;
			font-weight: 900;
		}
	}
`

const SubmissionContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	margin-bottom: 1rem;

	a {
		display: block;
		color: ${({ theme }) => theme.fonts.primary};
		text-transform: uppercase;
		text-decoration: underline;
		margin-bottom: 0.4rem;
		font-size: 1.5rem;
		font-weight: 900;
	}
`

const PrizePoolContainer = styled.div`
	margin-top: 2rem;
	border: 1px solid ${({ theme }) => theme.color.primary};
	display: grid;
	grid-template-columns: 1fr 1fr;

	p {
		align-self: center;
		/* justify-self: center; */
		font-weight: 900;

		&:nth-child(1) {
			padding: 2rem 1.2rem;
			font-size: 1.7rem;
			font-weight: 400;
			border-right: 1px solid ${({ theme }) => theme.color.primary};
		}
		&:nth-child(2) {
			text-align: center;
			color: ${({ theme }) => theme.color.primary};
			font-size: 2.6rem;
		}
	}
`
