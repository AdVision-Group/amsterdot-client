// Utils
import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Controller } from "swiper"

// Hooks
import { useNumber } from "react-use"

// Types
import ISwiper from "swiper/swiper"

// Icons
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

import "swiper/css"

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
		items: {
			icon: {
				img: {
					src: string
					alt: string
					blurDataURL: string
				}
				time: string
			}
			img: {
				src: string
				alt: string
				blurDataURL: string
			}
			time: string[]
			title: string
			subTitle: string
			description: string
		}[]
		hasArrowDown?: boolean
	}
}

const EventOverview: React.FC<IProps> = ({ item }) => {
	const [activeIdx, { set, inc, dec }] = useNumber(0)
	const [controlledSwiper, setControlledSwiper] = useState<ISwiper>()

	// console.log(controlledSwiper?.activeIndex)
	// controlledSwiper?.onAny((swiper) => {
	// 	console.log(swiper)
	// })
	controlledSwiper?.on("activeIndexChange", (swiper) => {
		// console.log(swiper.activeIndex)
		set(swiper.activeIndex)
	})

	const handleClickNext = () => {
		if (!controlledSwiper?.slides) return
		controlledSwiper?.slideNext()
		// inc()
	}
	const handleClickButton = (idx: number) => {
		controlledSwiper?.slideTo(idx)
		// set(idx)
	}
	const handleClickPrev = () => {
		if (activeIdx === 0) return
		controlledSwiper?.slidePrev()
		// dec()
	}

	// console.log(activeIdx)

	return (
		<ContentContainer>
			<LabelContainer>
				<p>{item.day}</p>
				<p>DAY</p>
			</LabelContainer>
			<Content>
				<Illustration>
					<Image
						src={item.ilustration.src}
						blurDataURL={item.ilustration.blurDataURL}
						placeholder="blur"
						width={item.ilustration.width}
						height={item.ilustration.height}
						alt={item.ilustration.alt}
						objectFit="cover"
						layout="responsive"
					/>
				</Illustration>
				<DateContainer>
					<p>
						<span>{item.date.day}</span>
						<span />
					</p>
					<p>
						<span />
						<span>{item.date.month}</span>
					</p>
				</DateContainer>
				<h2>{item.title}</h2>

				<Swiper
					modules={[Controller]}
					controller={{ control: controlledSwiper }}
				>
					<TimelineSlider>
						<button onClick={handleClickPrev}>
							<AiOutlineLeft />
						</button>
						<div>
							<IconContainer isActive={true}>
								<Image
									src={item.items[activeIdx].icon.img.src}
									// blurDataURL={item.items[activeIdx].icon.img.blurDataURL}
									// placeholder="blur"
									width={20}
									height={20}
									alt={item.items[activeIdx].icon.img.alt}
									objectFit="contain"
									layout="responsive"
								/>
							</IconContainer>
						</div>
						<button onClick={handleClickNext}>
							<AiOutlineRight />
						</button>
					</TimelineSlider>
					<TimelineOverview>
						{item.items.map((i, idx) => (
							<TimelineBlock isActive={idx === activeIdx} key={idx}>
								<IconContainer
									onClick={() => handleClickButton(idx)}
									isActive={idx === activeIdx}
								>
									<Image
										src={i.icon.img.src}
										// blurDataURL={item.items[activeIdx].icon.img.blurDataURL}
										// placeholder="blur"
										width={20}
										height={20}
										alt={i.icon.img.alt}
										objectFit="contain"
										layout="responsive"
									/>
								</IconContainer>
								<p>{i.icon.time}</p>
							</TimelineBlock>
						))}
					</TimelineOverview>
				</Swiper>

				<Swiper
					className="main-swipe"
					modules={[Controller]}
					onSwiper={setControlledSwiper}
					spaceBetween={70}
					slidesPerView={1}
				>
					{item.items.map((i, idx) => (
						<SwiperSlide key={idx}>
							<TimeRange>
								{i.time[0]} <span /> {i.time[1]}
							</TimeRange>

							<TimelineContainer>
								<TimelineHead>
									<figure>
										<Image
											src={i.img.src}
											blurDataURL={i.img.blurDataURL}
											placeholder="blur"
											width={50}
											height={50}
											alt={i.img.alt}
											objectFit="contain"
											layout="responsive"
										/>
									</figure>
									<div>
										<TimelineHeadFlex>
											<h4>{i.title}</h4>
											<p>
												{i.time[0]} <span /> {i.time[1]}
											</p>
										</TimelineHeadFlex>
										<p>{i.subTitle}</p>
									</div>
									<TimelineBody>
										<p>{i.description}</p>
									</TimelineBody>
								</TimelineHead>
							</TimelineContainer>
						</SwiperSlide>
					))}
				</Swiper>

				<BottomContainer>
					<motion.button
					// animate={{
					// 	// x: [0, -10, -5, -15, 0],
					// 	// scale: [1.2, 1, 0.9, 0.97, 1.2],
					// }}
					// transition={{
					// 	repeat: Infinity,
					// 	ease: "easeInOut",
					// 	duration: 10,
					// }}
					>
						{item.hasArrowDown ? (
							<figure>
								<Image
									src={"/assets/arrow-down-final-v2.svg"}
									width={100}
									height={100}
									alt="bottom arrow"
									objectFit="contain"
									layout="responsive"
								/>
							</figure>
						) : (
							<figure>
								<Image
									src={"/assets/right_arrow.svg"}
									// blurDataURL="data:image/webp;base64,UklGRkIDAABXRUJQVlA4WAoAAAAgAAAAMgEAvQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCAEAQAA0BQAnQEqMwG+AD7tdq9VqacjoyAp6TAdiWlu3fVzjwQCg4kDWkX4+vyuRflWKZN+yhh2/RE0oZIN3wkyyPxu0qz0UrkI0h6njjQYSLkoa/RQCdfRI+tT9ImfA3bBkvnDm69fk98zoQXsHuII99JKLpfODJEDI66qIGC5d6RRmfBxqiGBaIQn6M2C4NJtKGWo80QhP0ZlXGv5YnA115HzGg1ea6NdYM+DJecGS84MEAD+8RjQQcDOWeREROKW4BpHcu+C81IXmTln9WybDDtjSxZ0eh63jQidD7w1tuvUuop479rquAPRGCz11IN/lI97nSabJfl/p8IYcH7JflEAAAAAAAA="
									// placeholder="blur"
									width={50}
									height={50}
									alt="right arrow"
									objectFit="contain"
									layout="responsive"
								/>
							</figure>
						)}
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
	margin-left: auto;

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
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				/* max-width: 15rem;
				p {
					font-size: 4.4rem;
				} */
			}
		}
	}
