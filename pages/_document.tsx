import Document, { Html, Head, Main, NextScript } from "next/document"

import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: any) => (props: any) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/favicon-v2/favicon.ico" />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/favicon-v2/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-v2/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-v2/favicon-16x16.png"
					/>
					<link rel="manifest" href="/favicon-v2/site.webmanifest" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="theme-color" content="#ffffff"></meta>
					{/* <link href="/fonts/Avenir-Next.ttc" rel="stylesheet" /> */}
				</Head>
				<body>
					<Main />
					<NextScript />
					<div id="portal" />
				</body>
			</Html>
		)
	}
}
