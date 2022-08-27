/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  swcMinify: true,
  i18n: {
    locales: ['default', 'en', 'pt'],
    defaultLocale: 'default',
 },
}

module.exports = nextConfig
