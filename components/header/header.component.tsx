// Utils
import React, { useEffect } from "react"
import styled, { css } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Components
import Image from "next/image"
import Link from "next/link"
import Button from "../button/button.component"
import VideoModal from "../video-modal/video-modal.component"

// Hooks
import { useToggle } from "react-use"

// Icons
import { FaTwitter, FaDiscord } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

// Data
import { events, hackatons } from "../../utils/data"

interface IProps {
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
}

const Header: React.FC<IProps> = ({
	openEventDayProgram,
	openHackathonDayProgram,
}) => {
	const [showMobileNav, toggleMobileNav] = useToggle(false)
	const [isOnTop, toggleIsOnTop] = useToggle(true)
	const [showCTAs, toggleShowCTAs] = useToggle(true)

	const [showModal, toggleModal] = useToggle(false)

	useEffect(() => {
		if (typeof window !== "undefined") {
			// Client-side-only code
			window.onscroll = () => {
				let currentScrollPos = window.pageYOffset
				if (currentScrollPos > 80) {
					toggleIsOnTop(false)
				} else {
					if (currentScrollPos <= 0) return
					toggleIsOnTop(true)
				}
				if (currentScrollPos > 450) {
					toggleShowCTAs(false)
				} else {
					if (currentScrollPos <= 0) return
					toggleShowCTAs(true)
				}
			}
		}
	})

	// console.log(showMobileNav)

	return (
		<React.Fragment>
			{showModal && (
				<AnimatePresence exitBeforeEnter>
					<VideoModal onClose={toggleModal} />
				</AnimatePresence>
			)}
			<HeaderContainer isOnTop={isOnTop}>
				<Container>
					<LogoContainer>
						<Link href={"/"} passHref>
							<a>
								<figure className="logo">
									<Image
										src={"/assets/Logo-bg.svg"}
										width={100}
										height={100}
										alt={"amsterdot logo"}
										objectFit="contain"
										layout="responsive"
									/>
								</figure>
							</a>
						</Link>
					</LogoContainer>
					<AnimatePresence>
						{!showCTAs && (
							<ButtonsContainer
							// initial={{
							// 	opacity: 0,
							// 	scale: 0.97,
							// }}
							// animate={{
							// 	opacity: 1,
							// 	scale: 1,
							// }}
							// exit={{
							// 	opacity: 0,
							// 	scale: 0.97,
							// }}
							// justifyContent="center"
							>
								<Link href={"/#bounties"} passHref>
									<a>
										<Button>BOUNTIES</Button>
									</a>
								</Link>
								<a
									rel="noopener noreferrer"
									target="_blank"
									href="https://youtube.com/playlist?list=PLpyT58HowFcU-pM-Q9Ms9eq0mRSP950ky"
								>
									<Button outline={"true"}>CONF VIDS</Button>
								</a>
							</ButtonsContainer>
						)}
					</AnimatePresence>
					<Socials>
						{/* <Link href={"/#bounties"} passHref> */}
						{/* <a href="#" className="after-movie">
							<Button onClick={toggleModal} outline={"true"}>
								AFTERMOVIE
							</Button>
						</a> */}
						{/* </Link> */}
						<a
							href="https://twitter.com/amsterdot_conf"
							rel="noopener noreferrer"
							target="_blank"
						>
							<motion.figure
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{
									scale: 0.97,
								}}
							>
								<FaTwitter />
							</motion.figure>
						</a>
						<a
							href="https://discord.gg/Vg2ex2Y93f"
							rel="noopener noreferrer"
							target="_blank"
						>
							<motion.figure
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{
									scale: 0.97,
								}}
							>
								<FaDiscord />
							</motion.figure>
						</a>
						<ToggleButton
							onClick={() => toggleMobileNav()}
							isOpen={showMobileNav}
						>
							<div />
							<div />
							<div />
							<span
								style={{
									position: "absolute",
									visibility: "hidden",
									opacity: 0,
									display: "none",
								}}
							>
								menu
							</span>
						</ToggleButton>
					</Socials>
				</Container>
			</HeaderContainer>
			<AnimatePresence>
				{showMobileNav && (
					<React.Fragment>
						<Overlay
							initial={{
								opacity: 0,
								// x: 1000,
							}}
							animate={{
								opacity: 1,
								// x: 0,
							}}
							exit={{
								opacity: 0,
								// x: 1000,
							}}
							transition={{
								duration: 0.8,
							}}
							onClick={toggleMobileNav}
						/>
						<MobileMenuContainer
							initial={{
								// opacity: 0,
								x: 1000,
							}}
							animate={{
								// opacity: 1,
								x: 0,
							}}
							exit={{
								// opacity: 0,
								x: 1000,
							}}
							transition={{
								duration: 0.8,
							}}
						>
							{/* <ToggleMobileButton
								onClick={() => toggleMobileNav()}
								isOpen={showMobileNav}
							>
								<div />
								<div />
								<div />
								<span
									style={{
										position: "absolute",
										visibility: "hidden",
										opacity: 0,
										display: "none",
									}}
								>
									menu
								</span>
							</ToggleMobileButton> */}

							<Ul>
								<li className="first">
									<Link href={"/#hackaton-content"}>
										<a onClick={toggleMobileNav}>HACKATON</a>
									</Link>
								</li>
								<li>
									<Link href={"/#bounties-h"}>
										<a onClick={toggleMobileNav}>BOUNTIES</a>
									</Link>
								</li>
								<li>
									<Link href={"/#about"}>
										<a onClick={toggleMobileNav}>WHAT IS amsterDOT</a>
									</Link>
								</li>
								<li>
									<Link href={"/#after-movie"}>
										<a onClick={toggleMobileNav}>AFTERMOVIE</a>
									</Link>
								</li>
								<li>
									<Link href={"/#day-1"}>
										<a onClick={toggleMobileNav}>CONFERENCE PROGRAM</a>
									</Link>
									<NestedUl>
										{events.map((e, idx) => (
											<li key={idx}>
												{/* <Link href={`/#${e.id}`} passHref> */}
												<a
													onClick={() => {
														openEventDayProgram(true, idx, e.id)
														toggleMobileNav()
													}}
												>
													#{idx + 1} DAY
												</a>
												{/* </Link> */}
											</li>
										))}
									</NestedUl>
								</li>
								<li>
									<Link href={"/#hack-2"}>
										<a onClick={toggleMobileNav}>WOKSHOP PROGRAM</a>
									</Link>
									<NestedUl>
										{hackatons.map((e, idx) => (
											<li key={idx}>
												{/* <Link href={`/#${e.id}`} passHref> */}

												<a
													onClick={() => {
														openHackathonDayProgram(true, idx, e.id)
														toggleMobileNav()
													}}
												>
													#{idx + 2} DAY
												</a>
												{/* </Link> */}
											</li>
										))}
									</NestedUl>
								</li>

								<li style={{ opacity: 0 }}>x</li>
								<EmailLi>
									<figure>
										<FiMail />
									</figure>
									<a
										style={{ textDecoration: "underline" }}
										href="mailto:amsterdot@hydradx.io"
									>
										amsterdot@hydradx.io
									</a>
								</EmailLi>
							</Ul>
							{/* <ButtonsContainer justifyContent="flex-start">
								<Link href={"/#bounties"} passHref>
									<a className="after-movie-sidebar">
										<Button outline={"true"}>AFTERMOVIE</Button>
									</a>
								</Link>
	
							</ButtonsContainer> */}
						</MobileMenuContainer>
					</React.Fragment>
				)}
			</AnimatePresence>
		</React.Fragment>
	)
}

