// Utils
import React from "react"
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

// Components
import Image from "next/image"
import Button from "../button/button.component"

const AboutSection = () => {
	const { scrollYProgress } = useViewportScroll()

	const transformWatermarkOpacity = useTransform(
		scrollYProgress,
		[0, 0.28, 0.72, 1],
		[1, 0, 0, 0]
	)

	const transformX = useTransform(
		scrollYProgress,
		[0, 0.28, 0.72, 1],
		[0, -500, 0, -1000]
	)

	const partners = [
		{
			image: {
				src: "/assets/substrate.png",
				alt: "substrate logo",
				blurDataURL:
					"data:image/webp;base64,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",
				width: 50,
				height: 50,
				objectFit: "contain",
			},
			name: "substrate",
		},
		{
			image: {
				src: "/assets/polkadot.png",
				alt: "polkadot logo",
				blurDataURL:
					"data:image/webp;base64,UklGRpwIAABXRUJQVlA4WAoAAAAgAAAAZQIAjgIASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCBeBgAAEJEAnQEqZgKPAj7tcrBUP7i0IyLSW1PwHYlpbuFnWxf6WPHkOTbPPqZ8lPsApjh51eBBEkfwGBtzcgJqwVZPGuhkIv78dz/vqsF/AEAa39fd6rTktRrfwqamptqNc9fgSZ7o0sIXRL7ztLOLgFmD6CRH0S02S8bGz2GAU136rCW/GMyCMWDokWBcpRyM9fxCDB0PUIGyqPTW0bKUIlqYG+UX9vadaK5bSBblhIVvFgUMqPVCp1S10FjB47N47K5Vn9u38osjfkB0S060VsA2QwuQIX0OJU5IVQglle060VyrHuHqiHf27fwgKX3L09dm8S1l4IV2CNBGg5Gb8IMHRgMu8pUK5Vn42v0GI28YPheXat/ABf+C1y50S060V8nX+TfhBg6JYdy9Pyloncy6g5GlYnvRBg6JY1gYD2nBoSI+iWnV5UF9tC9DMHwFWGignXLPqFcqx6J/8sqEGDolp1eVBfczMjmQ5bxagzf5mRg6JabMKiYdUXUK5Vn9pR6km6JBQAec30qnBiVkw/6qFXKs/tLOlW5AdEtOtFco76fuAOc34EjruuuFU1Wmii3FLPNi2sjN9vGDolp1ofyo1XqNiGw6r5g5AH1DlTFp1orlWf27fwgwdEtOrykmgBIBdXMMzA+/VAJBqMHchYS6hXKs/t2/hBg6JadaH8hhIQNE5vvucplHFiS0iVi2Du060VyFP7dv4QFLIuZplGyjZQqiYIdi6hu/cBVc6JadaK5Vn9u38IClkW1kIQhCEIRAVgBtfhCt5RgrlWf27dcgwdEtNksi0A+PrGMYxjGMY3lIFWFEfVwTuZkiP+Ejs9HMuLEIMHEyo9mLsYxjGMYxjG/3VfGxZBgrlWf27fwgwcTIX45UUyjZRso2UbKNlGxvVDSsjNrkGDoen7cHVtqRso2UbKNlGyjZRsobQjhiEGDolpsls2eRsQ2IbENiGxDYhsQ2H+UOSAILP7dv3/w9mYQMIGEDCBhAwgYQMH8Vd0M/iCpbZNXOb8BhAwgYQMIGEDCBgoJyhJ4k/N50UyjZRso2UbKNlGyjZRsgZTSLCVBO8dGxDYhsQ2IbENiGxDYhr+lMRuZtldbhhMnRTKNlGyjZRso2UbKNlDdvGjFg0t0gBncZDMIGEDCBhAwgYQMIGCgd8tkZwbOVZS4EgSo0yjZRso2UbKNlGyjTuzyEGDov1v4AFUMQu+vUbKNlGyjZRso2UbIA5D6Jadd7uToewNuQxhGIGEDCBhAwgYQMIGA9sh9kZvwho0cpb9/8XLfFvi3xb4t8W+LfBz7GDixCGjR1wStQj6LMjmRzI5kcyOZHMjgi5YhBi6/62LMRg4mnvUbKNlGyjZRso2MZlPivvRLUGM7d1dUXRlTzkz1U9W+rfVvq31b6o9fgSdYPHkp/quSXFh/9co2UbKNlGyjZRsVxq5YOU340siWdb+EBVTqnq31b6t9W+rfJMDOKljHqIyElq+9D1etrfFvi3xb4t8W7vAk0aQy6KtN/+9qNEvW1vi3xb4t8W+Ld3iM12Cc+ePLnIyeyBPHnN+AwgYQMHuAA/vfcrLZ2LDMpXPqrOIIQZ9U5QZ2O4XFCrCa20J7EllcqWW77S4wpcYUy931b0tceCMHjXFXNvWHLwxK6TaKjSBXj4gQOLm5TNAp02bECloawp+bZWUMuo90S1yDdurgQ9yd9OtYJoriPqNzKJ5baOgZ2CwDsg/5NuTaYVQ2RBv5FFaR+2jEAsDiZnye+vLkA7LSTgJP/+bV4Pf52JUDsgbsjENDJe+cGobgpZNfQSj134YY98Zt6z0hBMi0pVWCuaMWWn1DWUZPADRxMhc/WeYqZNi2KN7tNUIp+rCbwzaSSdzD14Ak0ID+IjGrejp5lTlpyJlZaPrt+XrIDbWGKI9Lv9lc+yWPK0AQtUvPILyGE4RCGjIwAt8E2/ISl1Y9QOHQIcRbgjghV3R0Tdr2OQDxGPZY5r00gDaK+SNAaMbuKhYFAlzVgAwgLCq92uyiKFSrURgkFAWXIkD7sETa0JFRCbR+0JaKXAObOYYwx/Sps8OQaYsVKFGFzYrWJQ+0fcFggr5UPNAD0MV/ETHEbItcQKHYbENzvyHVeTcguSJEFrEof9OfT9/lziICi2Fd6ZmWrBobWyA9BrrsqpLSulHPgK/ghzU7mWzwAAA==",
				width: 50,
				height: 50,
				objectFit: "contain",
			},
			name: "polkadot",
		},
		{
			image: {
				src: "/assets/kusama.png",
				alt: "substrate logo",
				blurDataURL:
					"data:image/webp;base64,UklGRkIDAABXRUJQVlA4WAoAAAAgAAAAMgEAvQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCAEAQAA0BQAnQEqMwG+AD7tdq9VqacjoyAp6TAdiWlu3fVzjwQCg4kDWkX4+vyuRflWKZN+yhh2/RE0oZIN3wkyyPxu0qz0UrkI0h6njjQYSLkoa/RQCdfRI+tT9ImfA3bBkvnDm69fk98zoQXsHuII99JKLpfODJEDI66qIGC5d6RRmfBxqiGBaIQn6M2C4NJtKGWo80QhP0ZlXGv5YnA115HzGg1ea6NdYM+DJecGS84MEAD+8RjQQcDOWeREROKW4BpHcu+C81IXmTln9WybDDtjSxZ0eh63jQidD7w1tuvUuop479rquAPRGCz11IN/lI97nSabJfl/p8IYcH7JflEAAAAAAAA=",
				width: 50,
				height: 50,
				objectFit: "contain",
			},
			name: "kusama",
		},
	]

	return (
		<SectionContainer>
			<Container
			// style={{
			// 	y: transformX,
			// }}
			>
				<LabelContainer>
					<p>INFO</p>
				</LabelContainer>
				<ContentContainer>
					<h2>WHAT IS amsterDOT?</h2>
					<p>
						4 days of conf & hack sessions organized by some of the leading
						projects of the Polkadot and Kusama ecosystems.
					</p>
					<div>
						{partners.map((i, idx) => (
							<figure key={idx}>
								<Image
									src={i.image.src}
									blurDataURL={i.image.blurDataURL}
									placeholder="blur"
									width={i.image.width}
									height={i.image.height}
									alt={i.image.alt}
									objectFit="contain"
								/>
							</figure>
						))}
					</div>
					<p>
						Offering an inclusive space to meet, greet, talk and exchange
						thoughts, and perhaps kick off the next interesting collaboration.
						Targeting the wider crypto community.
					</p>
					<div>
						<Button>CONF PROGRAMME</Button>
						<Button outline={true}>HACK PROGRAMME</Button>
					</div>
				</ContentContainer>
				<AnimationContainer
					className="first"
					animate={{
						x: [0, 20, 10, -5, 0],
						scale: [1.2, 0.97, 0.9, 1, 1.2],
					}}
					transition={{
						repeat: Infinity,
						ease: "easeInOut",
						duration: 10,
					}}
				>
					<Image
						src={"/assets/animation-ilu.gif"}
						alt="red circle"
						layout="responsive"
						width={100}
						height={100}
						objectFit="cover"
					/>
				</AnimationContainer>
			</Container>
		</SectionContainer>
	)
}

export default AboutSection

const SectionContainer = styled.section`
	flex: none;
	width: 100%;
	height: 100vh;
	/* overflow: hidden; */

	display: flex;
	justify-content: center;

	color: ${({ theme }) => theme.fonts.primary};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
		align-items: center;
	}
`

const Container = styled(motion.div)`
	width: 100%;
	/* margin: 25rem 1.5rem 0; */
	margin: 9rem 1.5rem 0;
	max-width: 90rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin: 11rem 1.5rem 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
			max-width: 130rem;
		}
	}
`

const LabelContainer = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.color.primary};
	padding: 1.5rem;
	display: inline-block;
`

const ContentContainer = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.background.container};
	padding: 1.5rem;
`

const AnimationContainer = styled(motion.div)`
	position: relative;
	background-color: ${({ theme }) => theme.background.container};
	padding: 1.5rem;
`
