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
		set(idx)
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
						objectFit="contain"
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
							<IconContainer>
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
										<h4>{i.title}</h4>
										<p>{i.subTitle}</p>
									</div>
								</TimelineHead>
								<TimelineBody>
									<p>{i.description}</p>
								</TimelineBody>
							</TimelineContainer>
						</SwiperSlide>
					))}
				</Swiper>

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
								layout="responsive"
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
	z-index: -1;
	width: 20rem;
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

	p:nth-of-type(1) {
		font-size: 4.5rem;
		font-weight: 600;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		/* margin-left: 3rem; */
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			/* font-size: 3.5rem; */
		}
	}
`

const ContentContainer = styled.article`
	/* display: flex;
	position: fixed; */
	max-width: 90rem;
	width: 100%;
	z-index: 1;
`

const Content = styled.div`
	position: relative;
	/* z-index: 2; */
	background-color: ${({ theme }) => theme.background.container};
	padding: 1.5rem;
	margin-top: -7.5rem;
	color: ${({ theme }) => theme.fonts.primary};

	h2 {
		font-family: "Avenir Next";
		line-height: 1.5;
		font-weight: 500;
		font-size: 2.8rem;
		margin: 2rem 0 1rem;
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
`

const TimelineContainer = styled.div`
	background-color: ${({ theme }) => theme.background.secondary};
	padding: 1.5rem;
`

const TimelineHead = styled.div`
	display: grid;
	grid-template-columns: 10rem 1fr;
	gap: 1rem;
	margin-bottom: 1.5rem;

	h4 {
		font-size: 2rem;
		color: ${({ theme }) => theme.color.primary};
	}
`

const TimelineBody = styled.div``

const TimelineSlider = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 2rem 0;
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
		cursor: pointer;
		background-color: ${({ theme }) => theme.background.secondary};
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.5rem;
		color: ${({ theme }) => theme.fonts.primary};
		font-size: 2rem;
		border-radius: 50%;
	}
`

const IconContainer = styled.figure`
	background-color: ${({ theme }) => theme.color.primary};
	position: relative;
	width: 8rem;
	padding: 1.5rem;
	border-radius: 50%;

	&:before {
		position: absolute;
		content: "";
		width: 200%;
		height: 0.5rem;
		background: linear-gradient(
			90deg,
			#272727 0%,
			#ff008c 15%,
			#ff008c 85%,
			#272727 100%
		);
		z-index: -1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`
