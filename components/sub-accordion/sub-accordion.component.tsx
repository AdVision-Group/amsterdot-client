// Utils
import React from "react"
import styled, { css } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Components
import Image from "next/image"

// Hooks
import {
	useToggle,
	// useWindowSize
} from "react-use"

// Icons
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"

import { AiFillYoutube } from "react-icons/ai"

interface IProps {
	id: string | number
	item: {
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
	}
	isWorkshop?: boolean
}

const SubAccordion: React.FC<IProps> = ({ item, id, isWorkshop }) => {
	const [showContent, toggleContent] = useToggle(false)
	// const { width } = useWindowSize()

	// console.log(width)

	return (
		<AccordionContainer isactive={showContent}>
			<AccordionHeading onClick={toggleContent} isWorkshop={!!isWorkshop}>
				<YoutubeContainer hasLink={!!item.youtubeLink}>
					{!!item.youtubeLink && (
						<a
							href={item.youtubeLink || "#"}
							rel="noopener noreferrer"
							target="_blank"
						>
							<figure>
								<AiFillYoutube />
								{/* <AiOutlineYoutube /> */}
							</figure>
							<p>WATCH</p>
						</a>
					)}
				</YoutubeContainer>
				<TimeRange>
					{item.time[0]} <span /> {item.time[1]}
				</TimeRange>
				<TitleContainer isWorkshop={!!isWorkshop}>
					<p>{item.title}</p>
				</TitleContainer>
				{item.user && <Border showBorder={true} />}
				{item.user && (
					<UserContainer>
						<figure>
							<Image
								src={item.user.img.src}
								width={100}
								height={100}
								alt={item.user.img.alt}
								objectFit="contain"
								layout="responsive"
								placeholder="blur"
								blurDataURL={item.user.img.blurDataURL}
							/>
						</figure>
						<h4>{item.user.subTitle}</h4>
						<h3>{item.user.title}</h3>
					</UserContainer>
				)}
				{item.user && (
					<ArrowContainer showContent={showContent}>
						{showContent ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
					</ArrowContainer>
				)}
				{!item.user && (
					<ArrowContainer2 showContent={showContent}>
						{showContent ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
					</ArrowContainer2>
				)}
			</AccordionHeading>

			<AnimatePresence exitBeforeEnter>
				{showContent && (
					<ContentContainer
						id={id.toString()}
						key={id}
						initial="collapsed"
						animate={showContent ? "open" : "collapsed"}
						exit={"collapsed"}
						variants={{
							open: {
								display: "block",
								opacity: 1,
								// height: width <= 858 ? "64rem" : "28rem",
								height: "auto",
							},
							collapsed: {
								opacity: 1,
								height: 0,
								transitionEnd: { opacity: 1 },
							},
						}}
						transition={{ duration: 0.8, ease: [0.04, 0.2, 0.23, 0.98] }}
					>
						<Border showBorder={!!item.user} />
						{!item.user && <Border showBorder={true} />}

						<div>
							{item.description}
							<p style={{ opacity: 0 }}>{"⠀"}</p>
						</div>
					</ContentContainer>
				)}
			</AnimatePresence>
		</AccordionContainer>
	)
}

export default SubAccordion

const YoutubeContainer = styled.div<{ hasLink: boolean }>`
	grid-area: y;
	position: relative;
	z-index: 1;

	a {
		color: ${({ theme }) => theme.fonts.primary};
		font-weight: 900;
		font-size: 1.2rem;
	}

	figure {
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 3rem;
		color: ${({ theme }) => theme.color.primary};
	}
	justify-self: end;
	/* padding-top: 1.5rem; */
	padding-right: ${({ hasLink }) => (hasLink ? "1.5rem" : "0")};
	padding-top: ${({ hasLink }) => (hasLink ? "1.5rem" : "0")};

	align-self: center;
	a {
		font-size: 1.6rem;
	}

	figure {
		font-size: 4.5rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		align-self: stretch;
		/* content: ""; */
		padding-right: unset;
		padding-top: unset;
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 2rem;
			background-color: #313131;
			height: 100%;
			font-size: 1.4rem;
		}

		figure {
			font-size: 3rem;
		}
		/* position: absolute; */
		/* top: -1.9rem;
		left: -1.8rem;
		right: -1.8rem;
		bottom: -1.9rem;
		z-index: -1; */
	}
`

const UserContainer = styled.div`
	grid-area: u;

	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: auto;
	margin-top: 2rem;
	margin-bottom: 2rem;
	margin-left: 1.5rem;

	figure {
		grid-row: 1/3;
		position: relative;
		width: 8rem;
		height: 8rem;
		margin-right: 1.5rem;
		border-radius: 50%;
		overflow: hidden;
		/* border: 1px solid red; */
		align-self: center;
		justify-self: center;

		img {
			object-fit: contain;
			/* transform: scale(1.4); */
		}
	}

	h4 {
		align-self: end;
		font-weight: 400;
		font-size: 1.4rem;
	}

	h3 {
		font-size: 2.5rem;
		font-weight: 900;
		color: ${({ theme }) => theme.color.primary};
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 0;
		margin-bottom: 0;
		border-left: 2px solid #333;
		margin-left: unset;

		figure {
			width: 6rem;
			height: 6rem;
			margin: auto 1.5rem;
		}
	}
`

const Border = styled.div<{ showBorder?: boolean }>`
	display: ${({ theme, showBorder }) => (showBorder ? "block" : "none")};
	grid-area: b;
	height: 0.2rem;
	width: calc(100% - 3rem);
	background-color: ${({ theme }) => theme.fonts.primary};
	margin: 1rem 1.5rem 2rem;
`

const TimeRange = styled.p`
	grid-area: r;
	padding: 1.5rem;
	font-size: 2rem;
	font-weight: 900;
	text-align: center;
	display: flex;
	align-self: end;
	align-items: center;
	justify-content: start;

	span {
		display: inline-flex;
		width: 4rem;
		height: 3px;
		background-color: #fff;
		margin: 0 1rem;
		align-items: center;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
		align-self: center;
	}
`

const workshopGrid = css`
	grid-template-areas:
		"r y"
		"t t"
		"b b"
		"u a";
`
const workshoplessGrid = css`
	grid-template-areas:
		"r y"
		"t s"
		"b b"
		"u a";
`

const AccordionHeading = styled(motion.div)<{ isWorkshop: boolean }>`
	cursor: pointer;
	/* width: 100%; */
	padding: 0;
	/* margin-bottom: 1rem; */
	border: none;
	color: ${({ theme }) => theme.fonts.primary};
	background-color: ${({ theme }) => theme.background.container};
	display: grid;
	/* grid-template-columns: auto auto;
	grid-template-rows: auto auto auto; */
	${({ isWorkshop }) => (isWorkshop ? workshopGrid : workshoplessGrid)};

	/* gap: 1rem; */
	/* gap: 4rem; */
	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: auto auto 1fr minmax(auto, 31.5rem) auto;
		grid-template-rows: auto;
		/* gap: 1.5rem; */
		grid-template-areas: " r t y u  a s";
		/* padding: 0.8rem 2.5rem; */

		${Border} {
			display: none;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			/* gap: 5rem; */
		}
	}
`

const ContentContainer = styled(motion.div)`
	padding: 0 1.5rem;
	color: ${({ theme }) => theme.fonts.primary};
	background-color: ${({ theme }) => theme.background.container};
	overflow: hidden;
	line-height: 1.7;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 3.5rem;
	}
`

const AccordionContainer = styled.div<{ isactive: boolean }>`
	position: relative;

	max-width: 120rem;
	width: 100%;
	margin: 0 auto;
	padding: 1.5rem 0;

	${AccordionHeading} {
		background-color: ${({ theme, isactive }) =>
			isactive ? theme.background.activeContainer : theme.background.container};
	}

	${ContentContainer} {
		background-color: ${({ theme, isactive }) =>
			isactive ? theme.background.activeContainer : theme.background.container};
	}
`

const TitleContainer = styled.div<{ isWorkshop: boolean }>`
	grid-area: t;
	justify-self: start;
	align-self: center;
	text-transform: uppercase;
	padding: 0 1.5rem 1rem;
	font-size: 2.5rem;
	line-height: 1.2;
	font-weight: 900;
	color: ${({ theme }) => theme.color.primary};
	max-width: ${({ isWorkshop }) => (isWorkshop ? "unset" : "95%")};

    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		align-self: center;
		padding-left: 1.5rem;
		padding: 1.5rem;


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
	margin-right: 1.2rem;
	padding-top: 1rem;
	/* border: 1px solid red; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-column: 5/6;
		margin-right: unset;
		margin-right: 3.15rem;
	}
`

const ArrowContainer2 = styled.span<{ showContent: boolean }>`
	/* position: absolute; */
	/* bottom: 1.5rem;
	right: 1.2rem; */
	grid-area: s;
	display: block;
	color: ${({ theme, showContent }) =>
		showContent ? theme.color.primary : theme.fonts.primary};
	font-size: 5rem;
	margin-right: 1.4rem;
	align-self: center;
	justify-self: end;
	margin-bottom: -1.5rem;
	padding-top: 1rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-right: 3.3rem;
	}
`
