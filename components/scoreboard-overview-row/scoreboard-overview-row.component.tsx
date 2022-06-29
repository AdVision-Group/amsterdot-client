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
	prizePool: string
}

const ScoreboardOverviewRow: React.FC<IProps> = ({
	number,
	title,
	teamName,
	score,
	submission,
	prizePool,
}) => {
	return (
		<ScoreboardOverviewRowContainer>
			<NumberContainer>#{number}</NumberContainer>
			<ContentContainer>
				<TeamContainer>
					{teamName.map((name, index) => (
						<h2 key={index}>
							{name}
							<span>,</span>
						</h2>
					))}
				</TeamContainer>
				<h3>{title}</h3>
			</ContentContainer>
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
		</ScoreboardOverviewRowContainer>
	)
}

export default ScoreboardOverviewRow

const ScoreboardOverviewRowContainer = styled.div`
	display: grid;
	background-color: ${({ theme }) => theme.background.container};
	padding: 0 2rem 2rem;
	gap: 1rem;
	grid-template-columns: auto 1fr;
	grid-template-areas:
		"n n"
		"c c"
		"s s"
		"u u"
		"p p";

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: repeat(2, 1fr);
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			grid-template-columns: auto 2fr 1fr;
			grid-template-areas:
				"n c s"
				"p p u";
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				grid-template-columns: auto 2fr auto 1fr 2fr;
				padding: 0 2rem 0;
				grid-template-areas: "n c s u p";
				gap: 2rem;
			}
		}
	}
`

const NumberContainer = styled.div`
	grid-area: n;
	margin-top: -2rem;
	margin-bottom: 2rem;
	background-color: ${({ theme }) => theme.color.primary};
	padding: 1.4rem 2rem 1rem;
	color: ${({ theme }) => theme.fonts.secondary};
	font-size: 7rem;
	font-weight: 900;
	line-height: 1;
	display: inline-block;
	align-self: start;
	justify-self: start;
`

const ContentContainer = styled.div`
	grid-area: c;
	align-self: center;
	padding: 0rem 0;

	h2 {
		color: ${({ theme }) => theme.color.primary};
		font-size: 2.5rem;
		font-weight: 400;
		font-family: "Pixel12x10";
		text-transform: uppercase;

		&:last-child {
			span {
				display: none;
			}
		}
	}

	h3 {
		font-size: 1.6rem;
		font-weight: 900;
		text-transform: uppercase;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			/* padding: 2rem 0 2rem 2rem; */
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				border-right: 1px solid #707070;
			}
		}
	}
`

const TeamContainer = styled.div`
	display: flex;
	/* gap: 1rem; */
	flex-wrap: wrap;
	margin-right: unset;

	h2 {
		&:not(:last-child) {
			margin-right: 1rem;
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				/* margin-right: 1rem; */
			}
		}
	}
`

const ScoreContainer = styled.div`
	grid-area: s;
	text-align: center;
	padding: 1rem 1.5rem;

	p {
		&:nth-of-type(1) {
			font-size: 4rem;
		}
		&:nth-of-type(2) {
			font-size: 1.8rem;
			font-weight: 900;
			color: #dddddd;
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: 2rem 1.5rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const SubmissionContainer = styled.div`
	grid-area: u;
	display: flex;
	align-items: center;
	align-self: center;
	gap: 1.5rem;
	justify-self: start;

	a {
		display: block;
		color: ${({ theme }) => theme.fonts.primary};
		text-transform: uppercase;
		text-decoration: underline;
		margin-bottom: 0.4rem;
		font-size: 1.5rem;
		font-weight: 900;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			justify-self: center;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const PrizePoolContainer = styled.div`
	grid-area: p;
	border: 1px solid ${({ theme }) => theme.color.primary};
	display: grid;
	align-self: center;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	max-width: unset;
	padding: 1.5rem 0;

	p {
		align-self: center;
		/* justify-self: center; */
		font-weight: 900;

		&:nth-child(1) {
			padding: 1rem 1.2rem;
			font-size: 1.5rem;
			font-weight: 400;
			border-right: 1px solid ${({ theme }) => theme.color.primary};
		}
		&:nth-child(2) {
			text-align: center;
			color: ${({ theme }) => theme.color.primary};
			font-size: 2.3rem;
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			max-width: 30rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				justify-self: center;
			}
		}
	}
`
