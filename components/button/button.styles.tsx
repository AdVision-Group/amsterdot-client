import styled from "styled-components"
import { motion } from "framer-motion"

import { IButtonProps } from "./button.component"

export const ButtonContainer = styled(motion.button)<IButtonProps>`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme, outline }) =>
		outline ? "transparent" : theme.color.primary};
	color: ${({ theme }) => theme.fonts.primary};
	min-width: 5rem;
	width: ${({ width }) => (width ? width : "unset")};
	padding: 1.2rem 2rem 0.8rem;
	/* font-size: 1.6rem; */
	font-family: inherit;
	font-weight: bolder;
	border-radius: ${({ rounded }) => (rounded ? "999rem" : ".1rem")};
	border: ${({ theme, outline }) =>
		outline
			? `2px solid ${theme.color.primary}`
			: `2px solid ${theme.color.primary}`};
	outline: none;
	margin: ${({ left, right, top, bottom }) =>
		`${top || 0} ${right || 0} ${bottom || 0} ${left || 0}`};
	&:focus {
		outline: none;
	}

	&:disabled {
		position: relative;
		cursor: default;
		/* opacity: 0.4; */
		color: ${({ theme }) => theme.fonts.primary};
		background-color: ${({ theme }) => theme.background.activeContainer};
		border: ${({ theme, outline }) =>
			outline
				? `2px solid ${theme.background.activeContainer}`
				: `2px solid ${theme.background.activeContainer}`};
	}
`
