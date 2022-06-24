// Utils
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Link from "next/link"
import Image from "next/image"

const BountyWinnersSection = () => {
	return (
		<BountyWinnersSectionContainer>
			<TitleContainer>
				<figure className="winners">
					<Image
						src="/assets/bounty-winners/WINNERS.svg"
						alt="kers"
						objectFit="contain"
						layout="responsive"
						width={50}
						height={25}
					/>
				</figure>
				{/* <h2 className="winners">Winners</h2> */}
				<Link href={"/#day-1"} passHref>
					<a className="arrow">
						<ArrowContainer
							animate={
								{
									// y: [0, -10, -5, -15, 0],
									// scale: [1.2, 1, 0.9, 0.97, 1.2],
								}
							}
						>
							<Image
								src={"/assets/arrow-down-final.svg"}
								alt="red circle"
								layout="responsive"
								width={100}
								height={100}
								objectFit="contain"
							/>
						</ArrowContainer>
					</a>
				</Link>

				<figure className="of-bounties">
					<Image
						src="/assets/bounty-winners/bounties.svg"
						alt="kers"
						objectFit="contain"
						layout="responsive"
						width={50}
						height={25}
					/>
				</figure>
			</TitleContainer>
		</BountyWinnersSectionContainer>
	)
}

export default BountyWinnersSection

const BountyWinnersSectionContainer = styled.section`
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

	display: grid;
	grid-template-columns: 1fr 10rem;

	.winners {
		/* font-size: 10rem;
		font-weight: 400;
		grid-column: 1/2; */
		margin-bottom: -5rem;
		/* text-transform: uppercase; */
	}

	.arrow {
		align-self: center;
		justify-self: center;
	}

	.of-bounties {
		grid-column: 1/3;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr 23rem;

		.winners {
			/* grid-column: 1/3; */
			margin-bottom: -18rem;
		}
	}
`

const ArrowContainer = styled(motion.figure)`
	cursor: pointer;
	grid-area: a;
	position: relative;
	z-index: 1;
	/* justify-self: end; */
	/* margin: 2rem 0; */
	margin-bottom: -10rem;

	width: 4rem;
	heigth: 4rem;
	/* bottom: 5rem; */
	/* left: 3rem; */
	/* display: none; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		/* display: block; */
		width: 8rem;
		heigth: 8rem;
		/* bottom: 6rem; */
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin-top: 10rem;
			margin-bottom: -8rem;

			/* align-self: end; */
			/* margin-left: 6rem; */
			/* bottom: 25rem; */
		}
	}
`
