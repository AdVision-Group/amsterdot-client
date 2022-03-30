export type ThemeType = typeof light // This is the type definition for my theme object.

export const light = {
	color: {
		primary: "#FF008C",
	},
	background: {
		primary: "#000",
		container: "#161616",
		secondary: "#272727",
		activeContainer: "#2B2B2B",
		footerBackground: "rgb(20, 20, 20)",
		lightGray: "rgb(235, 235, 235)",
	},
	fonts: {
		primary: "#DDDDDD",
		secondary: "#000",
	},
	breakpoints: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		xxl: "2536px",
	},
} as const

// export const dark: ThemeType = {
// 	colors: {

// 	},
// 	breakpoints: {
// 		sm: "640px",
// 		md: "768px",
// 		lg: "1024px",
// 		xl: "1280px",
// 		xxl: "1536px",
// 	},
// } as const

const theme = light // set the light theme as the default.
export default theme
