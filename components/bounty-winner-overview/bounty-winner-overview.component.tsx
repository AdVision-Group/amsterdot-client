// Utils
import React from "react"
import styled from "styled-components"

// Components
import Image from "../image/image.component"

interface IProps {
	logo: {
		href: string
		src: string
		alt: string
		width: number
		height: number
	}
	title: string
	description: string
	submissionIcon: {
		src: string
		alt: string
	}
	submissions: {
		link: string
		label: string
		price: string
		currency: string
	}[]

	winners: {
		label: string
		name: string
		members: {
			name: string
			avatar: {
				src: string
				alt: string
			}
		}[]
	}[]
}

const BountyWinnerOverview: React.FC<IProps> = ({
	logo,
	title,
	description,
	submissionIcon,
	submissions,
	winners,
}) => {
	return (
		<BountyOverview>
			<div>
				<LogoFigure>
					<Image
						src={logo.src}
						alt={logo.alt}
						effect="blur"
						style={{
							objectFit: "contain",
							objectPosition: "left",
						}}
						width={100}
						height={50}
					/>
				</LogoFigure>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<SubmissionsContainer>
					{submissions.map((submission, index) => (
						<Submission key={index}>
							<SubmissionContainer>
								<SIcon>
									<Image
										src={submissionIcon.src}
										alt={submissionIcon.alt}
										effect="blur"
										style={{
											objectFit: "contain",
										}}
										width={35}
										height={35}
									/>
								</SIcon>
								<p>{submission.label}</p>
							</SubmissionContainer>
							<PriceContainer>
								<Price>{submission.price}</Price>
								<Currency>{submission.currency}</Currency>
							</PriceContainer>
						</Submission>
					))}
				</SubmissionsContainer>
			</div>
			<WinnerContainer>
				{winners.map((winner, index) => (
					<Winner key={index}>
						<WinnerHeading>{winner.label}</WinnerHeading>
						<WinnerName>{winner.name}</WinnerName>

						{winner.members.map((member, index) => (
							<WinnerMember key={index}>
								<WinnerMemberAvatar>
									<Image
										src={member.avatar.src}
										alt={member.avatar.alt}
										effect="blur"
										style={{
											objectFit: "contain",
										}}
									/>
								</WinnerMemberAvatar>
								<WinnerMemberName>{member.name}</WinnerMemberName>
							</WinnerMember>
						))}
					</Winner>
				))}
			</WinnerContainer>
		</BountyOverview>
	)
}

export default BountyWinnerOverview

const BountyOverview = styled.div`
	background-color: ${({ theme }) => theme.background.container};
	padding: 1.5rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;

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
		/* width: 45%; */
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: 1fr 1fr;
		}
	}
`

const LogoFigure = styled.figure``

const Title = styled.h3``

const Description = styled.p``

const SubmissionsContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`

const Submission = styled.div`
	display: flex;
	justify-content: space-between;
`

const SubmissionContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	p {
		font-size: 1.5rem;
		text-transform: uppercase;
		text-decoration: underline;
		font-weight: 900;
	}
`

const SIcon = styled.div``

const PriceContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`

const Price = styled.p`
	font-size: 2.5rem;
	font-weight: 900;
`

const Currency = styled.p`
	font-size: 1.5rem;
`

const WinnerContainer = styled.div`
	border: 1px solid ${({ theme }) => theme.color.primary};
	padding: 2rem;
`

const Winner = styled.div``

const WinnerHeading = styled.h3`
	font-size: 1.8rem;
	border-bottom: 1px solid ${({ theme }) => theme.color.primary};
	padding-bottom: 1.5rem;
`

const WinnerName = styled.p`
	font-size: 1.5rem;
	font-weight: 900;
	margin-top: 2rem;
	margin-bottom: 1.5rem;
`

const WinnerMember = styled.div`
	display: flex;
	gap: 1.5rem;
	align-items: center;
`

const WinnerMemberAvatar = styled.div``

const WinnerMemberName = styled.p``