`

const BottomContainer = styled.div`
	color: #fff;
	position: absolute;
	z-index: 3;
	right: -1.5rem;
	bottom: -1.5rem;

	p {
		font-size: 3rem;
	}

	button {
		cursor: pointer;
		position: relative;
		border: none;
		background-color: ${({ theme }) => theme.color.primary};
		border-radius: 50%;
		width: 6rem;
		padding: 1.5rem;
		margin-left: 13rem;
	}
`

const Illustration = styled.figure`
	position: absolute;
	right: -1.5rem;
	top: -1.5rem;
	z-index: -2;
	width: 20rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			width: 40rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				right: -4.5rem;
				top: -4.5rem;
			}
		}
	}
`

const LabelContainer = styled.div`
	position: relative;
	z-index: 1;
	background-color: ${({ theme }) => theme.color.primary};
	padding: 0.8rem 1rem 1rem;
	display: inline-block;
	margin-left: 1.5rem;
	color: ${({ theme }) => theme.fonts.secondary};
	font-weight: 500;
	font-size: 2.5rem;
	text-align: center;
	line-height: 1;
	/* filter: blur(1rem); */

	p:nth-of-type(1) {
		font-size: 4.5rem;
		font-weight: 600;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			margin-left: 3rem;
			/* font-size: 3.5rem; */
		}
	}
`

const ContentContainer = styled.article`
	/* display: flex;
	position: fixed; */
	max-width: 90rem;
	width: 100%;
	z-index: 8;
	position: relative;
	/* filter: blur(1rem); */

	/* &:after {
		content: "COMING SOON";
		position: absolute;
		color: ${({ theme }) => theme.fonts.primary};
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		z-index: 99;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 5rem;
		font-weight: 900;

	} */
`

const Content = styled.div`
	position: relative;
	/* z-index: 2; */
	background-color: ${({ theme }) => theme.background.container};
	padding: 1.5rem;
	margin-top: -7.5rem;
	color: ${({ theme }) => theme.fonts.primary};
	/* filter: blur(1rem); */

	h2 {
		font-family: "Avenir Next";
		line-height: 1.5;
		font-weight: 400;
		font-size: 3rem;
		margin: 2rem 0 0;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: 3rem;

			h2 {
				font-size: 5rem;
				font-height: 1;
			}
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				h2 {
					font-size: 7rem;
					margin: 0;
				}
				margin-top: -4.5rem;
			}
		}
	}
