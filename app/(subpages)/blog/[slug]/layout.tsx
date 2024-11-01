import getPosts from "@/app/lib/get-posts";
import styles from './layout.module.css';

export async function generateStaticParams() {
    const posts = getPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

function getData({ slug }: { slug: string }) {
    const posts = getPosts();
    const postIndex = posts.findIndex((p) => p.slug === slug);
    const post = posts[postIndex]
    const { ...rest } = post;

    return {
        previous: posts[postIndex - 1] || null,
        next: posts[postIndex + 1] || null,
        ...rest,
    }
}

export default function PostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
    const { title, date, tags } = getData(params);
    const properDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <article>
            <span className={styles.date}>{properDate}</span>
            <ul className={styles.tags}>
                {tags.length >= 1 && tags.map(tag => <li className={styles.tag} key={tag}>{tag}</li>)}
            </ul>
            <h1>{title}</h1>
            {children}
        </article>
    )
}
