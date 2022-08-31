// Utils
import React from "react"
import styled from "styled-components"

// Components
import Spinner from "../spinner/spinner.component"
import Image from "../image/image.component"

// Hooks
import { useToggle } from "react-use"

interface IState {
	limit: number
	skip: number
	page: number
}

interface IProps {
	src: string
	alt: string
	index: number
	dayImagesLength: number
	state: IState
	dayNumber: number
	onImageSelect: (
		index: number,
		dayImagesLength: number,
		state: IState,
		dayNumber: number
	) => void
}

const PhotoOverview: React.FC<IProps> = ({
	index,
	dayImagesLength,
	state,
	dayNumber,
	onImageSelect,
	src,
	alt,
}) => {
	const [isLoaded, toggleIsLoaded] = useToggle(false)

	return (
		<Figure
			onClick={() => onImageSelect(index, dayImagesLength, state, dayNumber)}
		>
			{isLoaded && (
				<SpinnerContainer>
					<Spinner />
				</SpinnerContainer>
			)}

			<Image
				// placeholder={<Spinner />}
				// onLoad={() => console.log("setLoaded(true)")}
				beforeLoad={() => toggleIsLoaded(true)}
				afterLoad={() => toggleIsLoaded(false)}
				src={src}
				alt={alt}
				loading="lazy"
				effect="blur"
				style={{
					objectFit: "contain",
				}}
				width={"100%"}
				// width={100}
				// width={image.width}
				// height={image.height}
			/>
		</Figure>
	)
}

export default PhotoOverview

const Figure = styled.figure`
	position: relative;
	/* min-height: 200px; */
`

const SpinnerContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`