`

const TimeRange = styled.p`
	font-size: 2rem;
	font-weight: 700;
	text-align: center;
	margin-bottom: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		display: inline-block;
		width: 4rem;
		height: 3px;
		background-color: #fff;
		margin: 0 1rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`

const TimelineContainer = styled.div`
	background-color: ${({ theme }) => theme.background.secondary};
	padding: 1.5rem;
	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 3rem;
	}
`

const TimelineHeadFlex = styled.div`
	p {
		display: none;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: grid;
		grid-template-columns: auto 12rem;
		gap: 1rem;

		p {
			align-self: start;
			display: flex;
			align-items: center;
			font-weight: 700;
			/* display: inline-block; */
			span {
				display: inline-block;
				width: 1rem;
				height: 3px;
				background-color: #fff;
				margin: 0 0.5rem;
			}
		}
	}
`
const TimelineHead = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 6rem 1fr;
	gap: 2rem;

	/* margin-bottom: 1.5rem; */

	h4 {
		font-family: "Avenir next";
		font-size: 1.8rem;
		font-weight: 700;
		color: ${({ theme }) => theme.color.primary};
		text-transform: uppercase;
		line-height: 1;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 10rem 1fr;
		figure {
			grid-row: 1/3;
			align-self: center;
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: 18rem 1fr;
			align-items: center;

			h4 {
				font-size: 3rem;
			}

			figure {
				margin-right: 3rem;
			}
		}
	}
`

const TimelineBody = styled.div`
	grid-column: 1/3;
	position: relative;

	&:after {
		content: "COMING SOON";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	p {
		min-height: 19.2rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 8; /* number of lines to show */
		line-clamp: 8;
		-webkit-box-orient: vertical;
		filter: blur(6px);
	}
	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-column: 2/3;

		p {
			min-height: unset;
		}
	}
`

const IconContainer = styled.figure<{ isActive: boolean }>`
	background-color: ${({ theme, isActive }) =>
		isActive ? theme.color.primary : theme.background.secondary};
	position: relative;
	width: 6rem;
	padding: 1.5rem;
	border-radius: 50%;

	&:before {
		position: absolute;
		content: "";
		width: 200%;
		height: 0.5rem;
		background: ${({ theme, isActive }) =>
			isActive
				? `linear-gradient(
			90deg,
			#272727 0%,
			#ff008c 15%,
			#ff008c 85%,
			#272727 100%)`
				: "nset"};
		z-index: ${({ theme, isActive }) => (isActive ? `-1` : -2)};
		z-index: -1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 4rem;
		padding: 1rem;
		&:before {
			/* top: 80%; */
		}
	}
`

const TimelineBlock = styled.div<{ isActive: boolean }>`
	p {
		text-align: center;
		margin-top: 0.5rem;
		font-size: 1.4rem;
		color: ${({ theme, isActive }) =>
			isActive ? theme.color.primary : theme.fonts.primary};
		font-weight: ${({ theme, isActive }) => (isActive ? "700" : "400")};
	}
`

const TimelineOverview = styled.div`
	display: none;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: block;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin: 1rem 0 2rem;
		gap: 3rem;
		/* border: 1px solid green; */
		padding-bottom: 2rem;
		/* overflow-x: auto; */

		&:before {
			position: absolute;
			content: "";
			width: 100%;
			height: 0.5rem;
			top: 1.8rem;
			background: linear-gradient(
				90deg,
				#161616 0%,
				#272727 10%,
				#272727 90%,
				#161616 100%
			);
			z-index: -1;
		}

		p {
			text-align: center;
			margin-top: 0.5rem;
			font-size: 1.4rem;
		}

		${IconContainer} {
			cursor: pointer;
		}
	}
`

const TimelineSlider = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 1rem 0;
	/* border: 1px solid green; */

	&:before {
		position: absolute;
		content: "";
		width: 100%;
		height: 0.5rem;
		background: linear-gradient(
			90deg,
			#161616 0%,
			#272727 10%,
			#272727 90%,
			#161616 100%
		);
		z-index: -1;
	}

	button {
		/* cursor: pointer; */
		background-color: ${({ theme }) => theme.background.secondary};
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.5rem;
		color: ${({ theme }) => theme.fonts.primary};
		font-size: 1.6rem;
		border-radius: 50%;
	}
	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`
