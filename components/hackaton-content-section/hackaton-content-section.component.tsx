// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Image from "next/image"
import Link from "next/link"
import Button from "../button/button.component"

const HackatonContentSection = () => {
	return (
		<React.Fragment>
			<SectionContainer id="hackaton-content">
				<Container
				// style={{
				// 	opacity: transformOpacity,
				// }}
				>
					<IluContainer>
						<figure>
							<Image
								src="/assets/anim-v2.gif"
								alt="conf ilu"
								objectFit="cover"
								layout="responsive"
								width={100}
								height={50}
							/>
						</figure>
					</IluContainer>
					<LabelContainer>
						<p>amsterDOT 2022</p>
					</LabelContainer>
					<ContentContainer>
						<h2>Online Dotsama hackathon, open to anyone</h2>

						<DateContainer>
							<DateContent>
								<figure>
									<Image
										src={"/assets/hackaton-section/rocket.svg"}
										alt={"rocket ilu"}
										width={40}
										height={40}
										layout="responsive"
									/>
								</figure>
								<h3>20.04.22</h3>
							</DateContent>
							<Line />
							<DateContent>
								<figure>
									<Image
										src={"/assets/hackaton-section/chess.svg"}
										alt={"chess ilu"}
										width={40}
										height={40}
										layout="responsive"
									/>
								</figure>
								<h3>20.06.22</h3>
							</DateContent>
						</DateContainer>

						<h3>Rewards: $330,000+ from bounties and shared prize pool</h3>
						<h3>
							Registration: Via{" "}
							<a
								target="_blank"
								href="https://dorahacks.io/hackathon/22/detail"
								rel="noopener noreferrer"
							>
								DoraHacks
							</a>
						</h3>
						<h3>
							Submission guidelines: Can differ (see Github issue of the bounty)
						</h3>
						<h3>
							Also submit via DoraHacks to participate in the distribution of
							the prize pool
						</h3>
						<h3>Include a short description and a 5-min video</h3>
						<h3>Bounty rewards are distributed by the teams that own them</h3>
						<h3>
							Shared prize pool is distributed by a jury from the sponsoring
							teams using quadratic voting
						</h3>

						<FlexContainer>
							<ContentBottomContainer>
								<p>$190,000+ BOUNTIES</p>
								<p>by leading projects from the Polkadot & Kusama ecosystem</p>
							</ContentBottomContainer>
							<ContentBottomContainer>
								<p>+ $150,000 PRIZE POOL</p>
								<p>by Polkadot Treasury</p>
							</ContentBottomContainer>
						</FlexContainer>
					</ContentContainer>
				</Container>
			</SectionContainer>
		</React.Fragment>
	)
}

export default HackatonContentSection

const SectionContainer = styled.section`
	scroll-margin-top: 20rem;
	position: relative;
	flex: none;
	width: 100%;
	z-index: 99;
	/* height: 100vh; */
	/* overflow: hidden; */
	margin: 5rem 0 10rem;
	overflow: unset !important;
	overflow-x: hidden;
	display: flex;
	justify-content: center;

	color: ${({ theme }) => theme.fonts.primary};
	/* border: 1px solid yellow; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin: 20rem 0 10rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin: 12rem 0 10rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				align-items: center;
			}
		}
	}
`

const Container = styled(motion.div)`
	position: relative;
	width: 100%;
	margin: 0 1.5rem 0 1.5rem;
	max-width: 90rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin: 0rem 1.5rem 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
			max-width: 130rem;
		}
	}
`

const IluContainer = styled.div`
	/* grid-area: i; */
	right: -1rem;
	top: 10rem;
	position: absolute;
	width: 40rem;
	/* border: 1px solid green; */
	/* margin: 6rem 0rem 0rem; */
	/* width: 18rem;
	height: 26rem;

	margin-top: -5rem;
	margin-bottom: 5rem;

	figure {
		width: 18rem;
		height: 25rem;
		&:nth-of-type(1) {
			position: absolute;
			z-index: 1;
			bottom: -2rem;
			right: -5rem;
		}
		&:nth-of-type(2) {
			width: 15rem;
			position: absolute;
			bottom: 0;
		}
	} */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		right: -3rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			top: 0;
			/* margin-top: 0rem; */
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				/* width: 48rem;
				margin-top: -8rem;

				figure {
					width: 30rem;

					&:nth-of-type(1) {
						top: -12.5rem;
						right: -3rem;
					}
					&:nth-of-type(2) {
						right: 12rem;
						width: 22rem;
						bottom: 0;
					}
				} */
			}
		}
	}
`

const DateContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 55rem;
	margin: 3rem auto 7rem;

	figure {
		position: relative;
		width: 10rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		/* font-size: 3.2rem; */
		margin: 0 auto 7rem;
	}
