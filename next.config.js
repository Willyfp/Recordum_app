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
};

module.exports = nextConfig;
