import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {


     images: {
    domains: [
      "almasader.net",
      "khod.almasader.net/storage",
      "khod.almasader.net",
    ],
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);