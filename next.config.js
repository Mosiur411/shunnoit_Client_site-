/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  optimizeFonts:true,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'api.priceinkenya.com'
      }
    ]
  }
}

module.exports = nextConfig
