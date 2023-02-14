/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PUBLIC_KEY: process.env.PUBLIC_KEY,
  },
};

module.exports = nextConfig;
