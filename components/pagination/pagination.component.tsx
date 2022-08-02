// Utils
import React from "react"
import styled from "styled-components"

// Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

export interface IProps {
	count: number
	limit: number
	skip: number
	onClick?: (skip: number) => void
}

interface IContainerProps {
	active: boolean
}

const Pagination: React.FC<IProps> = ({ count, limit, skip, onClick }) => {
	const pages = Math.ceil(count / limit)
	const currentPage = skip / limit + 1
	const pagesArray = Array.from({ length: pages }, (_, i) => i + 1)
	// const pagesArrayWithDots = pagesArray
	// 	.map((page, i) => {
	// 		if (i === 0 || i === pagesArray.length - 1) {
	// 			return page
	// 		}
	// 		if (i === 1) {
	// 			return `${page}...`
	// 		}
	// 		if (i === pagesArray.length - 2) {
	// 			return `...${page}`
	// 		}
	// 		return null
	// 	})
	// .filter(Boolean)
	return (
		<Container>
			<PaginationContainer>
				<PaginationButton
					active={false}
					disabled={currentPage === 1}
					onClick={() => {
						if (currentPage === 1) {
							return
						}
						const newSkip = skip - limit
						if (newSkip < 0) {
							return
						}
						if (onClick) onClick(+newSkip)
					}}
				>
					<IoIosArrowBack />
				</PaginationButton>
				{pagesArray.map((page, i) => (
					<PaginationButton
						key={i}
						onClick={() => {
							if (onClick) onClick(+((page || 0) - 1) * limit)
						}}
						active={currentPage === page}
					>
						{page}
					</PaginationButton>
				))}
				<PaginationButton
					disabled={currentPage === pages}
					active={false}
					onClick={() => {
						if (currentPage === pages) {
							return
						}
						const newSkip = skip + limit
						if (newSkip >= count) {
							return
						}
						if (onClick) onClick(+newSkip)
					}}
				>
					<IoIosArrowForward />
				</PaginationButton>
			</PaginationContainer>
		</Container>
	)
}

export default Pagination

const Container = styled.div``
const PaginationContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1rem;
`
const PaginationButton = styled.button<IContainerProps>`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ active }) => (active ? "transparent" : "transparent")};
	border-radius: 50%;
	border: 1px solid
		${({ theme, active }) => (!active ? "#dfdfdf" : theme.color.primary)};
	height: 4rem;
	width: 4rem;
	color: #fff;
`
