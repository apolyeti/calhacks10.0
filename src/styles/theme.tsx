import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			secondary: "#99786E",
			primary: "#FFA695",
		},
	},
	styles: {
		global: () => ({
			html: {
				height: "100%",
			},
			body: {
				fontFamily:
					"Palanquin, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
				color: "black",
				lineHeight: "base",
				padding: 0,
				margin: 0,
				backgroundColor: "brand.secondary",
			},
			a: {
				color: "inherit",
				textDecoration: "none",
			},
			ul: {
				listStyle: "none",
			},
			"&::-webkit-scrollbar": {
				width: "0.6em",
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: "0px",
				background: "transparent",
			},
			"&::-webkit-scrollbar-thumb": {
				background: "brand.primary",
				borderRadius: "50px",
			},
			h1: {
				fontFamily: "Ubuntu, Robot, -apple-system",
				fontSize: "3rem",
				color: "#FFC1AE",
				justifyContent: "center",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			},
			p: {
				color: "#FCE6E0",
				fontFamily: "Ubuntu, Robot, -apple-system",
				justifyContent: "center",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}
		}),
	},
});

export default theme;