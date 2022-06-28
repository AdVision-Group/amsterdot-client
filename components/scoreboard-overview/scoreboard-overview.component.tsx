// Utils
import React from "react"
import styled from "styled-components"

// Components
import Image from "next/image"

interface IProps {
	number: number
	title: string
	teamName: string[]
	score: string
	submission: string
	submission2?: string
	submissionLabel?: string
	submissionLabel2?: string
	prizePool: string
}

const ScoreboardOverview: React.FC<IProps> = ({
	number,
	title,
	teamName,
	score,
	submission,
	prizePool,
	submission2,
	submissionLabel,
	submissionLabel2,
}) => {
	return (
		<ScoreboardOverviewContainer className="top">
			<NumberContainer>#{number}</NumberContainer>
			{teamName.map((name, index) => (
				<h2 key={index}>{name}</h2>
			))}
			<h3>{title}</h3>
			<ScoreContainer className="score">
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
				<a rel="noopener noreferrer" target="_blank" href={submission}>
					{submissionLabel ? submissionLabel : "submission"}
				</a>
			</SubmissionContainer>
			{submission2 && (
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
					<a rel="noopener noreferrer" target="_blank" href={submission}>
						{submissionLabel2}
					</a>
				</SubmissionContainer>
			)}
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
	align-self: end;

	h2 {
		color: ${({ theme }) => theme.color.primary};
		font-size: 3.5rem;
		font-weight: 400;
		text-transform: uppercase;
		font-family: "Pixel12x10";
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
	padding: 1.4rem 2rem 1rem;
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
	padding: 1.5rem 0;
	border: 1px solid ${({ theme }) => theme.color.primary};
	display: grid;
	grid-template-columns: 1fr 1fr;

	p {
		align-self: center;
		/* justify-self: center; */
		font-weight: 900;

		&:nth-child(1) {
			padding: 1rem 1.2rem;
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
