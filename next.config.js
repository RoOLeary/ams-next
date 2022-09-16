/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com', 'unsplash.com'],
  },
  swcMinify: true,
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
 },
}

module.exports = nextConfig
