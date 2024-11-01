import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";
import type { Post } from "./types";

// interface Post {
//   title: string;
//   slug: string;
//   date: string;
//   tags: string[];
//   description: string;
//   body: string;
//   lastModified?: number;
// }

function getPosts() {
    const posts = readdirSync('./posts/');
    const postsWithMetadata = posts.filter((file) => path.extname(file) === '.mdx' || path.extname(file) === '.md')
    .map(filename => {
        const filePath = `./posts/${filename}`;
        const fileContent = readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);
        if (data.published === false) return null;
        return { ...data, body: content } as Post;
    });

    const filtered = postsWithMetadata
      .filter((post) => post !== null)
      .sort((a, b) =>
        a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
      );


    return filtered;
}

const cached = cache(getPosts);

export default cached;


