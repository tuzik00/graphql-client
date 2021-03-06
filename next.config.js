const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');

module.exports = withPlugins(
  [
      withBundleAnalyzer({
        enabled: process.env.ANALYZE === 'true',
      })
  ],
  {
    trailingSlash: true,
    publicRuntimeConfig: {
      PORT: process.env.PORT,
      APOLLO_GATEWAY: process.env.APOLLO_GATEWAY,
      APOLLO_GATEWAY_WS: process.env.APOLLO_GATEWAY_WS,
    }
  }
)
