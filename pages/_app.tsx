// Types
import type { AppProps } from "next/app"
import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"

// Utils
import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/global.styles"
import theme from "../styles/theme.styles"
import "../styles/global.styles.scss"

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				{getLayout(<Component {...pageProps} />)}
			</ThemeProvider>
		</>
	)
}

export default MyApp
