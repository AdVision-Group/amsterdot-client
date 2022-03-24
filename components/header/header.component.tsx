// Utils
import React from "react"
import styled, { css } from "styled-components"

// Components
import Image from "next/image"

// Hooks
import { useToggle } from "react-use"

const Header = () => {
	const [showMobileNav, toggleMobileNav] = useToggle(false)

	return (
		<HeaderContainer>
			<Container>
				<figure>
					<Image
						src={"/assets/logo-amsterdot.png"}
						width={100}
						height={100}
						alt={"amsterdot logo"}
						objectFit="contain"
						layout="responsive"
					/>
				</figure>
				{/* <ToggleButton onClick={() => toggleMobileNav()} isOpen={showMobileNav}>
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
				</ToggleButton> */}
			</Container>
		</HeaderContainer>
	)
}

export default Header

const HeaderContainer = styled.header`
	/* position: fixed; */
	z-index: 9999;
	left: 0;
	top: 0;
	width: 100%;
	/* background-color: #000; */
	padding: 1.5rem;
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

	figure {
		margin-top: 1rem;
		position: relative;
		width: 8rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
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
	transition: all 0.5s ease-out;
	display: block;
	background-color: transparent;
	border: none;
	width: 7rem;
	height: 7rem;
	border: 1px solid #fff;
	border-radius: 50%;

	position: relative;
	div {
		position: absolute;
		width: 3.5rem;
		height: 2.5px;
		background-color: ${({ theme }) => theme.fonts.primary};
		transition: all 0.3s ease-in-out;
		${(props) =>
			props.isOpen
				? css`
						&:nth-child(1) {
							top: 3.2rem;
							left: 1.8rem;
							transform: rotate(45deg);
						}
						&:nth-child(2) {
							opacity: 0;
							left: 1.6rem;
						}
						&:nth-child(3) {
							bottom: 3.3rem;
							left: 1.7rem;
							transform: rotate(-45deg);
						}
				  `
				: css`
						&:nth-child(1) {
							top: 2rem;
							left: 1.6rem;
						}
						&:nth-child(2) {
							top: 50%;
							left: 1.6rem;

							transform: translateY(-50%);
						}
						&:nth-child(3) {
							bottom: 2rem;
							left: 1.6rem;
						}
				  `}
	}
	/* } */
`
