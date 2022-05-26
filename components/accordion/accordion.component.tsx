// Utils
import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Components
import SubAccordion from "../sub-accordion/sub-accordion.component"

// Hooks
// import { useToggle } from "react-use"

// Icons
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"

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
			user?: {
				img: {
					src: string
					alt: string
					blurDataURL: string
				}
				title: string
				subTitle: string
			}
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
			youtubeLink?: string
			subTitle: string
			description: string
		}[]
		hasArrowDown?: boolean
	}
	showContent: boolean
	openEventDayProgram: (
		showContent: boolean,
		idx: number,
		dayID: string
	) => void
	openHackathonDayProgram: (
		showContent: boolean,
		idx: number,
		dayID: string
	) => void
	idx: number
	dayID: string
	isWorkshop?: boolean
}

const Accordion: React.FC<IProps> = ({
	item,
	showContent,
	openEventDayProgram,
	openHackathonDayProgram,
	idx,
	dayID,
	isWorkshop,
}) => {
	return (
		<AccordionContainer id={dayID} isactive={showContent}>
			<AccordionHeading
				onClick={() =>
					dayID.includes("hack")
						? openHackathonDayProgram(!showContent, idx, dayID)
						: openEventDayProgram(!showContent, idx, dayID)
				}
			>
				<LabelContainer>
					<p>{item.day}</p>
					<p>DAY</p>
				</LabelContainer>
				<TitleContainer>
					<p>{item.title}</p>
				</TitleContainer>
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
				<ArrowContainer showContent={showContent}>
					{showContent ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
				</ArrowContainer>
			</AccordionHeading>
			<AnimatePresence initial={false}>
				{showContent && (
					<ContentContainer
						id={item.id}
						key={item.id}
						initial="collapsed"
						animate={showContent ? "open" : "collapsed"}
						exit={"collapsed"}
						variants={{
							open: { opacity: 1, height: "auto" },
							collapsed: {
								opacity: 1,
								height: 0,
							},
						}}
						transition={{ duration: 1, ease: "linear" }}
					>
						{item.items.map((i, idx) => (
							<SubAccordion
								item={i}
								id={idx}
								key={idx}
								isWorkshop={isWorkshop}
							/>
						))}
					</ContentContainer>
				)}
			</AnimatePresence>
		</AccordionContainer>
	)
}

export default Accordion

const LabelContainer = styled.div`
	grid-area: l;
	position: relative;
	z-index: 1;
	background-color: ${({ theme }) => theme.color.primary};
	/* display: inline-block; */
	color: ${({ theme }) => theme.fonts.secondary};
	font-weight: 400;
	font-size: 2.5rem;
	text-align: center;
	line-height: 1;
	justify-self: start;
	padding: 1rem;
	margin-top: -4rem;
	/* filter: blur(1rem); */

	p {
		font-weight: 900;
	}

	p:nth-of-type(1) {
		font-size: 4.5rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			margin-top: -3rem;
			margin-bottom: 2rem;
			/* margin-left: 3rem; */
			/* font-size: 3.5rem; */
		}
	}
`

const DateContainer = styled.div`
	grid-area: d;
	width: 100%;
	max-width: 10rem;
	/* border: 1px solid green; */
	font-size: 2.2rem;
	line-height: 1.1;
	text-align: center;
	justify-self: end;

	p {
		font-family: "Avenir Next";
		font-weight: 900;
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
		align-self: center;

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

const AccordionHeading = styled(motion.div)`
	cursor: pointer;
	/* width: 100%; */
	padding: 1rem;
	/* margin-bottom: 1rem; */
	border: none;
	color: ${({ theme }) => theme.fonts.primary};
	/* background-color: ${({ theme }) => theme.background.container}; */
	display: grid;
	grid-template-columns: auto auto;
	grid-template-rows: auto auto;
	grid-template-areas:
		"l d"
		"t a";

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: auto 1fr 1fr auto;
		grid-template-rows: auto;
		gap: 3rem;
		grid-template-areas: "l t d a";
		padding: 1rem 3rem;
	}
`

const AccordionContainer = styled.div<{ isactive: boolean }>`
	scroll-margin-top: 20rem;
	scroll-padding-top: 20rem;
	position: relative;

	max-width: 130rem;
	width: 100%;
	margin: 0 auto 1rem;
	padding: 3rem 1.5rem;

	${AccordionHeading} {
		background-color: ${({ theme, isactive }) =>
			isactive ? theme.background.activeContainer : theme.background.container};
	}
`

const ArrowContainer = styled.span<{ showContent: boolean }>`
	grid-area: a;
	display: block;
	color: ${({ theme, showContent }) =>
		showContent ? theme.color.primary : theme.fonts.primary};
	font-size: 5rem;
	align-self: center;
	justify-self: end;
	margin-bottom: -1.5rem;
	padding-top: 1rem;
`

const TitleContainer = styled.div`
	grid-area: t;
	justify-self: start;
	align-self: center;
	line-height: 1;
	font-size: 2.5rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		align-self: center;
		p {
			font-size: 5rem;
		}
		/* maring-left: 2rem; */
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const ContentContainer = styled(motion.div)`
	padding-top: 1.5rem;
	color: ${({ theme }) => theme.fonts.primary};

	/* border: 1px solid red; */
	/* margin-bottom: 2rem; */
	overflow: hidden;

	p {
		text-align: start;
	}

	.table-container {
		width: 100%;
		overflow-x: auto;
	}
`
