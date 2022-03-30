// Utils
import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Components
import Image from "next/image"

// Hooks
import { useToggle, useWindowSize } from "react-use"

// Icons
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"

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
		subTitle: string
		description: string
	}
}

const SubAccordion: React.FC<IProps> = ({ item, id }) => {
	const [showContent, toggleContent] = useToggle(false)
	const { width } = useWindowSize()

	// console.log(width)

	return (
		<AccordionContainer isactive={showContent}>
			<AccordionHeading onClick={toggleContent}>
				<TimeRange>
					{item.time[0]} <span /> {item.time[1]}
				</TimeRange>
				<TitleContainer>
					<p>{item.title}</p>
				</TitleContainer>
				{item.user && <Border />}
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
								height: width <= 858 ? "20rem" : "12rem",
							},
							collapsed: {
								opacity: 1,
								height: 0,
								transitionEnd: { opacity: 1 },
							},
						}}
						transition={{ duration: 0.8, ease: [0.04, 0.2, 0.23, 0.98] }}
					>
						{/* <Border /> */}
						{!item.user && <Border />}

						<div>{item.description}</div>
					</ContentContainer>
				)}
			</AnimatePresence>
		</AccordionContainer>
	)
}

export default SubAccordion

const UserContainer = styled.div`
	grid-area: u;

	display: grid;
	grid-template-columns: auto 1fr;
	margin-bottom: 1rem;

	figure {
		grid-row: 1/3;
		position: relative;
		width: 8rem;
		margin-right: 1.5rem;
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
		margin-bottom: 0;

		figure {
			width: 6rem;
		}
	}
`

const Border = styled.div`
	grid-area: b;
	height: 0.2rem;
	width: 100%;
	background-color: ${({ theme }) => theme.fonts.primary};
	margin: 1rem 0 2rem;
`

const TimeRange = styled.p`
	grid-area: r;

	font-size: 2rem;
	font-weight: 900;
	text-align: center;
	display: flex;
	align-self: end;
	align-items: center;
	justify-content: start;

	span {
		display: inline-block;
		width: 4rem;
		height: 3px;
		background-color: #fff;
		margin: 0 1rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		/* display: none; */
	}
`

const AccordionHeading = styled(motion.div)`
	cursor: pointer;
	/* width: 100%; */
	padding: 1rem;
	/* margin-bottom: 1rem; */
	border: none;
	color: ${({ theme }) => theme.fonts.primary};
	background-color: ${({ theme }) => theme.background.container};
	display: grid;
	/* grid-template-columns: auto auto;
	grid-template-rows: auto auto auto; */
	grid-template-areas:
		"r r"
		"t s"
		"b b"
		"u a";

	/* gap: 1rem; */
	/* gap: 4rem; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto;
		gap: 1.8rem;
		grid-template-areas: "r t u a";
		padding: 1rem 3.5rem;

		${Border} {
			display: none;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			gap: 5rem;
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

const TitleContainer = styled.div`
	grid-area: t;
	justify-self: start;
	align-self: center;
	text-transform: uppercase;
	font-size: 2.5rem;
	line-height: 1;
	font-weight: 900;
	color: ${({ theme }) => theme.color.primary};

    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		align-self: center;

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

const ArrowContainer2 = styled.span<{ showContent: boolean }>`
	grid-area: s;
	display: block;
	color: ${({ theme, showContent }) =>
		showContent ? theme.color.primary : theme.fonts.primary};
	font-size: 5rem;
	align-self: center;
	justify-self: end;
	margin-bottom: -1.5rem;
	padding-top: 1rem;
`
