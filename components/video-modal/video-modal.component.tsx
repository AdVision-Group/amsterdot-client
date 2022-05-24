// Utils
import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { motion } from "framer-motion"

interface IProps {
	onClose: () => void
}

const VideoModal: React.FC<IProps> = ({ onClose }) => {
	return ReactDOM.createPortal(
		<BackgroundContainer
			onClick={onClose}
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
			}}
		>
			<VideoContainer>
				<iframe
					// width="560"
					// height="315"
					src="https://www.youtube.com/embed/Avjw3IBPEMQ"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</VideoContainer>
		</BackgroundContainer>,
		document.getElementById("portal")!
	)
}

export default VideoModal

const BackgroundContainer = styled(motion.div)`
	position: fixed;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 999999999;

	display: flex;
	align-items: center;
	justify-content: center;
`

const VideoContainer = styled(motion.div)`
	position: relative;
	/* background-color: ${({ theme }) => theme.background.container}; */
	width: 100%;
	/* border: 1px solid green; */
	max-width: 80rem;
	aspect-ratio: 4/3;
	padding: 1.5rem;

	iframe {
		width: 100%;
		height: 100%;
		/* border: 1px solid green; */
		max-width: 80rem;
		/* height: 30rem; */
	}
`
