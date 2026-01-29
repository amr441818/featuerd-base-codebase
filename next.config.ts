import { NextConfig } from 'next';

import bundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

// 1. Create analyzer instance
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// 2. Create next-intl plugin
const withNextIntl = createNextIntlPlugin();

// 3. Your base Next.js config
const nextConfig: NextConfig = {
  reactStrictMode: true,
   output: "standalone",
  images: {
    domains: [
      'almasader.net',
      'images.unsplash.com',
      'khod.almasader.net/storage',
      'khod.almasader.net',
    ],
  },
};

// 4. Combine both plugins
export default withBundleAnalyzer(withNextIntl(nextConfig));
