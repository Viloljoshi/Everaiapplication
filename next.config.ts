import type { NextConfig } from "next";

// On GitHub Actions the site is served from https://<user>.github.io/<repo>/,
// so a project page needs its base path set to the repository name. Locally
// (and on a user/org page) the base path stays empty.
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectPage =
  process.env.GITHUB_ACTIONS === "true" &&
  repositoryName.length > 0 &&
  !repositoryName.endsWith(".github.io");

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProjectPage ? `/${repositoryName}` : "",
  reactStrictMode: true,
  agentRules: false,
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
