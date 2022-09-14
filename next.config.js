/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = {
    async redirects() {
        return [
            {
                source: "sitemap.xml",
                destination: "/api/sitemap",

                source: "/about",
                destination: "/",
                permanent: true,

                source: "/movie-reviews/:slug*",
                destination: "/",
                permanent: true,
            },
        ];
    },
    images: {
        domains: ["eleventy8.com"],
    },
};
