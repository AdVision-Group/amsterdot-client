// Utils
import React from "react"
import styled from "styled-components"

// Icons
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

export interface IProps {
	count: number
	limit: number
	skip: number
	onClick?: (skip: number, currentPage: number) => void
}

interface IContainerProps {
	active: boolean
	isArrov: boolean
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
					isArrov={true}
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
						if (onClick) onClick(+newSkip, currentPage - 1)
					}}
				>
					<FaAngleLeft />
				</PaginationButton>
				{pagesArray.map((page, i) => (
					<PaginationButton
						isArrov={false}
						key={i}
						onClick={() => {
							if (onClick) onClick(+((page || 0) - 1) * limit, page)
						}}
						active={currentPage === page}
					>
						{page}
					</PaginationButton>
				))}
				<PaginationButton
					isArrov={true}
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
						if (onClick) onClick(+newSkip, currentPage + 1)
					}}
				>
					<FaAngleRight />
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
	border: ${({ theme, active, isArrov }) =>
		isArrov
			? "none"
			: !active
			? "1px solid #dfdfdf"
			: `1px solid ${theme.color.primary}`};
	height: 4rem;
	width: 4rem;
	color: #fff;

	.arrow {
		/* border: none !important; */
	}
`
