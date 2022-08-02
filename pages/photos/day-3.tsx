// Types
import type { NextPage } from "next"

// Utils
import React, { useState } from "react"
import styled from "styled-components"

// Components
import Head from "next/head"
import Header from "../../components/header/header.component"
import Image from "../../components/image/image.component"
import Link from "next/link"

// Hooks
import { useRouter } from "next/router"
// import { motion, useViewportScroll } from "framer-motion"
import { useMap, useBoolean } from "react-use"

// Data
import {
	events,
	hackatons,
	// day1Images,
	// day2Images,
	day3Images,
	// day4Images,
} from "../../utils/data"

// Icons
import { AiFillGithub, AiOutlineRight, AiOutlineDown } from "react-icons/ai"

interface IDayButtonProps {
	isActive: boolean
}

interface IState {
	selectedDayIdx: number
	selectedImageIdx: number | null
	selectedImageArrlength: number | null
}

const PhotosPage: NextPage = () => {
	const { push } = useRouter()

	const [event, { setAll }] = useMap({
		events: events.map((i, idx) => ({
			id: idx,
			showContent: false,
		})),
	})
	const [hackaton, { setAll: setAllHackathon }] = useMap({
		hackatons: hackatons.map((i, idx) => ({
			id: idx,
			showContent: false,
		})),
	})

	const openEventDayProgram = (
		showContent: boolean,
		i: number,
		dayID: string
	) => {
		setAll({
			...event,
			events: event.events.map((e, id) => {
				if (i === id) {
					return {
						id: id,
						showContent: showContent,
					}
				} else {
					return {
						id: id,
						showContent: e.showContent,
					}
				}
			}),
		})
		push(`/#${dayID}`)
	}
	const openHackathonDayProgram = (
		showContent: boolean,
		i: number,
		dayID: string
	) => {
		setAllHackathon({
			...event,
			hackatons: hackaton.hackatons.map((e, id) => {
				if (i === id) {
					return {
						id: id,
						showContent: showContent,
					}
				} else {
					return {
						id: id,
						showContent: e.showContent,
					}
				}
			}),
		})
		push(`/#${dayID}`)
	}

	const [showModal, toggleModal] = useBoolean(false)

	const [state, setState] = useState<IState>({
		selectedDayIdx: 1,
		selectedImageIdx: null,
		selectedImageArrlength: null,
	})

	const onImageSelect = (idx: number, dayLength: number) => {
		toggleModal(true)
		setState((prevValue) => ({
			...prevValue,
			selectedImageIdx: idx,
			selectedImageArrlength: dayLength,
		}))
	}

	const onModalClose = () => {
		toggleModal(false)
		setState((prevValue) => ({
			...prevValue,
			selectedImageIdx: null,
			selectedImageArrlength: null,
		}))
	}

	const onClickNext = (
		e:
			| React.MouseEvent<HTMLDivElement, MouseEvent>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault()
		e.stopPropagation()
		setState((prevValue) => {
			if (
				prevValue.selectedImageIdx ===
				(prevValue.selectedImageArrlength || 0) - 1
			) {
				return {
					...prevValue,
					selectedImageIdx: 0,
				}
			} else {
				return {
					...prevValue,
					selectedImageIdx: (prevValue.selectedImageIdx || 0) + 1,
				}
			}
		})
	}
	const onClickPrev = (
		e:
			| React.MouseEvent<HTMLDivElement, MouseEvent>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault()
		e.stopPropagation()

		setState((prevValue) => {
			if (
				prevValue.selectedImageIdx ===
				(prevValue.selectedImageArrlength || 0) - 1
			) {
				return {
					...prevValue,
					selectedImageIdx: 0,
				}
			} else {
				return {
					...prevValue,
					selectedImageIdx: (prevValue.selectedImageIdx || 0) + 1,
				}
			}
		})
	}

	const onClickDay = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		idx: number
	) => {
		e.preventDefault()
		setState((prevValue) => ({
			...prevValue,
			selectedDayIdx: idx,
		}))
	}

	// const getDayImages = (dayIdx: number) => {
	// 	switch (dayIdx) {
	// 		case 1:
	// 			return day1Images
	// 		case 2:
	// 			return day2Images
	// 		case 3:
	// 			return day3Images
	// 		case 4:
	// 			return day4Images
	// 		default:
	// 			return day1Images
	// 	}
	// }

	return (
		<React.Fragment>
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<title>amsterDOT Conf Hack</title>
				<meta name="title" content="amsterDOT Conf Hack" />
				<meta
					name="description"
					content="4 days of conf & hack, organized by leading Polkadot projects for the broader crypto family. 4/20-23 in Amsterdam, the Netherlands."
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://amsterdot.io/" />
				<meta property="og:title" content="amsterDOT Conf Hack" />
				<meta
					property="og:description"
					content="4 days of conf & hack, organized by leading Polkadot projects for the broader crypto family. 4/20-23 in Amsterdam, the Netherlands."
				/>
				<meta property="og:image" content="/assets/meta-a.png" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://amsterdot.io/" />
				<meta property="twitter:title" content="amsterDOT Conf Hack" />
				<meta
					property="twitter:description"
					content="4 days of conf & hack, organized by leading Polkadot projects for the broader crypto family. 4/20-23 in Amsterdam, the Netherlands."
				/>
				<meta property="twitter:image" content="/assets/meta-a.png" />
			</Head>

			<Header
				openEventDayProgram={openEventDayProgram}
				openHackathonDayProgram={openHackathonDayProgram}
				ctas={[
					{
						label: "AGENDA 2022",
						slug: "/agenda-2022",
						outline: false,
					},
					{
						label: "HACKATHON 2022",
						slug: "/hackathon-2022",
						outline: true,
					},
				]}
			/>

			{showModal && state.selectedImageIdx !== null && (
				<Modal onClick={onModalClose}>
					<ModalArrowButton className="left" onClick={onClickPrev}>
						<figure>
							<Image
								src="/assets/photos-section/left-arrow.svg"
								alt="left arrow"
								style={{
									objectFit: "contain",
								}}
								effect="blur"
								width={50}
								height={50}
							/>
						</figure>
					</ModalArrowButton>
					<figure>
						<Image
							src={day3Images[state.selectedImageIdx].src}
							alt={day3Images[state.selectedImageIdx].alt}
							// src={
							// 	getDayImages(state.selectedDayIdx)[state.selectedImageIdx].src
							// }
							// alt={
							// 	getDayImages(state.selectedDayIdx)[state.selectedImageIdx].alt
							// }
							effect="blur"
							style={{
								objectFit: "contain",
							}}
							width={"100%"}
							height={"100%"}
							// height={15}
						/>
						<LeftOverlay onClick={onClickPrev} />
						<RightOverlay onClick={onClickNext} />
					</figure>
					<ModalArrowButton className="right" onClick={onClickNext}>
						<figure>
							<Image
								src="/assets/photos-section/right-arrow.svg"
								alt="left arrow"
								style={{
									objectFit: "contain",
								}}
								effect="blur"
								width={50}
								height={50}
							/>
						</figure>
					</ModalArrowButton>
				</Modal>
			)}

			<SectionContainer>
				<TitleContainer>
					<Image
						src="/assets/photos-section/photos.svg"
						alt="photos"
						effect="blur"
						style={{
							objectFit: "contain",
						}}
						width={"100%"}
						// height={15}
					/>
				</TitleContainer>

				<ButtonsUl>
					<li>
						<Link href={"/photos/day-1"} passHref>
							<DayButton
								// onClick={(e) => onClickDay(e, 1)}
								isActive={state.selectedDayIdx === 1}
							>
								<span>DAY 01</span>
								<span>
									{state.selectedDayIdx === 1 ? (
										<AiOutlineDown />
									) : (
										<AiOutlineRight />
									)}
								</span>
							</DayButton>
						</Link>
					</li>
					<li>
						<Link href={"/photos/day-2"} passHref>
							<DayButton
								// onClick={(e) => onClickDay(e, 2)}
								isActive={state.selectedDayIdx === 2}
							>
								<span>DAY 02</span>
								<span>
									{state.selectedDayIdx === 2 ? (
										<AiOutlineDown />
									) : (
										<AiOutlineRight />
									)}
								</span>
							</DayButton>
						</Link>
					</li>
					<li>
						<Link href={"/photos/day-3"} passHref>
							<DayButton
								// onClick={(e) => onClickDay(e, 3)}
								isActive={state.selectedDayIdx === 3}
							>
								<span>DAY 03</span>
								<span>
									{state.selectedDayIdx === 3 ? (
										<AiOutlineDown />
									) : (
										<AiOutlineRight />
									)}
								</span>
							</DayButton>
						</Link>
					</li>
					<li>
						<Link href={"/photos/day-4"} passHref>
							<DayButton
								// onClick={(e) => onClickDay(e, 4)}
								isActive={state.selectedDayIdx === 4}
							>
								<span>DAY 04</span>
								<span>
									{state.selectedDayIdx === 4 ? (
										<AiOutlineDown />
									) : (
										<AiOutlineRight />
									)}
								</span>
							</DayButton>
						</Link>
					</li>
				</ButtonsUl>

				<React.Fragment>
					<FlexContainer>
						{day3Images.map((image, index) => (
							<figure
								onClick={() => onImageSelect(index, day3Images.length)}
								key={index}
							>
								<Image
									src={image.src}
									alt={image.alt}
									effect="blur"
									style={{
										objectFit: "contain",
									}}
									width={"100%"}
								/>
							</figure>
						))}
					</FlexContainer>
				</React.Fragment>
				{/* {state.selectedDayIdx === 4 && (
					<React.Fragment>
						<FlexContainer>
							{day4Images.map((image, index) => (
								<figure
									onClick={() => onImageSelect(index, day4Images.length)}
									key={index}
								>
									<Image
										src={image.src}
										alt={image.alt}
										effect="blur"
										style={{
											objectFit: "contain",
										}}
										width={"100%"}
									/>
								</figure>
							))}
						</FlexContainer>
					</React.Fragment>
				)} */}
			</SectionContainer>

			<Footer>
				<a
					href="https://github.com/AdVision-Group/amsterdot-client"
					rel="noopener noreferrer"
					target="_blank"
				>
					<figure>
						<AiFillGithub />
					</figure>
				</a>
			</Footer>
		</React.Fragment>
	)
}

