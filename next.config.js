/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_DECODE_KEY: process.env.NEXT_PUBLIC_DECODE_KEY,
  },
  redirects: async () => [
    {
      source: "/",
      has: [
        {
          type: "cookie",
          key: "alreadyAccess",
          value: "true",
        },
      ],
      destination: "/home",
      permanent: false,
    },
  ],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = withPWA(nextConfig);
