/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts")
const nextConfig = withFonts({
	reactStrictMode: true,
	compiler: {
		// ssr and displayName are configured by default
		styledComponents: true,
	},
	images: {
		domains: ["res.cloudinary.com"],
	},
})

module.exports = nextConfig
