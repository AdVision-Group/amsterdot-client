// Utils
import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Hooks
import { useToggle } from "react-use"

// Icons
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"

interface IProps {
	id: string | number
	item: {
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

	return (
		<AccordionContainer>
			<AccordionHeading onClick={toggleContent}>
				<TimeRange>
					{item.time[0]} <span /> {item.time[1]}
				</TimeRange>
				<TitleContainer>
					<p>{item.title}</p>
				</TitleContainer>
				<ArrowContainer showContent={showContent}>
					{showContent ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
				</ArrowContainer>
			</AccordionHeading>
			{/* <Border /> */}

			<AnimatePresence exitBeforeEnter>
				{showContent && (
					<ContentContainer
						id={id.toString()}
						key={id}
						initial="collapsed"
						animate={showContent ? "open" : "collapsed"}
						exit={"collapsed"}
						variants={{
							open: { display: "block", opacity: 1, height: "15rem" },
							collapsed: {
								opacity: 1,
								height: 0,
								transitionEnd: { opacity: 1 },
							},
						}}
						transition={{ duration: 0.8, ease: [0.04, 0.2, 0.23, 0.98] }}
					>
						<div>{item.description}</div>
					</ContentContainer>
				)}
			</AnimatePresence>
		</AccordionContainer>
	)
}

export default SubAccordion

const TimeRange = styled.p`
	grid-area: r;

	font-size: 2rem;
	font-weight: 700;
	text-align: center;
	display: flex;
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

const AccordionContainer = styled.div`
	max-width: 120rem;
	width: 100%;
	margin: 0 auto;
	padding: 1.5rem 0;
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
	grid-template-columns: auto auto;
	grid-template-rows: auto auto;
	grid-template-areas:
		"r r"
		"t a";

	/* gap: 4rem; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto;
		gap: 5rem;
		grid-template-areas: "r t a";
		padding: 1rem 3.5rem;
	}
`

const TitleContainer = styled.div`
	grid-area: t;
	justify-self: start;
	align-self: center;
	font-size: 2.5rem;
	line-height: 1;
	font-weight: 700;
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

const ContentContainer = styled(motion.div)`
	padding: 0 1.5rem;
	color: ${({ theme }) => theme.fonts.primary};
	background-color: ${({ theme }) => theme.background.container};
	overflow: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 3.5rem;
	}
`

const Border = styled.div`
	height: 0.3rem;
	width: 100%;
	background-color: ${({ theme }) => theme.fonts.primary};
	margin: 1rem 0 1rem;
`
