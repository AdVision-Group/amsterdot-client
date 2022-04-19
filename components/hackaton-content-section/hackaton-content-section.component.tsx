// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Image from "next/image"
import Link from "next/link"
import Button from "../button/button.component"

const ContentBottomContainer = styled.div`
	margin-top: 2rem;
	p {
		margin: 0;
		text-align: end;

		&:nth-of-type(1) {
			font-size: 2.4rem;
			color: ${({ theme }) => theme.color.primary};
			font-weight: 900;
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
			text-align: end;

			&:nth-of-type(1) {
				font-size: 3.75rem;
				color: ${({ theme }) => theme.color.primary};
				font-weight: 900;
			}
			&:nth-of-type(2) {
				font-size: 2rem;
				font-weight: 700;
				/* color: ${({ theme }) => theme.color.primary}; */
			}
		}
	}
`

const HackatonContentSection = () => {
	return (
		<React.Fragment>
			<SectionContainer id="hackaton-content">
				<Container
				// style={{
				// 	opacity: transformOpacity,
				// }}
				>
					<LabelContainer>
						<p>INFO</p>
					</LabelContainer>
					<ContentContainer>
						<h2>Online hackathon, open to anyone</h2>
						<h3>Start: April 20th</h3>
						<h3>End: June 3rd (12 UTC)</h3>
						<h3>Rewards: $300,000+ from bounties and shared prize pool</h3>
						<h3>Registration: Via DoraHacks (link soon)</h3>
						<h3>Submission guidelines: Can differ (see Github issue of the bounty)</h3>
						<h3>Also submit via DoraHacks to participate in the distribution of the prize pool</h3>
						<h3>Include a short description and a 5-min video</h3>
						<h3>Bounty rewards are distributed by the teams that own them</h3>
						<h3>Shared prize pool is distributed by a jury from the sponsoring teams using quadratic voting</h3>

						<ContentBottomContainer>
							<p>$170,000 BOUNTIES</p>
							<p>by leading projects from the Polkadot & Kusama ecosystem</p>
						</ContentBottomContainer>
						<ContentBottomContainer>
							<p>+ $150,000 PRIZE POOL</p>
							<p>by Polkadot Treasury</p>
						</ContentBottomContainer>
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
	margin: 15rem 0 10rem;
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

const LabelContainer = styled.div`
	position: relative;
	z-index: 1;
	background-color: ${({ theme }) => theme.color.primary};
	padding: 0.8rem 1rem 0.5rem;
	display: inline-block;
	margin-left: 1.5rem;
	color: ${({ theme }) => theme.fonts.secondary};
	font-weight: 500;
	font-size: 2.5rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-left: 3rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 3.5rem;
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
		font-weight: 500;
		font-size: 2.8rem;
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 1.6rem;
		margin-bottom: 1rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		p {
			font-size: 1.8rem;
			margin-bottom: 2rem;
			max-width: 75rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: 4rem 3rem 3rem;

			h2 {
				font-size: 4rem;
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
