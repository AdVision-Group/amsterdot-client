/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts")
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		// ssr and displayName are configured by default
		styledComponents: true,
	},
	images: {
		domains: ["res.cloudinary.com"],
	},
	webpack(config, options) {
		return config
	},
}

module.exports = withFonts(nextConfig)
