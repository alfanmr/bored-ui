import nextra from 'nextra';

// Remove theme and themeConfig from here, Nextra likely detects them automatically
const withNextra = nextra({
  // Optional: Add other Nextra options here (e.g., mdxOptions)
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in newer Next.js versions
  // Optional: Add other Next.js config here
  reactStrictMode: true,
  // Ensure Next.js can transpile our local packages
  transpilePackages: ['@boredui/core', '@boredui/components'],
  // Add experimental flag often needed for monorepos/transpiling
  // experimental: {
  //   esmExternals: 'loose', // Helps with resolving dependencies in monorepos
  // },
  // Required for Vanilla Extract with Next.js App Router (even if using pages)
  // Might not be strictly necessary if only using pages, but good practice
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.vanilla\.css$/i,
  //     use: ['style-loader', 'css-loader'], // Basic loaders, might need specific VE loader later
  //   });
  //   return config;
  // },
};

export default withNextra(nextConfig);