export default PhotosPage

const ButtonsUl = styled.ul`
	display: flex;
	gap: 2rem;
	list-style: none;
	margin-bottom: 6rem;
	flex-wrap: wrap;
	justify-content: center;
`

const DayButton = styled.a<IDayButtonProps>`
	cursor: pointer;
	background: transparent;
	border: 1px solid
		${({ theme, isActive }) => (isActive ? theme.color.primary : "#707070")};
	padding: 0.7rem 1.8rem;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.fonts.primary};
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;

	span {
		display: flex;
		align-items: center;
		justify-content: center;

		&:nth-of-type(2) {
			color: ${({ theme, isActive }) =>
				isActive ? theme.color.primary : "#fff"};
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 3.7rem;
	}
`

const ModalArrowButton = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.fonts.primary};
	font-size: 1.8rem;

	&.left {
		/* left: 0;
		bottom: -8.5rem; */
		/* transform: translateY(-50%); */
	}
	&.right {
		/* right: 0;
		bottom: -8.5rem; */
		/* top: 50%; */
		/* transform: translateY(-50%); */
	}

	figure {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`

const LeftOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 50%;
	bottom: 0;
	/* background-color: red; */
`
const RightOverlay = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 50%;
	bottom: 0;
	/* background-color: blue; */
`

const TitleContainer = styled.div`
	margin-bottom: -10rem;
	max-width: 86rem;
	margin: 0 auto 1rem;
	display: flex;
	justify-content: center;
`

const Footer = styled.footer`
	display: flex;
	justify-content: center;

	figure {
		color: ${({ theme }) => theme.color.primary};
		font-size: 3rem;
	}
`

const SectionContainer = styled.section`
	padding: 12rem 3rem;

	h2 {
		font-size: 5rem;
		margin-bottom: 2rem;
		color: ${({ theme }) => theme.fonts.primary};
	}
`

const FlexContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 3rem;

	figure {
		cursor: pointer;
		max-width: 40rem;
	}

	margin-bottom: 4rem;
`

const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 999999;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;

	figure {
		/* height: 80%; */
		height: 100%;
		max-height: 80vh;

		position: relative;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 3rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			padding: 4.5rem;
		}
	}
`
