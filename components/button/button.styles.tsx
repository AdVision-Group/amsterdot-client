import styled from "styled-components"
import { motion } from "framer-motion"

import { IButtonProps } from "./button.component"

export const ButtonContainer = styled(motion.button)<IButtonProps>`
	cursor: pointer;
	display: block;
	background-color: ${({ theme, outline }) =>
		outline ? "transparent" : theme.color.primary};
	color: ${({ theme }) => theme.fonts.primary};
	min-width: 5rem;
	width: ${({ width }) => (width ? width : "unset")};
	padding: 0.8rem 2rem;
	font-size: 1.6rem;
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
		cursor: default;
		color: ${({ theme }) => theme.color.primary};
		background-color: ${({ theme }) => theme.background.container};
	}
`
