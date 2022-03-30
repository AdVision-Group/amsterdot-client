// Utils
import React from "react"
import styled, { css } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Components
import Image from "next/image"
import Link from "next/link"

// Hooks
import { useToggle } from "react-use"

// Icons
import { FaTwitter, FaDiscord } from "react-icons/fa"

// Data
import { events, hackatons } from "../../utils/data"

const Header = () => {
	const [showMobileNav, toggleMobileNav] = useToggle(false)

	return (
		<React.Fragment>
			<HeaderContainer>
				<Container>
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
					<Socials>
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
						<ToggleMobileButton
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
						</ToggleMobileButton>

						<ul>
							<li>
								<Link href={"/#about"}>
									<a>WHAT IS CONFERENCE</a>
								</Link>
							</li>
							<li>
								<Link href={"/#day-1"}>
									<a>CONFERENCE PROGRAMME</a>
								</Link>
								<ul>
									{events.map((e, idx) => (
										<li key={idx}>
											<Link href={`/#${e.id}`} passHref>
												<a>0{idx + 1} day</a>
											</Link>
										</li>
									))}
								</ul>
							</li>
							<li>
								<Link href={"/#hack-2"}>
									<a>HACKATON PROGRAMME</a>
								</Link>
								<ul>
									{hackatons.map((e, idx) => (
										<li key={idx}>
											<Link href={`/#${e.id}`} passHref>
												<a>0{idx + 2} day</a>
											</Link>
										</li>
									))}
								</ul>
							</li>
						</ul>
					</MobileMenuContainer>
				)}
			</AnimatePresence>
		</React.Fragment>
	)
}

export default Header

const MobileMenuContainer = styled(motion.div)`
	position: fixed;
	right: 0;
	top: 0;
	z-index: 9999;
	bottom: 0;
	width: 28rem;
	background-color: ${({ theme }) => theme.background.primary};
	border-left: 1px solid ${({ theme }) => theme.fonts.primary};
	color: ${({ theme }) => theme.fonts.primary};

	ul {
		display: flex;
		flex-direction: column;
		list-style: none;
		/* align-items: center; */
		padding: 1.5rem;

		li {
			font-weight: 900;
			margin-bottom: 2rem;

			a {
				color: ${({ theme }) => theme.fonts.primary};
				transition: color 0.2s ease-in-out;

				&:hover {
					color: ${({ theme }) => theme.color.primary};
				}
			}
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 55rem;
		font-size: 2.2rem;

		ul {
			padding: 0 3rem;
		}
	}
`

const Socials = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

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
		gap: 1rem;
	}
`

const HeaderContainer = styled.header`
	position: fixed;
	z-index: 9999;
	left: 0;
	top: 0;
	width: 100%;
	/* background-color: #000; */
	padding: 1.5rem;
	background-color: ${({ theme }) => theme.background.primary};
	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		position: fixed;
	}
`

const Container = styled.div`
	max-width: 130rem;
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.logo {
		margin-top: 1rem;
		position: relative;
		width: 8rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
		figure {
			width: 12rem;
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
		border: 3px solid ${({ theme }) => theme.color.primary};

		div {
			background-color: ${({ theme }) => theme.color.primary};
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
