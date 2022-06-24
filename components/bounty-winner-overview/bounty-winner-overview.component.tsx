// Utils
import React from "react"
import styled from "styled-components"

// Components
import Image from "next/image"

interface IProps {
	logo: {
		src: string
		alt: string
		width: number
		height: number
		url?: string
	}
	title: string
	description: string
	issue: {
		url?: string
		label: string
	}
	issueIcon: {
		src: string
		alt: string
	}
	prize: string
	prize2: string
	winner?: {
		name: string
		logo: {
			src: string
			alt: string
			width: number
			height: number
			url?: string
		}
	}
}

const BountyWinnerOverview: React.FC<IProps> = ({
	logo,
	title,
	description,
	issue,
	issueIcon,
	prize,
	prize2,
	winner,
}) => {
	return (
		<BountyOverview>
			<a href={logo.url} rel="noopener noreferrer" target="_blank">
				<LogoFigure>
					<Image
						src={logo.src}
						alt={logo.alt}
						layout="responsive"
						width={50}
						height={20}
						objectFit="contain"
						objectPosition={"left"}
					/>
				</LogoFigure>
			</a>
			<h3>{title}</h3>
			<p>{description}</p>
			<BountyBottomContainer>
				<BountyBottomFlexContainer>
					<a href={issue.url} rel="noopener noreferrer" target="_blank">
						<IssueFigure>
							<Image
								src={issueIcon.src}
								alt={issueIcon.alt}
								layout="responsive"
								width={50}
								height={50}
								objectFit="contain"
							/>
						</IssueFigure>
					</a>
					<a href={issue.url} rel="noopener noreferrer" target="_blank">
						{issue.label}
					</a>
				</BountyBottomFlexContainer>
				<BountyBottomFlexContainer>
					<BountyParagraph>{prize}</BountyParagraph>
					<EuroPrice>
						<span />
						<p>{prize2}</p>
						<span />
					</EuroPrice>
				</BountyBottomFlexContainer>
			</BountyBottomContainer>

			{winner && (
				<WinnerContainer>
					<p>WINNER</p>
					<WinnerLogoContainer>
						<figure>
							<Image
								src={winner.logo.src}
								alt={winner.logo.alt}
								layout="responsive"
								width={50}
								height={20}
								objectFit="contain"
								objectPosition={"left"}
							/>
						</figure>
						<p>{winner.name}</p>
					</WinnerLogoContainer>
				</WinnerContainer>
			)}
		</BountyOverview>
	)
}

export default BountyWinnerOverview

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
`

const WinnerContainer = styled.div`
	margin-top: 2rem;
	border: 1px solid ${({ theme }) => theme.color.primary};
	display: grid;
	grid-template-columns: 2fr 3fr;

	p {
		align-self: center;
		/* justify-self: center; */
		font-weight: 900;

		&:nth-child(1) {
			padding: 2rem 1.5rem;
			text-align: center;
			font-size: 2.2rem;
			color: ${({ theme }) => theme.color.primary};
			border-right: 1px solid ${({ theme }) => theme.color.primary};
		}
	}
`

const WinnerLogoContainer = styled.div`
	justify-self: center;
	padding: 1rem 2rem;
	font-size: 2rem;
	figure {
		max-width: 7rem;
	}
`