export default Header

const EmailLi = styled.li`
	font-weight: 700 !important;
	display: flex;
	align-items: center;

	figure {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-right: 0.5rem;
	}
`

const ButtonsContainer = styled(motion.div)<{ justifyContent?: string }>`
	grid-area: b;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	/* margin-top: 2rem; */
	/* margin: 2rem 0; */
	display: flex;
	padding: 1.5rem 0 0;

	.after-movie-sidebar {
		padding-left: 1.5rem;
		padding-bottom: 1.5rem;
		margin-top: 2rem;
		margin-right: auto;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding-left: 3rem;

			@media all and (min-width: 865px) {
				/* justify-content: flex-end; */

				button {
					display: none;
				}
			}
		}
	}

	button {
		font-family: "Avenir Next";
		font-size: 1.5rem;
		font-weight: 700;
		padding: 1rem 1rem 0.8rem;
		/* transition: all 0.3s ease-in-out; */
		/* background-color:  */
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		/* flex-gap: 1rem; */
		/* align-items: end; */
		justify-content: ${({ justifyContent }) =>
			justifyContent || "space-between"};
		flex-wrap: unset;

		gap: 2rem;

		button {
			font-size: 2rem;
			line-height: 1;
			/* margin-bottom: 1rem; */
		}
		button:nth-of-type(1) {
			/* font-size: 2rem; */
			/* margin-right: 1rem; */
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: ${({ justifyContent }) =>
				justifyContent === "flex-end" ? "flex" : "flex"};
			padding-left: 3rem;
			justify-content: flex-end;
			padding: 0;

			button {
				/* font-size: 3rem; */
				padding: 1.2rem 2rem 0.8rem;
				font-weight: 400;
			}
			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				button {
					font-size: 3rem;
					padding: 1.8rem 4rem 1.5rem;
				}
			}
		}
	}
`

