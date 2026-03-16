import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const localNodeModules = path.join(__dirname, "node_modules");
const localTailwindcss = path.join(localNodeModules, "tailwindcss");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep Next.js rooted to this project folder.
  outputFileTracingRoot: __dirname,
  turbopack: {
    root: __dirname,
    resolveAlias: {
      tailwindcss: localTailwindcss,
    },
  },
  webpack: (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = config.resolve.alias ?? {};
    config.resolve.modules = [
      localNodeModules,
      ...(config.resolve.modules ?? []),
    ];
    config.resolve.alias.tailwindcss = localTailwindcss;
    return config;
  },
};

export default nextConfig;
