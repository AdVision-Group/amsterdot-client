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
		}
		day: string
		title: string

		date: {
			day: number
			month: string
		}
	}
}

const EventOverview: React.FC<IProps> = ({ item }) => {
	return (
		<ContentContainer>
			<Content>
				<Illustration>
					<Image
						src={item.ilustration.src}
						blurDataURL={item.ilustration.blurDataURL}
						placeholder="blur"
						width={item.ilustration.width}
						height={item.ilustration.height}
						alt={item.ilustration.alt}
						objectFit="contain"
						layout="responsive"
					/>
				</Illustration>
				<LabelContainer>
					<p>{item.day}</p>
					<p>DAY</p>
				</LabelContainer>
				<DateContainer>
					<p>
						<span>20</span>
						<span />
					</p>
					<p>
						<span />
						<span>APRIL</span>
					</p>
				</DateContainer>
				<h2>{item.title}</h2>

				<BottomContainer>
					<motion.button>
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
				</BottomContainer>
			</Content>
		</ContentContainer>
	)
}

export default EventOverview

const DateContainer = styled.div`
	grid-area: d;
	/* width: 100%; */
	max-width: 10rem;
	/* border: 1px solid green; */
	justify-self: end;
	font-size: 2.2rem;
	line-height: 1.1;
	text-align: center;

	p {
		font-family: "Avenir Next";
		font-weight: 700;
	}

	p:nth-of-type(1) {
		/* border: 1px solid green; */
		display: flex;
		align-items: center;

		span {
			display: block;

			&:nth-of-type(2) {
				width: 100%;
				height: 0.3rem;
				background-color: ${({ theme }) => theme.fonts.primary};
				margin-left: 1.5rem;
			}
		}
	}

	p:nth-of-type(2) {
		/* border: 1px solid green; */
		display: flex;
		align-items: center;

		span {
			display: block;

			&:nth-of-type(1) {
				width: 100%;
				height: 0.3rem;
				background-color: ${({ theme }) => theme.fonts.primary};
				margin-right: 1.5rem;
			}
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
			/* max-width: 15rem;
			p {
				font-size: 4.4rem;
			} */
		}
	}
`

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
`

const Illustration = styled.figure`
	position: absolute;
	right: 0rem;
	top: 0rem;
	z-index: 1;
	width: 15rem;
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

const ContentContainer = styled.article`
	/* display: flex;
	position: fixed; */
	max-width: 80rem;
	width: 100%;
	z-index: 1;
`

const Content = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.background.container};
	padding: 4rem 1.5rem 1.5rem;
	margin-top: -3rem;
	color: ${({ theme }) => theme.fonts.primary};

	h2 {
		font-family: "Avenir Next";
		line-height: 1.5;
		font-weight: 500;
		font-size: 2.8rem;
		margin-bottom: 0.5rem;
	}
`
