/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  swcMinify: true,
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
 },
}

module.exports = nextConfig
