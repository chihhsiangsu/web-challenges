/** @type {import('next').NextConfig} */

const nextConfig = {
  // {...}
  images: {
    domains: ["upload.wikimedia.org"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