`

const DateContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	h3 {
		bottom: -4rem;
		position: absolute;
		padding-top: 0.5rem;
		font-family: "Avenir Next";
		line-height: 1.5;
		font-weight: 900 !important;
		font-size: 2rem !important;
	}
`

const Line = styled.div`
	flex-grow: 1;
	height: 0.9rem;
	/* background-color: green; */
	background: linear-gradient(
		90deg,
		rgba(255, 0, 140, 1) 0%,
		rgba(39, 39, 39, 1) 50%
	);
	/* margin-bottom: 3.9rem; */
`

const LabelContainer = styled.div`
	position: relative;
	z-index: 1;
	background-color: ${({ theme }) => theme.color.primary};
	padding: 0.8rem 1.8rem 0.5rem;
	display: inline-block;
	margin-left: 1.5rem;
	color: ${({ theme }) => theme.fonts.primary};
	text-transform: uppercase;
	font-weight: 500;
	font-size: 2.5rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-left: 3rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 3.2rem;
		}
	}
`

const ContentContainer = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.background.container};
	padding: 4rem 1.5rem 1.5rem;
	margin-top: -3rem;
	display: grid;
	grid-template-columns: 1fr;

	h2 {
		font-family: "Avenir Next";
		line-height: 1.5;
		font-weight: 900;
		font-size: 2.8rem;
		margin-bottom: 0.5rem;
		color: ${({ theme }) => theme.color.primary};
	}

	h3 {
		font-family: "Avenir Next";
		line-height: 1.5;
		font-weight: 400;
		font-size: 1.6rem;
		margin-bottom: 0.5rem;

		&:nth-of-type(3) {
			margin-bottom: 3rem;
		}
	}

	a {
		color: ${({ theme }) => theme.fonts.primary};
		text-decoration: underline;

		&:hover {
			color: ${({ theme }) => theme.color.primary};
		}
	}

	p {
		font-size: 1.6rem;
		margin-bottom: 1rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		p {
			/* font-size: 1.8rem; */
			margin-bottom: 2rem;
			max-width: 75rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: 4rem 3rem 3rem;

			h2 {
				font-size: 3.8rem;
				margin-top: 1rem;
				margin-bottom: 2rem;
			}

			p {
				margin-bottom: 2rem;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				padding: 4rem 4rem 4rem;

				h2 {
					font-size: 6rem;
					margin-top: 1rem;
					margin-bottom: 2.5rem;
				}

				p {
					margin-bottom: 2rem;
				}
			}
		}
	}
`

const FlexContainer = styled.div`
	margin-top: 4rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr 1fr;
	}
`

const ContentBottomContainer = styled.div`
	border: 1px solid ${({ theme }) => theme.color.primary};
	padding: 1rem 2rem;

	p {
		margin: 0;
		/* text-align: end; */

		&:nth-of-type(1) {
			font-size: 2.4rem;
			color: ${({ theme }) => theme.color.primary};
			font-weight: 900;
			margin-bottom: 0.5rem;
		}
		&:nth-of-type(2) {
			font-size: 1.6rem;
			font-weight: 700;
			/* color: ${({ theme }) => theme.color.primary}; */
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		p {
			margin: 0;
			/* text-align: end; */

			&:nth-of-type(1) {
				font-size: 3rem;
				color: ${({ theme }) => theme.color.primary};
				font-weight: 900;
			}
			&:nth-of-type(2) {
				font-size: 1.6rem;
				font-weight: 700;
				/* color: ${({ theme }) => theme.color.primary}; */
			}
		}
	}
`

// const ButtonsContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	gap: 1rem;
// 	width: 100%;
// 	/* margin: 2rem 0; */

// 	button {
// 		/* font-size: 1.2rem; */
// 		width: 100%;
// 		font-weight: 600;
// 		/* padding: 1rem 1rem 0.8rem; */
// 	}
// 	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
// 		flex-direction: row;

// 		button {
// 			width: fit-content;
// 			font-size: 1.8rem;
// 		}
// 	}
// `

const ButtonsContainer = styled.div`
	align-self: end;
	justify-self: end;
	width: 100%;
	margin-top: 2rem;
	display: flex;
	justify-content: flex-end;

	a {
		display: block;
	}

	button {
		display: block;
		font-family: "Avenir Next";
		font-size: 1.5rem;
		font-weight: 700;
		padding: 1rem 1rem 0.8rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		button {
			font-size: 2rem;
			line-height: 1;
			/* margin-bottom: 1rem; */
		}
		button:nth-of-type(1) {
			/* font-size: 2rem; */
			/* margin-right: 1rem; */
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			button {
				/* font-size: 3rem; */
				padding: 1.2rem 2rem 0.8rem;
				font-weight: 400;
			}
			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				button {
					font-size: 3rem;
					padding: 1.8rem 4rem 1.5rem;
				}
			}
		}
	}
`
