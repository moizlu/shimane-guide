declare module '*.mdx' {
  import type { ComponentType } from 'react';

  // フロントマターの型。必要に応じてキーを追加してください
  export const frontmatter: Record<string, any>;

  // MDXファイル自体はReactコンポーネントとして振る舞う
  const Component: ComponentType<any>;
  export default Component;
}
