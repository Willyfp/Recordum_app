/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

module.exports = withPWA({
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_DECODE_KEY: process.env.NEXT_PUBLIC_DECODE_KEY,
  },
  // redirects: async () => [
  //   {
  //     source: "/",
  //     has: [
  //       {
  //         type: "cookie",
  //         key: "alreadyAccess",
  //         value: "true",
  //       },
  //     ],
  //     destination: "/home",
  //     permanent: false,
  //   },
  // ],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
});
