import Image from 'next/image'
import styles from './page.module.css'
import PostListRSC from './components/post-list/rsc';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p>
        Hi, I am a Dinesh! I am software developer tryin&apos; to learn lot of
        things. I code in JavaScript, Golang, Java, Python and sometimes in C as
        well. I am interested in Web apps, Linux, Compilers, System Programming, Databases
        and... you get the idea right?
      </p>
      <section>
        <h2>Blogs</h2>
        <div>
          <PostListRSC />
        </div>
        <Link href="/blog" className={styles.link}>
          See More
        </Link>
      </section>
    </>
  );
}
