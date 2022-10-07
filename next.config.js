/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = {
    async redirects() {
        return [
            {
                // Keep checking GSC for 404 errors
                source: "/movie-reviews/:slug*",
                destination: "/",
                permanent: true,
            },
            {
                // Keep checking GSC for 404 errors
                source: "/author/eleventy8:slug*",
                destination: "/",
                permanent: true,
            },
        ];
    },
    images: {
        domains: ["eleventy8.com"],
    },
};
