// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  images: {
    domains: ['i.scdn.co', 'i1.sndcdn.com', 'i.ytimg.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.module.rules.push({
      test: /\.md|\.mdx$/,
      use: 'raw-loader',
    });

    return config;
  },
}