const META = {
    title: "Sextuplets",
    description: "App description",
    lang: "en",
    url: "https://example.com",
    image: "/logo.png",
    tags: []
}

const IS_PRODUCTION = process.env.NODE_ENV === "production";

export { IS_PRODUCTION, META };