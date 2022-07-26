// Utils
import React from "react"
import styled from "styled-components"

// Compoenents
import Image from "next/image"

interface IProps {
	image: {
		src: string
		alt: string
	}
	name: string
	logo: {
		src: string
		alt: string
		width?: number
		height?: number
	}
	url: string
}

const SpeakerOverview: React.FC<IProps> = ({ image, name, logo, url }) => {
	return (
		<SpeakerOverviewContainer className="speaker">
			<AvatarContainer>
				<figure className="avatar">
					<Image
						src={image.src}
						alt={image.alt}
						objectFit="contain"
						layout="responsive"
						width={50}
						height={50}
					/>
				</figure>
				<a href={url} rel="noopener noreferrer" target="_blank">
					<figure>
						<Image
							src={"/assets/speakers-section/play.svg"}
							alt={"play"}
							objectFit="contain"
							layout="fixed"
							width={35}
							height={35}
						/>
					</figure>
				</a>
			</AvatarContainer>
			<figure className="logo">
				<Image
					src={logo.src}
					alt={logo.alt}
					objectFit="contain"
					objectPosition={"center"}
					layout="fixed"
					width={logo.width || 100}
					height={logo.height || 40}
				/>
			</figure>
			<h3>{name}</h3>
		</SpeakerOverviewContainer>
	)
}

export default SpeakerOverview

const SpeakerOverviewContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
	/* max-width: 30rem; */
	/* border: 1px solid red; */
	padding: 6rem 2rem;

	.logo {
	}

	h3 {
		font-weight: 900;
		text-transform: uppercase;
		fint-size: 1.7rem;
		color: ${({ theme }) => theme.color.primary};
	}
`

const AvatarContainer = styled.div`
	position: relative;
	width: 11rem;
	height: 11rem;
	margin-bottom: 1rem;

	.avatar {
		border-radius: 50%;
	}

	a {
		position: absolute;
		right: 0;
		bottom: 0;
	}
`
