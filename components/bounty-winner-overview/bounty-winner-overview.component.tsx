// Utils
import React from "react"
import styled from "styled-components"

// Components
import Image from "../image/image.component"

interface IProps {
	logo: {
		href: string
		src: string
		alt: string
		width: number
		height: number
	}
	title: string
	description: string
	submissionIcon: {
		src: string
		alt: string
	}
	submissions: {
		link: string
		label: string
		price: string
		currency: string
	}[]

	winners: {
		label: string
		name: string
		members: {
			name: string
			avatar: {
				src: string
				alt: string
			}
		}[]
	}[]
}

const BountyWinnerOverview: React.FC<IProps> = ({
	logo,
	title,
	description,
	submissionIcon,
	submissions,
	winners,
}) => {
	return <BountyOverview></BountyOverview>
}

export default BountyWinnerOverview

const BountyOverview = styled.div`
	background-color: ${({ theme }) => theme.background.container};
	padding: 1.5rem;
	display: flex;
	flex-direction: column;

	h3 {
		font-weight: 900;
		color: ${({ theme }) => theme.color.primary};
		text-transform: uppercase;
		margin-bottom: 1.5rem;
	}

	p {
		line-height: 1.2;
		flex: 1;
	}
`
