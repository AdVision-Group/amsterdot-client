// Types
import type { NextPage } from "next"

// Utils
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { events } from "../utils/data"

// Components
import Head from "next/head"
import EventOverview from "../components/event-overview/event-overview.component"

const Home: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Amsterdot</title>
				<meta name="description" content="Amsterdot" />
			</Head>

			<MainContainer>
				<HeroContainer>
					<h1>Hero section</h1>
				</HeroContainer>
				<FlexContainer>
					{events.map((event, idx) => (
						<SectionContainer key={idx}>
							<EventOverview item={event} />
						</SectionContainer>
					))}
				</FlexContainer>
				<FooterContainer>
					<h1>footer section</h1>
				</FooterContainer>
			</MainContainer>
		</React.Fragment>
	)
}

export default Home

const MainContainer = styled.main`
	width: 100vw;
	height: 100vh;
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	background-color: ${({ theme }) => theme.background.primary};

	.hor {
		scroll-snap-align: start;
	}
`

const FlexContainer = styled(motion.div)`
	scroll-snap-type: x mandatory;
	scroll-snap-align: start;
	overflow-x: scroll;
	display: flex;
	width: 100vw;
	background-color: ${({ theme }) => theme.background.primary};
	height: 100vh;
`

const HeroContainer = styled.section`
	flex: none;
	width: 100vw;
	height: 100vh;
	color: #fff;

	scroll-snap-align: start;

	display: flex;
	justify-content: center;
	align-items: center;

	color: #fff;

	background-color: ${({ theme }) => theme.background.primary};
`

const FooterContainer = styled.section`
	flex: none;
	width: 100vw;
	height: 100vh;
	color: #fff;

	scroll-snap-align: start;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${({ theme }) => theme.background.primary};
`
const SectionContainer = styled.section`
	flex: none;
	width: 100vw;
	height: 100vh;

	scroll-snap-align: start;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${({ theme }) => theme.background.primary};
`