const LogoContainer = styled(motion.div)`
	grid-area: l;
`

const Overlay = styled(motion.div)`
	position: fixed;
	right: 0;
	top: 0;
	z-index: 999;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
`

const MobileMenuContainer = styled(motion.div)`
	position: fixed;
	right: 0;
	top: 0;
	z-index: 9999;
	bottom: 0;
	width: 25rem;
	background-color: ${({ theme }) => theme.background.primary};
	border-left: 1px solid ${({ theme }) => theme.fonts.primary};
	color: ${({ theme }) => theme.fonts.primary};
	/* opacity: 0.6; */
	padding-top: 18rem;
	overflow-y: auto;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 55rem;
		font-size: 2.2rem;

		ul {
			padding: 0 3rem;
		}
	}
`

const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	/* align-items: center; */
	padding: 1.5rem;

	li {
		font-weight: 900;
		margin-bottom: 1rem;

		&.first {
			/* margin-bottom: 2rem; */
		}

		a {
			cursor: pointer;
			color: ${({ theme }) => theme.fonts.primary};
			transition: color 0.2s ease-in-out;

			&:hover {
				color: ${({ theme }) => theme.color.primary};
			}
		}
	}
	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		ul {
			padding: 0 3rem;
		}
	}
`
const NestedUl = styled.ul`
	margin-top: 0rem;
	list-style: none;
	padding: 0.5rem 1.5rem;

	li {
		font-weight: 400 !important;
		margin-bottom: 0rem;

		&:nth-of-type(4) {
			margin-bottom: 1rem;
		}
	}
	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 0.5rem;
	}
`

const Socials = styled.div`
	grid-area: s;
	display: flex;
	align-items: center;
	justify-self: end;
	gap: 1rem;

	.after-movie {
		button {
			display: none;
			/* padding: 1.5rem 2.5rem; */
			margin-right: 1rem;
			font-size: 1.5rem;
		}

		@media all and (min-width: 865px) {
			gap: 1rem;

			button {
				display: block;
				/* padding: 1.5rem 2.5rem; */
				margin-right: 1rem;
				font-size: 2rem;
				font-weight: 400;
				line-height: 1;
			}
		}
	}

	a {
		/* background-color: ${({ theme }) => theme.background.primary}; */
		/* padding: 1rem; */
		border-radius: 50%;
	}

	figure {
		color: #fff;

		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${({ theme }) => theme.background.primary};
		border: 3px solid ${({ theme }) => theme.color.primary};
		border-radius: 50%;
		padding: 1.5rem;
		font-size: 2.4rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
	}
`

const HeaderContainer = styled.header<{ isOnTop: boolean }>`
	position: fixed;
	z-index: 999999;
	left: 0;
	top: 0;
	width: 100%;
	/* background-color: #000; */
	padding: 1.5rem;
	transition: background-color 0.3s ease-in-out;

	background-color: ${({ theme, isOnTop }) =>
		isOnTop ? "transparent" : theme.background.primary};
	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		position: fixed;
	}
