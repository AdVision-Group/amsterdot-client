// Types
import type { NextPage } from "next"

// Utils
import React, { useState } from "react"
import styled from "styled-components"

// Components
import Head from "next/head"
import Header from "../components/header/header.component"
import Image from "../components/image/image.component"

// Hooks
import { useRouter } from "next/router"
// import { motion, useViewportScroll } from "framer-motion"
import { useMap, useBoolean } from "react-use"

// Data
import { events, hackatons } from "../utils/data"

// Icons
import { AiFillGithub } from "react-icons/ai"

const PhotosPage: NextPage = () => {
	const { push } = useRouter()

	// const { scrollYProgress } = useViewportScroll()

	const [event, { setAll }] = useMap({
		events: events.map((i, idx) => ({
			id: idx,
			showContent: false,
		})),
	})
	const [hackaton, { setAll: setAllHackathon }] = useMap({
		hackatons: hackatons.map((i, idx) => ({
			id: idx,
			showContent: false,
		})),
	})

	// scrollYProgress.onChange((e) => console.log(e))

	const openEventDayProgram = (
		showContent: boolean,
		i: number,
		dayID: string
	) => {
		setAll({
			...event,
			events: event.events.map((e, id) => {
				if (i === id) {
					return {
						id: id,
						showContent: showContent,
					}
				} else {
					return {
						id: id,
						showContent: e.showContent,
					}
				}
			}),
		})
		push(`/#${dayID}`)
	}
	const openHackathonDayProgram = (
		showContent: boolean,
		i: number,
		dayID: string
	) => {
		setAllHackathon({
			...event,
			hackatons: hackaton.hackatons.map((e, id) => {
				if (i === id) {
					return {
						id: id,
						showContent: showContent,
					}
				} else {
					return {
						id: id,
						showContent: e.showContent,
					}
				}
			}),
		})
		push(`/#${dayID}`)
	}

	const images = [
		{
			thumbnail_url:
				"data:image/webp;base64,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",
			src: "/assets/footer/1-v2.jpeg",
			alt: "1",
			width: 100,
			height: 100,
			layout: "responsive",
			objectFit: "contain",
		},
		{
			thumbnail_url:
				"data:image/webp;base64,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",
			src: "/assets/footer/4-v2.jpeg",
			alt: "work",
			width: 100,
			height: 100,
			layout: "responsive",
			objectFit: "contain",
		},
		{
			thumbnail_url:
				"data:image/webp;base64,UklGRsQFAABXRUJQVlA4WAoAAAAgAAAAZQIAmQEASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCCGAwAA0EUAnQEqZgKaAT7tdrdWqaclI6AIATAdiWlu4Wa/MM6nnP9lHxIB8Y/QAnsA99snIe+2TkPfbmdgi8y/T2ych77ZTOC7exJ+jP1f381RFys3XhBdw2c/2E1nqImLYayJ4T34Xm1OUQLOf3f199ChhMDtQD5228zNAzh8QYGg0elptD8iIamJLCd1EzNA5omzGbOHaFyuzpToNSmL2Sm9Dya4Pl3Yb0FGx/gNvKsZIj/f7cfbJyq8PhVqPzouI00mu00rd7wiRdYr38R8bs3lLNKF67rP0lvqEXLbXAgehex1q2zeoZr/NqB74pSBteLmMtS7rz3+/p63f2Lnh/hNN9s9sx8nH8GiFiyC5jqBKVj/IK3K7cCcsYRSyAxXxdOlR89RZ8KweL7YZxtaNzr5EVpWXEeUOrvPUVP3nuppBBRRUyLAzhPZqOUs1V/LxDrJwGQfbdPbN3K7ZnZO1Rud+CF1bxDrKhl6GfWpRKyXqfvCNnWZo56iq1CHWSoqPae2TpALQjOdxCItER5GH5XaycCm9F4uTkSGGfiVCXi/PFZt2Qr0lPnS59L1hwgu1RI+rDLfYpTkJTbYCq6paVoeLk5D34sdCV/AD/1FLrPFz/fAEA99snIe+2q2BuXOd/vvnVXU+JAsl2vFych77xEyn8RzJVO0bhvFych77ZOQ99sniVhIXj0eZqFp7ZOQ99snIe/xHiHOJehtwdRaVAsl2vFych77ZORax6GBLC+l2vFych77ZOFAAP733S9DhV23s7oY72jrjnTZKmXjzC3xdSu4TXHZLeBdvmQ5XAeFHqPfvHh+wn0bCfeDtusS3mKouidRvUcj1bI79KOp7ct9tjBhfCVU1ybPppImuByi9St7RE00HUiozi9RFoEuCu2S218NGWBJUIY38tVPaVLBBtzcpqzCBdxoCBpzvGtEYeN55eq8h78sAySs7jg8dN1QYWuY+Nnz544EsYCusbKKJRb2WOYZMVotOsJUDS+sde6HEFD0xVNKGTYqezCbzWC+eRFbpT3nN0/BHMo4ij2Bfsa20xphAsjNT0YwB8M6vSVnc8mQoFClY6+UD3pXdn2K/bm4jZCAuQUvhOJKtrzhyS6Gtx+mBD1e09NqNYtuGqSKRey8WR7UQVAHDzeJb5P448CEvflq7yNvJehAlFk7LfiAhSPzbtoASJgkiNWFAAAyYgAAAAA=",
			src: "/assets/footer/3-v2.jpeg",
			alt: "work",
			width: 100,
			height: 100,
			layout: "responsive",
			objectFit: "contain",
		},
		{
			thumbnail_url:
				"data:image/webp;base64,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",
			src: "/assets/footer/2-v2.jpeg",
			alt: "work",
			width: 100,
			height: 100,
			layout: "responsive",
			objectFit: "contain",
		},
		{
			thumbnail_url:
				"data:image/webp;base64,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",
			src: "/assets/footer/5-v2.jpeg",
			alt: "work",
			width: 100,
			height: 100,
			layout: "responsive",
			objectFit: "contain",
		},
	]

	const [showModal, toggleModal] = useBoolean(false)

	const [selectedImageIdx, setSelectedImageIdx] = useState<null | number>(null)

	const onImageSelect = (idx: number) => {
		console.log(idx)
		setSelectedImageIdx(idx)
		toggleModal(true)
	}

	const onModalClose = () => {
		setSelectedImageIdx(null)
		toggleModal(false)
	}

	return (
		<React.Fragment>
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<title>amsterDOT Conf Hack</title>
				<meta name="title" content="amsterDOT Conf Hack" />
				<meta
					name="description"
					content="4 days of conf & hack, organized by leading Polkadot projects for the broader crypto family. 4/20-23 in Amsterdam, the Netherlands."
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://amsterdot.io/" />
				<meta property="og:title" content="amsterDOT Conf Hack" />
				<meta
					property="og:description"
					content="4 days of conf & hack, organized by leading Polkadot projects for the broader crypto family. 4/20-23 in Amsterdam, the Netherlands."
				/>
				<meta property="og:image" content="/assets/meta-a.png" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://amsterdot.io/" />
				<meta property="twitter:title" content="amsterDOT Conf Hack" />
				<meta
					property="twitter:description"
					content="4 days of conf & hack, organized by leading Polkadot projects for the broader crypto family. 4/20-23 in Amsterdam, the Netherlands."
				/>
				<meta property="twitter:image" content="/assets/meta-a.png" />
			</Head>

			<Header
				openEventDayProgram={openEventDayProgram}
				openHackathonDayProgram={openHackathonDayProgram}
				ctas={[
					{
						label: "AGENDA 2022",
						slug: "/agenda-2022",
						outline: false,
					},
					{
						label: "HACKATHON 2022",
						slug: "/hackathon-2022",
						outline: true,
					},
				]}
			/>

			{showModal && selectedImageIdx !== null && (
				<Modal onClick={onModalClose}>
					<figure>
						<Image
							src={images[selectedImageIdx].src}
							alt={images[selectedImageIdx].alt}
							effect="blur"
							style={{
								objectFit: "contain",
							}}
							width={"100%"}
							// height={15}
						/>
					</figure>
				</Modal>
			)}

			<SectionContainer>
				<TitleContainer>
					<Image
						src="/assets/photos-section/photos.svg"
						alt="photos"
						effect="blur"
						style={{
							objectFit: "contain",
						}}
						width={"100%"}
						// height={15}
					/>
				</TitleContainer>

				<FlexContainer>
					{images.map((image, index) => (
						<figure onClick={() => onImageSelect(index)} key={index}>
							<Image
								src={image.src}
								alt={image.alt}
								effect="blur"
								style={{
									objectFit: "contain",
								}}
								width={"100%"}
								// width={image.width}
								// height={image.height}
							/>
						</figure>
					))}
				</FlexContainer>
			</SectionContainer>

			<Footer>
				<a
					href="https://github.com/AdVision-Group/amsterdot-client"
					rel="noopener noreferrer"
					target="_blank"
				>
					<figure>
						<AiFillGithub />
					</figure>
				</a>
			</Footer>
		</React.Fragment>
	)
}

export default PhotosPage

const TitleContainer = styled.div`
	margin-bottom: -10rem;
	max-width: 86rem;
	margin: 0 auto 3rem;
	display: flex;
	justify-content: center;
`

const Footer = styled.footer`
	display: flex;
	justify-content: center;

	figure {
		color: ${({ theme }) => theme.color.primary};
		font-size: 3rem;
	}
`

const SectionContainer = styled.section`
	padding: 12rem 3rem;
`

const FlexContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 3rem;
`

const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 999999;
	display: flex;
	justify-content: center;
	align-items: center;
`
