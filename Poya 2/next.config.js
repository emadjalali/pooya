/** @type {import('next').NextConfig} */
// var webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  output: "export",
};

module.exports = nextConfig;
// module.exports = {
//   webpack5: true,
//   webpack: (config) => {
//     config.resolve.fallback = { fs: false, path: false };

//     return config;
//   },
// };