`

const Container = styled.div`
	max-width: 130rem;
	width: 100%;
	margin: 0 auto;
	display: grid;
	/* justify-content: space-between;
	align-items: center; */
	grid-template-areas:
		"l s"
		"b b";

	.logo {
		margin-top: 1rem;
		position: relative;
		width: 8rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: auto 1fr auto;
		grid-template-areas: "l b s";
		gap: 1.5rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
			figure {
				/* width: 12rem; */
			}
		}
	}
`

const ToggleButton = styled.button<{ isOpen: boolean }>`
	cursor: pointer;
	/* cursor: pointer;
	display: none;
	outline: none;
	border: 1px solid #fff;
	background-color: transparent;
	&:focus {
		outline: none;
	} */
	/* @media all and (max-width: 1220px) { */
	background-color: ${({ theme }) => theme.background.primary};

	transition: all 0.5s ease-out;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: transparent; */
	border: none;
	width: 6rem;
	height: 6rem;
	border: 3px solid #fff;
	border-radius: 50%;

	position: relative;
	div {
		position: absolute;
		width: 2.5rem;
		height: 0.2rem;
		background-color: ${({ theme }) => theme.fonts.primary};
		transition: all 0.3s ease-in-out;
		${(props) =>
			props.isOpen
				? css`
						&:nth-child(1) {
							top: 2.7rem;
							left: 1.4rem;
							transform: rotate(45deg);
						}
						&:nth-child(2) {
							opacity: 0;
							left: 1.6rem;
						}
						&:nth-child(3) {
							bottom: 2.5rem;
							left: 1.4rem;
							transform: rotate(-45deg);
						}
				  `
				: css`
						&:nth-child(1) {
							top: 2rem;
							left: 1.4rem;
						}
						&:nth-child(2) {
							top: 50%;
							left: 1.4rem;

							transform: translateY(-50%);
						}
						&:nth-child(3) {
							bottom: 2rem;
							left: 1.4rem;
						}
				  `}
	}

	&:hover {
		border: 3px solid ${({ theme }) => theme.fonts.primary};

		div {
			background-color: ${({ theme }) => theme.fonts.primary};
		}
	}
	/* } */
`
const ToggleMobileButton = styled.button<{ isOpen: boolean }>`
	cursor: pointer;
	position: absolute;
	top: 3rem;
	left: -8rem;
	/* cursor: pointer;
	display: none;
	outline: none;
	border: 1px solid #fff;
	background-color: transparent;
	&:focus {
		outline: none;
	} */
	/* @media all and (max-width: 1220px) { */
	background-color: ${({ theme }) => theme.background.primary};

	transition: all 0.5s ease-out;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: transparent; */
	border: none;
	width: 6rem;
	height: 6rem;
	border: 3px solid #fff;
	border-radius: 50%;

	position: relative;
	div {
		position: absolute;
		width: 2.5rem;
		height: 0.2rem;
		background-color: ${({ theme }) => theme.fonts.primary};
		transition: all 0.3s ease-in-out;
		${(props) =>
			props.isOpen
				? css`
						&:nth-child(1) {
							top: 2.7rem;
							left: 1.4rem;
							transform: rotate(45deg);
						}
						&:nth-child(2) {
							opacity: 0;
							left: 1.6rem;
						}
						&:nth-child(3) {
							bottom: 2.5rem;
							left: 1.4rem;
							transform: rotate(-45deg);
						}
				  `
				: css`
						&:nth-child(1) {
							top: 2rem;
							left: 1.4rem;
						}
						&:nth-child(2) {
							top: 50%;
							left: 1.4rem;

							transform: translateY(-50%);
						}
						&:nth-child(3) {
							bottom: 2rem;
							left: 1.4rem;
						}
				  `}
	}

	&:hover {
		border: 3px solid ${({ theme }) => theme.color.primary};
		div {
			background-color: ${({ theme }) => theme.color.primary};
		}
	}
	/* } */
`
