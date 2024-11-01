import { Post } from "@/app/lib/types"
import BlockEntry from "../block-entry";
import styles from './post-list.module.css';

interface Props {
    posts: Post[];
}

export default function PostList(props: Props) {
    const { posts } = props;

    return (
      <ul className={styles.blogList}>
        {posts.map((post) => {
            const date = new Date(post.date).toLocaleDateString('en-US', {
                month: 'numeric',
                day: 'numeric',
                year: 'numeric',
            })
            return <BlockEntry key={post.slug} href={`/blog/${post.slug}`} title={post.title} date={new Date(date)} />;
        })}
      </ul>
    );
}