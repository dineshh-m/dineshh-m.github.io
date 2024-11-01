import fs from 'node:fs/promises'
import { compile, run } from '@mdx-js/mdx';
import rehypeKatex from 'rehype-katex';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import * as runtime from 'react/jsx-runtime';
import { Code } from 'bright';

export default async function Post({ params }: { params: { slug: string}}) {
      const mdxFunctionBody = await compile(
        // @ts-ignore
        await fs.readFile(`./posts/${params.slug}.mdx`),
        {
          // @ts-ignore
          rehypePlugins: [rehypeKatex],
          remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath],
          outputFormat: "function-body",
          development: false,
        }
      );
      const code = String(mdxFunctionBody);
      // @ts-ignore
      const { default: Content } = await run(code, runtime);
    return <Content components={{ pre: Code }}/>;
}