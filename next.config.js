/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  swcMinify: true,
  i18n: {
   locales: ["en-US", "pt-PT"],
   //  default locale used when the non-locale paths are visited
   defaultLocale: "en-US",
 },
}

module.exports = nextConfig
