// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Image from "next/image"

const EventSection = () => {
	return (
		<EventSectionContainer>
			<Container>
				<XContainer>
					<Image
						src="/assets/xxx.svg"
						alt="conf ilu"
						objectFit="contain"
						layout="responsive"
						width={100}
						height={50}
					/>
				</XContainer>
				<Title className="con">CON</Title>
				<Title className="fere">FERE</Title>
				<Title className="nce">NCE</Title>
				<IluContainer>
					<figure>
						<Image
							src="/assets/ilu-conf.svg"
							alt="conf ilu"
							objectFit="contain"
							layout="responsive"
							width={100}
							height={200}
						/>
					</figure>
					<figure>
						<Image
							src="/assets/anim-v2.gif"
							alt="conf ilu"
							objectFit="contain"
							layout="responsive"
							width={100}
							height={200}
						/>
					</figure>
				</IluContainer>
				<PlaceContainer>
					<p>IN AMSTERDAM / NETHERLANDS</p>
					<p>
						<figure>
							<Image
								src="/assets/list-icon.svg"
								alt="conf ilu"
								objectFit="contain"
								layout="fixed"
								width={30}
								height={30}
							/>
						</figure>
						<span>WESTERUNIE Klönneplein 4-6, 1014 DD</span>
					</p>
				</PlaceContainer>
			</Container>
		</EventSectionContainer>
	)
}

export default EventSection

const EventSectionContainer = styled.section`
	/* border: 1px solid yellow; */
	color: ${({ theme }) => theme.fonts.primary};
	padding: 5rem 1.5rem;
`

const Container = styled.div`
	/* scroll-padding-top: 8rem; */
	/* position: relative; */
	/* background-color: ${({ theme }) => theme.background.primary}; */
	/* overflow: hidden; */
	/* width: 100vw; */
	/* height: 100vh; */

	display: grid;
	grid-template-columns: auto auto;
	/* grid-template-rows: auto auto auto; */
	grid-template-areas:
		"x x"
		"i c"
		"i f"
		"i n"
		"p p";
`

const XContainer = styled.figure`
	position: relative;
	grid-area: x;
	width: 12rem;
	/* height: 5rem; */
	/* border: 1px solid green; */
	justify-self: end;
	margin-bottom: 2rem;
`

const Title = styled.h3`
	position: relative;
	font-size: 6rem;
	font-weight: 500;
	line-height: 1;
	z-index: 3;

	&.con {
		grid-area: c;
		margin-left: -4rem;
	}
	&.fere {
		grid-area: f;
	}
	&.nce {
		grid-area: n;
		z-index: 1;
	}
`

const IluContainer = styled.div`
	grid-area: i;

	position: relative;
	/* border: 1px solid green; */
	/* margin: 6rem 0rem 0rem; */
	width: 18rem;
	height: 26rem;

	margin-bottom: 5rem;

	figure {
		width: 18rem;
		height: 25rem;
		&:nth-of-type(1) {
			position: absolute;
			/* margin: 0 0 0rem 3rem; */
			z-index: 1;
			top: -5.5rem;
			right: -5rem;
		}
		&:nth-of-type(2) {
			width: 15rem;
			position: absolute;
			bottom: 0;
		}
	}
`

const PlaceContainer = styled.div`
	grid-area: p;

	p {
		font-family: "Acumin Variable Concept";
		font-weight: 300;
		text-transform: uppercase;
		display: flex;
		align-items: center;
	}
`
