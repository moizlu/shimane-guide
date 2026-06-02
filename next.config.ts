import type { NextConfig } from "next";
import buildMdx from '@next/mdx';
// import remarkFrontmatter from 'remark-frontmatter';
// import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

const withMDX = buildMdx({
  options: {
    // フロントマターをパースしてJavaScriptのexportに変換するプラグイン
    remarkPlugins: ['remark-frontmatter', 'remark-mdx-frontmatter'],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  allowedDevOrigins: ['172.16.0.2'],
};

export default withMDX(nextConfig);
