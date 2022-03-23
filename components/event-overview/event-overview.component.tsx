// Utils
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Image from "next/image"
import Link from "next/link"

interface IProps {
	item: {
		id: string
		ilustration: {
			src: string
			alt: string
			blurDataURL: string
			width: number
			height: number
			objectFit: string
		}
		day: string
		title: string
		description: string
		cta: string
		partners: {
			image: {
				src: string
				alt: string
				blurDataURL: string
				width: number
				height: number
				objectFit: string
			}
			name: string
		}[]
		date: string
		place: string
	}
}

const EventOverview: React.FC<IProps> = ({ item }) => {
	return (
		<ContentContainer>
			<Illustration>
				<Image
					src={item.ilustration.src}
					blurDataURL={item.ilustration.blurDataURL}
					placeholder="blur"
					width={item.ilustration.width}
					height={item.ilustration.height}
					alt={item.ilustration.alt}
					objectFit="contain"
				/>
			</Illustration>
			<DayContainer>
				<p>{item.day}</p>
				<p>DAY</p>
			</DayContainer>
			<Content>
				<h2>{item.title}</h2>
				<Desc>{item.description}</Desc>
				<PartnersContainer>
					{item.partners.map((i, idx) => (
						<Partner key={idx}>
							<figure>
								<Image
									src={i.image.src}
									blurDataURL={i.image.blurDataURL}
									placeholder="blur"
									width={i.image.width}
									height={i.image.height}
									alt={i.image.alt}
									objectFit="contain"
								/>
							</figure>
							<p>{i.name}</p>
						</Partner>
					))}
				</PartnersContainer>
			</Content>
			<BottomContainer>
				<p>{item.date}</p>
				<Link href={item.cta} passHref>
					<motion.button
						whileHover={{
							scale: 1.05,
						}}
						whileTap={{
							scale: 0.97,
						}}
					>
						<figure>
							<Image
								src={"/assets/right_arrow.svg"}
								// blurDataURL="data:image/webp;base64,UklGRkIDAABXRUJQVlA4WAoAAAAgAAAAMgEAvQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCAEAQAA0BQAnQEqMwG+AD7tdq9VqacjoyAp6TAdiWlu3fVzjwQCg4kDWkX4+vyuRflWKZN+yhh2/RE0oZIN3wkyyPxu0qz0UrkI0h6njjQYSLkoa/RQCdfRI+tT9ImfA3bBkvnDm69fk98zoQXsHuII99JKLpfODJEDI66qIGC5d6RRmfBxqiGBaIQn6M2C4NJtKGWo80QhP0ZlXGv5YnA115HzGg1ea6NdYM+DJecGS84MEAD+8RjQQcDOWeREROKW4BpHcu+C81IXmTln9WybDDtjSxZ0eh63jQidD7w1tuvUuop479rquAPRGCz11IN/lI97nSabJfl/p8IYcH7JflEAAAAAAAA="
								// placeholder="blur"
								width={50}
								height={50}
								alt="right arrow"
								objectFit="contain"
							/>
						</figure>
					</motion.button>
				</Link>
			</BottomContainer>
			<Place>{item.place}</Place>
		</ContentContainer>
	)
}

export default EventOverview

const BottomContainer = styled.div`
	color: #fff;
	position: absolute;
	z-index: 3;
	right: -1rem;
	bottom: -0.8rem;

	p {
		font-size: 3rem;
	}

	button {
		cursor: pointer;

		border: none;
		background-color: ${({ theme }) => theme.color.primary};
		border-radius: 50%;
		padding: 1.5rem;
		margin-left: 13rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		right: -0.5rem;
		bottom: 2.5rem;

		p {
			position: absolute;
			bottom: 0;
			font-size: 1.6rem;
		}

		button {
			background-color: ${({ theme }) => theme.color.primary};
			border-radius: 50%;
			margin-left: 7rem;

			figure {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 3rem;
				height: 3rem;
			}
		}
	}
`

const Illustration = styled.figure`
	position: absolute;
	right: -3rem;
	top: 0rem;
	z-index: 1;
	/* border: 1px solid green; */

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 15rem;
		right: 0rem;
	}
`

const DayContainer = styled.div`
	position: relative;
	z-index: 3;
	display: inline-block;
	background-color: ${({ theme }) => theme.color.primary};
	color: #000;
	padding: 1rem;
	margin-left: 4.5rem;

	p {
		text-align: center;
		&:nth-of-type(1) {
			font-size: 8rem;
			line-height: 0.8;
			font-weight: 700;
		}
		&:nth-of-type(2) {
			font-size: 4.3rem;
			line-height: 1;
			font-weight: 600;
		}
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-left: 4rem;
		p {
			&:nth-of-type(1) {
				font-size: 4rem;
				line-height: 0.8;
			}
			&:nth-of-type(2) {
				font-size: 2rem;
				line-height: 1;
			}
		}
	}
`

const ContentContainer = styled.article`
	position: relative;
	max-width: 80rem;
	width: 100%;
`

const Content = styled.div`
	position: relative;
	z-index: 2;
	background-color: ${({ theme }) => theme.background.container};
	margin: -7rem 3rem -3rem;
	padding: 10rem 3rem 3rem;
	color: ${({ theme }) => theme.fonts.primary};

	h2 {
		font-size: 6rem;
		font-weight: 300;
		line-height: 1;
		margin-bottom: 2rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: -3rem 3rem -5rem;
		padding: 5rem 1rem 1rem;

		h2 {
			font-size: 3rem;
			margin-bottom: 1rem;
		}
		/* @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
			grid-template-columns: repeat(1, 1fr);
		} */
	}
`

const Desc = styled.p`
	font-size: 1.8rem;
	margin-bottom: 3rem;
	max-width: 59rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 1.6rem;
		margin-bottom: 1rem;
	}
`

const PartnersContainer = styled.div`
	display: flex;
	gap: 3rem;
	flex-wrap: wrap;
	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		gap: 1rem;
	}
`

const Partner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	figure {
		padding: 2rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 3px solid ${({ theme }) => theme.color.primary};
		margin-bottom: 1rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		figure {
			width: 5rem;
			height: 5rem;
			padding: 0.5rem;
			margin-bottom: 0.5rem;
		}
	}
`

const Place = styled.p`
	position: relative;
	z-index: 3;
	margin: 4rem 0 0 3rem;
	font-weight: 300;
	color: #fff;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 8rem 0 0 3rem;
	}
`
