/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
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

module.exports = nextConfig;
